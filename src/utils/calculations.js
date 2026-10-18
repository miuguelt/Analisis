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
  const tope = Math.min(100, Math.max(0, Number(porcentajeTope) || 25));
  const excepcion = Math.min(100 - tope, Math.max(0, Number(porcentajeExcepcion) || 0));

  const cupoContratos = Math.round(contratos * (tope / 100));
  const recorteContratos = Math.max(0, contratos - cupoContratos);

  const cupoPresupuesto = presupuesto * (tope / 100);
  const ahorroEstimadoBruto = Math.max(0, presupuesto - cupoPresupuesto);

  const contratosExcepcion = Math.round(contratos * (excepcion / 100));
  const presupuestoExcepcion = presupuesto * (excepcion / 100);

  const contratosEfectivos = cupoContratos + contratosExcepcion;
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
    presupuestoEfectivo,
    ahorroNeto,
    porcentajeReduccionEfectiva: Number(porcentajeReduccionEfectiva.toFixed(1))
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
  if (porcentajeReduccion >= 65 && (dependencia.includes("Crítica") || dependencia.includes("Extrema"))) {
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
