import { describe, it, expect } from 'vitest';
import { 
  calcularLineaBase, 
  calcularTopeLNR,
  calcularLiquidacionContratista,
  formatearCOP, 
  formatearNumero, 
  evaluarNivelRiesgo, 
  verificarCausalExcepcion 
} from '../utils/calculations';

describe('Motor de Cálculos — Circular Externa No. 08 de 2026', () => {
  describe('calcularLineaBase', () => {
    it('calcula correctamente el cupo del 25 % y el recorte del 75 % con valores estándar', () => {
      const res = calcularLineaBase(100, 1000000000, 25, 0);
      expect(res.contratosBase).toBe(100);
      expect(res.presupuestoBase).toBe(1000000000);
      expect(res.cupoContratos).toBe(25);
      expect(res.recorteContratos).toBe(75);
      expect(res.cupoPresupuesto).toBe(250000000);
      expect(res.ahorroEstimadoBruto).toBe(750000000);
      expect(res.contratosEfectivos).toBe(25);
      expect(res.ahorroNeto).toBe(750000000);
      expect(res.porcentajeReduccionEfectiva).toBe(75);
    });

    it('aplica excepciones justificadas reduciendo el porcentaje de recorte neto', () => {
      const res = calcularLineaBase(100, 1000, 25, 10);
      expect(res.cupoContratos).toBe(25);
      expect(res.contratosExcepcion).toBe(10);
      expect(res.contratosEfectivos).toBe(35);
      expect(res.recorteContratosEfectivo).toBe(65);
      expect(res.presupuestoEfectivo).toBe(350);
      expect(res.ahorroNeto).toBe(650);
      expect(res.porcentajeReduccionEfectiva).toBe(65);
    });

    it('maneja valores por defecto, tope cero explícito y entradas inválidas', () => {
      const res = calcularLineaBase(0, 0);
      expect(res.contratosBase).toBe(0);
      expect(res.cupoContratos).toBe(0);
      expect(res.porcentajeReduccionEfectiva).toBe(0);

      const resDefault = calcularLineaBase();
      expect(resDefault.contratosBase).toBe(0);
      expect(resDefault.topeReglamentario).toBe(25);

      const resTopeCero = calcularLineaBase(100, 1000, 0, 0);
      expect(resTopeCero.topeReglamentario).toBe(0);
      expect(resTopeCero.cupoContratos).toBe(0);

      const resNaN = calcularLineaBase('abc', 'xyz', 'no-num', 'no-num');
      expect(resNaN.contratosBase).toBe(0);
      expect(resNaN.topeReglamentario).toBe(25);
      expect(resNaN.porcentajeExcepcion).toBe(0);
    });
  });

  describe('calcularTopeLNR (Numeral 2 — Tope 60 % Libre Nombramiento y Remoción)', () => {
    it('calcula el tope máximo del 60 % descontando cargos directivos excluidos', () => {
      const res = calcularTopeLNR(110, 10, 60);
      expect(res.cargosTotales).toBe(110);
      expect(res.cargosExcluidos).toBe(10);
      expect(res.baseCalculo).toBe(100);
      expect(res.cupoMaximoProvisto).toBe(60);
      expect(res.cargosCongelados).toBe(40);
      expect(res.totalPermitidoEnPlanta).toBe(70);
      expect(res.porcentajeCongelado).toBe(40);
    });

    it('maneja valores por defecto, base cero y entradas no numéricas', () => {
      const resDefault = calcularTopeLNR();
      expect(resDefault.cargosTotales).toBe(0);
      expect(resDefault.baseCalculo).toBe(0);
      expect(resDefault.porcentajeCongelado).toBe(0);

      const resExcluidosMayores = calcularTopeLNR(5, 10, 'invalido');
      expect(resExcluidosMayores.cargosExcluidos).toBe(5);
      expect(resExcluidosMayores.baseCalculo).toBe(0);
      expect(resExcluidosMayores.topePorcentaje).toBe(60);

      const resInvalido = calcularTopeLNR('abc', 'xyz', 0);
      expect(resInvalido.cargosTotales).toBe(0);
      expect(resInvalido.topePorcentaje).toBe(0);
    });
  });

  describe('calcularLiquidacionContratista (Impacto en Seguridad Social IBC 40 %)', () => {
    it('calcula IBC del 40 % y aportes a salud, pensión y ARL para un contratista', () => {
      const res = calcularLiquidacionContratista(5000000);
      expect(res.honorariosBrutos).toBe(5000000);
      expect(res.ibc).toBe(2000000);
      expect(res.aporteSalud).toBe(250000);
      expect(res.aportePension).toBe(320000);
      expect(res.aporteARL).toBe(10440);
      expect(res.totalSeguridadSocial).toBe(580440);
      expect(res.ingresoLiquidoEstimado).toBe(4419560);
      expect(res.porcentajeCargaSeguridadSocial).toBeGreaterThan(11);
    });

    it('maneja honorarios en cero o valores inválidos', () => {
      const resCero = calcularLiquidacionContratista();
      expect(resCero.honorariosBrutos).toBe(0);
      expect(resCero.totalSeguridadSocial).toBe(0);
      expect(resCero.porcentajeCargaSeguridadSocial).toBe(0);

      const resInvalido = calcularLiquidacionContratista('invalido');
      expect(resInvalido.honorariosBrutos).toBe(0);
    });
  });

  describe('formatearCOP', () => {
    it('formatea cifras en billones correctamente', () => {
      const res = formatearCOP(22340000000000);
      expect(res).toContain('billones');
      expect(res).toContain('22');
    });

    it('formatea cifras en miles de millones correctamente', () => {
      const res = formatearCOP(880000000000);
      expect(res).toContain('mil millones');
      expect(res).toContain('880');
    });

    it('formatea cifras en millones correctamente', () => {
      const res = formatearCOP(42000000);
      expect(res).toContain('millones');
      expect(res).toContain('42');
    });

    it('formatea cifras menores a un millón y valores en cero', () => {
      const resMenor = formatearCOP(50000);
      expect(resMenor).toContain('$');
      expect(resMenor).toContain('50');

      const resCero = formatearCOP(0);
      expect(resCero).toBe('$ 0');

      const resInvalido = formatearCOP('invalido');
      expect(resInvalido).toBe('$ 0');
    });
  });

  describe('formatearNumero', () => {
    it('formatea números con separador de miles colombiano', () => {
      const res = formatearNumero(501423);
      expect(res).toContain('501');
      expect(res).toContain('423');
    });

    it('maneja valores nulos o no numéricos', () => {
      expect(formatearNumero()).toBe('0');
      expect(formatearNumero(null)).toBe('0');
    });
  });

  describe('evaluarNivelRiesgo', () => {
    it('detecta riesgo Crítico ante recortes altos en dependencias críticas o extremas', () => {
      const resCritica = evaluarNivelRiesgo(75, 'Dependencia Crítica');
      expect(resCritica.nivel).toBe('Crítico');
      expect(resCritica.badgeClass).toContain('rose');

      const resExtrema = evaluarNivelRiesgo(70, 'Dependencia Extrema');
      expect(resExtrema.nivel).toBe('Crítico');

      const resDefault = evaluarNivelRiesgo();
      expect(resDefault.nivel).toBe('Alto');
    });

    it('detecta riesgo Alto ante reducciones mayores o iguales al 50 % o dependencia nula', () => {
      const res = evaluarNivelRiesgo(55, 'Moderada');
      expect(res.nivel).toBe('Alto');
      expect(res.badgeClass).toContain('amber');

      const resNull = evaluarNivelRiesgo(75, null);
      expect(resNull.nivel).toBe('Alto');
    });

    it('detecta riesgo Moderado entre 25 % y 49 %', () => {
      const res = evaluarNivelRiesgo(30, 'Baja');
      expect(res.nivel).toBe('Moderado');
      expect(res.badgeClass).toContain('yellow');
    });

    it('detecta riesgo Controlado con reducciones inferiores al 25 %', () => {
      const res = evaluarNivelRiesgo(15, 'Baja');
      expect(res.nivel).toBe('Controlado');
      expect(res.badgeClass).toContain('emerald');
    });
  });

  describe('verificarCausalExcepcion', () => {
    it('dictamina viabilidad positiva cuando se cumplen todos los requisitos', () => {
      const res = verificarCausalExcepcion({
        causalSeleccionada: 'servicios_esenciales',
        tieneDocumentoEscrito: true,
        especificaCostoYDuracion: true,
        demuestraImposibilidadPlanta: true,
      });
      expect(res.esViable).toBe(true);
      expect(res.cumpleCausal).toBe(true);
      expect(res.cumpleRequisitosFormales).toBe(true);
      expect(res.faltantes).toHaveLength(0);
    });

    it('dictamina no viable e informa faltantes si no se cumplen requisitos formales o se invoca sin argumentos', () => {
      const res = verificarCausalExcepcion({
        causalSeleccionada: 'invalida',
        tieneDocumentoEscrito: false,
        especificaCostoYDuracion: false,
        demuestraImposibilidadPlanta: false,
      });
      expect(res.esViable).toBe(false);
      expect(res.cumpleCausal).toBe(false);
      expect(res.faltantes).toHaveLength(4);

      const resVacio = verificarCausalExcepcion();
      expect(resVacio.esViable).toBe(false);
    });
  });
});

