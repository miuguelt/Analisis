/**
 * Utilidades de cálculo matemático y financiero según lineamientos
 * de la Circular Externa No. 08 del 15 de octubre de 2026 del DAPRE.
 */

/**
 * Calcula el impacto del tope del 25 % y las excepciones sobre la línea base.
 * @param {number} totalContratos - Número total de contratos en la línea base bienal
 * @param {number} totalPresupuesto - Valor total en pesos colombianos de la línea base
 * @param {number} porcentajeTope - Tope máximo reglamentario (por defecto 25 %)
 * @param {number} porcentajeExcepcion - Porcentaje adicional justificado por causales válidas
 * @returns {object} Resultados cuantitativos del cálculo
 */
export function calcularLineaBase(
  totalContratos = 0,
  totalPresupuesto = 0,
  porcentajeTope = 25,
  porcentajeExcepcion = 0
) {
  const contratos = Math.max(0, Number(totalContratos) || 0);
  const presupuesto = Math.max(0, Number(totalPresupuesto) || 0);
  const parsedTope = Number(porcentajeTope);
  const tope = Math.min(100, Math.max(0, Number.isFinite(parsedTope) ? parsedTope : 25));
  const parsedExcepcion = Number(porcentajeExcepcion);
  const excepcion = Math.min(100 - tope, Math.max(0, Number.isFinite(parsedExcepcion) ? parsedExcepcion : 0));

  const cupoContratos = Math.round(contratos * (tope / 100));
  const recorteContratos = Math.max(0, contratos - cupoContratos);

  const cupoPresupuesto = presupuesto * (tope / 100);
  const ahorroEstimadoBruto = Math.max(0, presupuesto - cupoPresupuesto);

  const contratosExcepcion = Math.round(contratos * (excepcion / 100));
  const presupuestoExcepcion = presupuesto * (excepcion / 100);

  const contratosEfectivos = cupoContratos + contratosExcepcion;
  const recorteContratosEfectivo = Math.max(0, contratos - contratosEfectivos);
  const presupuestoEfectivo = cupoPresupuesto + presupuestoExcepcion;
  const ahorroNeto = Math.max(0, presupuesto - presupuestoEfectivo);

  const porcentajeReduccionEfectiva = contratos > 0 
    ? ((contratos - contratosEfectivos) / contratos) * 100 
    : 0;

  return {
    contratosBase: contratos,
    presupuestoBase: presupuesto,
    topeReglamentario: tope,
    porcentajeExcepcion: excepcion,
    cupoContratos,
    recorteContratos,
    cupoPresupuesto,
    ahorroEstimadoBruto,
    contratosExcepcion,
    presupuestoExcepcion,
    contratosEfectivos,
    recorteContratosEfectivo,
    presupuestoEfectivo,
    ahorroNeto,
    porcentajeReduccionEfectiva: Number(porcentajeReduccionEfectiva.toFixed(1))
  };
}

/**
 * Calcula el límite de ocupación del 60 % en empleos de Libre Nombramiento y Remoción (Numeral 2).
 * @param {number} cargosTotales - Total de empleos de LNR previstos en la planta global
 * @param {number} cargosExcluidos - Cargos de Ministro, Viceministro, Director/Subdirector y esenciales excluidos
 * @param {number} porcentajeMaximo - Porcentaje máximo de ocupación permitido (60 % por defecto)
 * @returns {object} Desglose de cargos provistos y congelados
 */
export function calcularTopeLNR(
  cargosTotales = 0,
  cargosExcluidos = 0,
  porcentajeMaximo = 60
) {
  const total = Math.max(0, Number(cargosTotales) || 0);
  const excluidos = Math.min(total, Math.max(0, Number(cargosExcluidos) || 0));
  const parsedTope = Number(porcentajeMaximo);
  const topePorcentaje = Math.min(100, Math.max(0, Number.isFinite(parsedTope) ? parsedTope : 60));

  const baseCalculo = Math.max(0, total - excluidos);
  const cupoMaximoProvisto = Math.round(baseCalculo * (topePorcentaje / 100));
  const cargosCongelados = Math.max(0, baseCalculo - cupoMaximoProvisto);
  const totalPermitidoEnPlanta = cupoMaximoProvisto + excluidos;
  const porcentajeCongelado = baseCalculo > 0
    ? Number((((baseCalculo - cupoMaximoProvisto) / baseCalculo) * 100).toFixed(1))
    : 0;

  return {
    cargosTotales: total,
    cargosExcluidos: excluidos,
    baseCalculo,
    topePorcentaje,
    cupoMaximoProvisto,
    cargosCongelados,
    totalPermitidoEnPlanta,
    porcentajeCongelado
  };
}

/**
 * Calcula las deducciones de seguridad social (IBC 40 %) y el ingreso líquido de un contratista OPS.
 * @param {number} honorariosMensuales - Valor bruto mensual de honorarios en COP
 * @returns {object} Desglose de IBC, salud, pensión, ARL e ingreso neto
 */
export function calcularLiquidacionContratista(honorariosMensuales = 0) {
  const honorariosBrutos = Math.max(0, Number(honorariosMensuales) || 0);
  const ibc = Math.round(honorariosBrutos * 0.4);
  const aporteSalud = Math.round(ibc * 0.125);
  const aportePension = Math.round(ibc * 0.16);
  const aporteARL = Math.round(ibc * 0.00522);
  const totalSeguridadSocial = aporteSalud + aportePension + aporteARL;
  const ingresoLiquidoEstimado = Math.max(0, honorariosBrutos - totalSeguridadSocial);
  const porcentajeCargaSeguridadSocial = honorariosBrutos > 0
    ? Number(((totalSeguridadSocial / honorariosBrutos) * 100).toFixed(1))
    : 0;

  return {
    honorariosBrutos,
    ibc,
    aporteSalud,
    aportePension,
    aporteARL,
    totalSeguridadSocial,
    ingresoLiquidoEstimado,
    porcentajeCargaSeguridadSocial
  };
}

/**
 * Formatea cifras en Pesos Colombianos con abreviación legible para billones y millones.
 * @param {number} valor - Valor en COP
 * @returns {string} Texto formateado
 */
export function formatearCOP(valor = 0) {
  const num = Number(valor) || 0;
  if (Math.abs(num) >= 1e12) {
    return `$ ${(num / 1e12).toLocaleString('es-CO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} billones`;
  }
  if (Math.abs(num) >= 1e9) {
    return `$ ${(num / 1e9).toLocaleString('es-CO', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} mil millones`;
  }
  if (Math.abs(num) >= 1e6) {
    return `$ ${(num / 1e6).toLocaleString('es-CO', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} millones`;
  }
  return `$ ${num.toLocaleString('es-CO')}`;
}

/**
 * Formatea números enteros con separadores de miles colombianos.
 * @param {number} valor - Valor numérico
 * @returns {string} Número con puntos
 */
export function formatearNumero(valor = 0) {
  return (Number(valor) || 0).toLocaleString('es-CO');
}

/**
 * Evalúa el nivel de alerta operativa ante la reducción de contratistas.
 * @param {number} porcentajeReduccion - Porcentaje efectivo de recorte
 * @param {string} dependencia - Nivel de dependencia declarada
 * @returns {object} Estado, color y descripción de riesgo
 */
export function evaluarNivelRiesgo(porcentajeReduccion = 75, dependencia = "Alta") {
  const depTexto = String(dependencia || "");
  if (porcentajeReduccion >= 65 && (depTexto.includes("Crítica") || depTexto.includes("Extrema"))) {
    return {
      nivel: "Crítico",
      badgeClass: "bg-rose-100 text-rose-800 border-rose-200",
      mensaje: "Riesgo inminente de suspensión o desmejora en servicios esenciales al ciudadano."
    };
  }
  if (porcentajeReduccion >= 50) {
    return {
      nivel: "Alto",
      badgeClass: "bg-amber-100 text-amber-800 border-amber-200",
      mensaje: "Sobrecarga severa sobre la planta de personal y dilación en trámites administrativos."
    };
  }
  if (porcentajeReduccion >= 25) {
    return {
      nivel: "Moderado",
      badgeClass: "bg-yellow-100 text-yellow-800 border-yellow-200",
      mensaje: "Requiere redistribución inmediata de cargas y digitalización de procesos."
    };
  }
  return {
    nivel: "Controlado",
    badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-200",
    mensaje: "Impacto manejable mediante optimización de horarios y capacidades instaladas."
  };
}

/**
 * Verifica si un caso cumple los requisitos formales de la Circular 08 para excepciones.
 * @param {object} checklist - Respuestas a los criterios obligatorios
 * @returns {object} Dictamen de viabilidad jurídica
 */
export function verificarCausalExcepcion(checklist = {}) {
  const {
    tieneDocumentoEscrito = false,
    especificaCostoYDuracion = false,
    demuestraImposibilidadPlanta = false,
    causalSeleccionada = null
  } = checklist;

  const causalesValidas = [
    "obligaciones_legales_judiciales",
    "servicios_esenciales",
    "seguridad_proteccion",
    "atencion_emergencias",
    "proyectos_destinacion_especifica",
    "compromisos_internacionales"
  ];

  const tieneCausalValida = causalesValidas.includes(causalSeleccionada);
  const esViable = tieneDocumentoEscrito && especificaCostoYDuracion && demuestraImposibilidadPlanta && tieneCausalValida;

  return {
    esViable,
    cumpleCausal: tieneCausalValida,
    cumpleRequisitosFormales: tieneDocumentoEscrito && especificaCostoYDuracion && demuestraImposibilidadPlanta,
    faltantes: [
      !tieneCausalValida && "Seleccionar una causal taxativa válida",
      !tieneDocumentoEscrito && "Elaborar justificación formal por escrito",
      !especificaCostoYDuracion && "Definir costo presupuestal y duración temporal exacta",
      !demuestraImposibilidadPlanta && "Acreditar por qué la planta actual no puede asumir la función"
    ].filter(Boolean)
  };
}
