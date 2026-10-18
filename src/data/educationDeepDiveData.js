/**
 * Datos estructurados de profundización sobre el impacto de la Circular Externa No. 08 de 2026
 * en el Servicio Nacional de Aprendizaje (SENA) y las Universidades Públicas (SUE).
 */

export const SENA_DEEP_DIVE = {
  titulo: "Servicio Nacional de Aprendizaje (SENA)",
  subtitulo: "33 Regionales, 118 Centros de Formación y el Desafío de la Formación Profesional Integral",
  naturalezaJuridica: "Establecimiento público del orden nacional, con personería jurídica, patrimonio propio e independiente y autonomía administrativa, adscrito al Ministerio del Trabajo (Ley 119 de 1994).",
  alcanceCircular: "Directamente destinatario por ser entidad adscrita de la Rama Ejecutiva Nacional (por conducto del Ministerio del Trabajo), sujeto al reporte trimestral ante el DAPRE.",
  metricasClave: [
    { label: "Instructores y Apoyos OPS", valor: "~32.000", detalle: "Contratados anualmente vía Banco de Instructores (APE)" },
    { label: "Dependencia en Formación", valor: "78 % - 80 %", detalle: "De las horas de formación titulada y complementaria" },
    { label: "Cobertura Territorial", valor: "118 Centros", detalle: "Distribuidos en las 33 Regionales del país" },
    { label: "Presupuesto OPS Bienal", valor: "$ 880.000 M", detalle: "Financiado con aportes parafiscales (Ley 21/1982) y FIC" }
  ],
  radiografiaOperativa: [
    {
      area: "Formación Titulada (Técnicos y Tecnólogos)",
      impacto: "Programas estratégicos como Análisis y Desarrollo de Software (ADSO), Automatización Industrial, Enfermería, Agroindustria y Energías Limpias requieren instructores especializados con duración trimestral continua. Un recorte del 75 % detendría miles de fichas activas a mitad de su etapa lectiva."
    },
    {
      area: "Articulación con la Educación Media y CampeSENA",
      impacto: "Más de 4.000 colegios oficiales de municipios rurales e intermedios dependen de instructores contratistas desplazados a veredas para que los jóvenes de grados 10.° y 11.° obtengan doble titulación."
    },
    {
      area: "Investigación Aplicada (SENNOVA) y Certificación de Competencias",
      impacto: "Los tecnoparques, tecnoacademias y evaluadores de competencias laborales operan mayoritariamente mediante contratos de prestación de servicios profesionales altamente calificados."
    }
  ],
  blindajeJuridicoCircular08: {
    causalPrincipal: "Numeral 5: Servicios Esenciales y Recursos con Destinación Específica",
    argumentacion: "La formación profesional integral es un derecho constitucional (arts. 54 y 67 CP) y sus recursos provienen de contribuciones parafiscales (2 % de la nómina empresarial, Ley 21 de 1982) y del Fondo de la Industria de la Construcción (FIC), los cuales por mandato legal tienen destinación específica exclusiva para la formación técnica y no forman parte de la burocracia administrativa ordinaria.",
    requisitosExpediente: [
      "Certificación del Director Regional o Subdirector de Centro sobre las fichas activas y horas de instrucción descubiertas por la planta de carrera.",
      "Selección objetiva mediante el Banco de Instructores en la Agencia Pública de Empleo (Decretos 249 de 2004 y 2520 de 2013).",
      "Sustentación de costos y plazos atados estrictamente al calendario académico de formación profesional 2027."
    ]
  }
};

export const UNIVERSIDADES_DEEP_DIVE = {
  titulo: "Universidades Públicas (Sistema Universitario Estatal — SUE)",
  subtitulo: "34 Instituciones de Educación Superior, Ley 30 de 1992 y Autonomía Constitucional",
  naturalezaJuridica: "Entes universitarios autónomos con régimen especial de origen constitucional (Artículo 69 CP y artículos 28 y 57 de la Ley 30 de 1992), personería jurídica y autonomía académica, administrativa y financiera.",
  alcanceCircular: "NO pertenecen a la Rama Ejecutiva ni son entidades adscritas o vinculadas a un ministerio (Sentencia C-220 de 1997). La Circular 08 del DAPRE no puede derogar la autonomía universitaria, tal como lo reconocen su Considerando 4 y su Numeral 8.",
  metricasClave: [
    { label: "Docentes Temporales y Apoyo", valor: "~34.500", detalle: "Catedráticos, ocasionales, investigadores y soporte" },
    { label: "Peso en Docencia Directa", valor: "> 65 %", detalle: "De los cursos de pregrado y posgrado en las 34 IES" },
    { label: "Universidades Estatales", valor: "34 IES", detalle: "Integradas en el Sistema Universitario Estatal (SUE)" },
    { label: "Monto Estimado Bienal", valor: "$ 1,12 Billones", detalle: "Transferencias Nación (arts. 86-87 Ley 30) y recursos propios" }
  ],
  modalidadesLey30: [
    {
      figura: "Profesores de Cátedra (Art. 73 Ley 30 de 1992)",
      regimen: "No son empleados públicos ni trabajadores oficiales. Se vinculan por contrato de prestación de servicios docentes según el número de horas semanales dictadas por semestre académico (Sentencia C-006 de 1996).",
      riesgoCircular: "Si se confunde el contrato docente de cátedra del artículo 73 de la Ley 30 con una OPS administrativa de la Ley 80 y se le aplica el tope del 25 %, se paralizaría más de la mitad de las asignaturas universitarias del país."
    },
    {
      figura: "Profesores Ocasionales (Art. 74 Ley 30 de 1992)",
      regimen: "Dedicación de tiempo completo o medio tiempo por períodos inferiores a un año, vinculados mediante resolución administrativa (no contrato Ley 80), con derecho a prestaciones sociales proporcionales.",
      riesgoCircular: "Sostienen la docencia e investigación en sedes regionales y programas nuevos donde los techos presupuestales históricos impiden ampliar la planta de carrera docente."
    },
    {
      figura: "Contratistas de Investigación, Extensión y Apoyo (Regalías / MinCiencias)",
      regimen: "Profesionales, laboratoristas y jóvenes investigadores vinculados a proyectos de ciencia, tecnología, innovación y consultoría universitaria con financiación externa o específica.",
      riesgoCircular: "Cuentan con protección expresa por tratarse de proyectos con financiación o destinación específica (Causal 5 de la Circular 08) y recursos propios de extensión."
    }
  ],
  blindajeJuridicoCircular08: {
    causalPrincipal: "Artículo 69 CP (Autonomía Universitaria), Considerando 4 y Numeral 8 de la Circular 08",
    argumentacion: "La Corte Constitucional (Sentencia C-220 de 1997) determinó que las universidades estatales no forman parte de la administración central ni descentralizada dependiente del Presidente de la República. La propia Circular 08 ordena en su Considerando 4 respetar 'los regímenes especiales' y en su Numeral 8 advierte que 'no sustituye las competencias constitucionales y legales'. Por tanto, corresponde a cada Consejo Superior Universitario —y no al DAPRE— regular su política de austeridad sin sacrificar la docencia ni la acreditación de alta calidad.",
    requisitosExpediente: [
      "Acuerdo o directriz propia del Consejo Superior Universitario en ejercicio de la autonomía administrativa y financiera (art. 69 CP).",
      "Distinción jurídica expresa entre contratos de hora cátedra (art. 73 Ley 30/92) y contratos administrativos de apoyo a la gestión.",
      "Protección de proyectos financiados con el Sistema General de Regalías (SGR), MinCiencias y estampillas universitarias."
    ]
  }
};

export const MATRIZ_COMPARATIVA_EDUCACION = [
  {
    criterio: "Naturaleza Jurídica y Ubicación en el Estado",
    sena: "Establecimiento público de la Rama Ejecutiva Nacional, adscrito al Ministerio del Trabajo (Ley 119 de 1994).",
    universidades: "Entes universitarios autónomos de rango constitucional (Art. 69 CP y Ley 30 de 1992), fuera de la Rama Ejecutiva."
  },
  {
    criterio: "Fuerza Vinculante de la Circular 08 del DAPRE",
    sena: "Aplicación directa obligatoria como entidad adscrita; requiere sustentar excepciones ante el Ministerio del Trabajo y el DAPRE.",
    universidades: "No aplica por vía de subordinación jerárquica presidencial; rige la cláusula de respeto a regímenes especiales (Considerando 4 y Numeral 8)."
  },
  {
    criterio: "Figura Principal de Vinculación Temporal",
    sena: "Contrato de prestación de servicios de instructor (Art. 32 Ley 80 de 1993) seleccionado por Banco de Instructores APE.",
    universidades: "Contrato especial de hora cátedra (Art. 73 Ley 30/92), resolución de docente ocasional (Art. 74) y OPS en extensión/investigación."
  },
  {
    criterio: "Fuente Principal de Financiación",
    sena: "Aportes parafiscales del 2 % de la nómina empresarial (Ley 21 de 1982) y Fondo de la Industria de la Construcción (FIC).",
    universidades: "Transferencias de la Nación (Arts. 86 y 87 Ley 30/92), estampillas procultura/prouniversidad, regalías y recursos propios."
  },
  {
    criterio: "Mecanismo Jurídico de Salvaguarda Misional",
    sena: "Invocación escrita del Numeral 5: Servicio Esencial de Educación Técnica y Destinación Específica Parafiscal.",
    universidades: "Autonomía Universitaria (Art. 69 CP, Sentencia C-220/97), régimen docente especial Ley 30 y destinación específica en investigación."
  }
];
