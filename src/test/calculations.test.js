import { describe, it, expect } from 'vitest';
import { 
  calcularLineaBase, 
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
      expect(res.presupuestoEfectivo).toBe(350);
      expect(res.ahorroNeto).toBe(650);
      expect(res.porcentajeReduccionEfectiva).toBe(65);
    });

    it('maneja valores por defecto y casos límite con cero o valores nulos', () => {
      const res = calcularLineaBase(0, 0);
      expect(res.contratosBase).toBe(0);
      expect(res.cupoContratos).toBe(0);
      expect(res.porcentajeReduccionEfectiva).toBe(0);

      const resDefault = calcularLineaBase();
      expect(resDefault.contratosBase).toBe(0);
      expect(resDefault.topeReglamentario).toBe(25);
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
    it('detecta riesgo Crítico ante recortes altos en dependencias extremas', () => {
      const res = evaluarNivelRiesgo(75, 'Dependencia Crítica');
      expect(res.nivel).toBe('Crítico');
      expect(res.badgeClass).toContain('rose');
    });

    it('detecta riesgo Alto ante reducciones mayores o iguales al 50 %', () => {
      const res = evaluarNivelRiesgo(55, 'Moderada');
      expect(res.nivel).toBe('Alto');
      expect(res.badgeClass).toContain('amber');
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

    it('dictamina no viable e informa faltantes si no se cumplen requisitos formales', () => {
      const res = verificarCausalExcepcion({
        causalSeleccionada: 'invalida',
        tieneDocumentoEscrito: false,
        especificaCostoYDuracion: false,
        demuestraImposibilidadPlanta: false,
      });
      expect(res.esViable).toBe(false);
      expect(res.cumpleCausal).toBe(false);
      expect(res.faltantes.length).toBeGreaterThan(0);
    });
  });
});
