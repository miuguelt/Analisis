/**
 * Datos estructurados sobre objetivos, balance de aspectos positivos vs. riesgos críticos
 * y todas las perspectivas institucionales, sociales y jurídicas sobre la Circular Externa No. 08 de 2026.
 */

export const OBJETIVOS_HORIZONTE = [
  {
    fase: "Corto Plazo (Octubre – Diciembre 2026)",
    titulo: "Auditoría de Línea Base y Contención Previa",
    descripcion: "Consolidar de forma documentada y verificable el universo y valor de los contratos OPS de las vigencias 2025 y 2026 (eliminando duplicidades), inventariar las vacantes de Libre Nombramiento y Remoción (LNR) y frenar contrataciones inerciales de cierre de año."
  },
  {
    fase: "Mediano Plazo (Desde el 1.° de Enero de 2027)",
    titulo: "Aplicación del Tope del 25 % en OPS y 60 % en LNR",
    descripcion: "Ejecutar el Plan Anual de Adquisiciones 2027 bajo el techo máximo del 25 % en prestación de servicios y del 60 % en provisión de cargos LNR, habilitando únicamente excepciones justificadas por escrito con reporte trimestral al DAPRE."
  },
  {
    fase: "Largo Plazo (Transformación Estructural del Estado)",
    titulo: "Saneamiento Fiscal, Digitalización y Fin de Nóminas Paralelas",
    descripcion: "Sustituir el gasto recurrente en apoyos manuales por interoperabilidad tecnológica, automatización de procesos y redistribución funcional en la carrera administrativa, liberando hasta $ 16,75 billones para inversión o reducción del déficit."
  }
];

export const ASPECTOS_POSITIVOS = [
  {
    titulo: "1. Freno frontal al clientelismo y a las «nóminas paralelas»",
    detalle: "Durante décadas, la contratación por prestación de servicios se desfiguró como mecanismo de cuotas políticas en años preelectorales y electorales. Imponer un techo del 25 % y congelar el 40 % de cargos de libre nombramiento corta de raíz la expansión burocrática superflua."
  },
  {
    titulo: "2. Fin de la inercia presupuestal (Numeral 3)",
    detalle: "Erradica la costumbre administrativa de gastar el presupuesto asignado o llenar vacantes automáticamente por el solo hecho de contar con apropiación presupuestal, exigiendo acreditar necesidad funcional real y ausencia de duplicidad."
  },
  {
    titulo: "3. Aceleración de la transformación digital e interoperabilidad (Numeral 6)",
    detalle: "Obliga a las entidades perezosas tecnológicamente a implementar ventanillas digitales, automatización de trámites, cruces de bases de datos e interoperabilidad antes de pedir un solo contratista adicional para tareas operativas."
  },
  {
    titulo: "4. Rescate del espíritu excepcional de la Ley 80 de 1993",
    detalle: "El artículo 32 numeral 3 de la Ley 80 concibió las OPS únicamente para labores especializadas o transitorias que la planta no pudiera realizar. La Circular alinea la práctica administrativa con la prohibición constitucional de usar OPS para funciones permanentes (Sentencia C-614 de 2009)."
  },
  {
    titulo: "5. Alivio fiscal estructural y cumplimiento de la Regla Fiscal",
    detalle: "Ante un gasto nacional y territorial que alcanzó $ 22,34 billones en 501.423 contratos, la racionalización del gasto de funcionamiento protege la calificación crediticia del país y libera caja para inversión social e infraestructura."
  },
  {
    titulo: "6. Trazabilidad y rendición de cuentas trimestral (Numeral 7)",
    detalle: "Exige una metodología de cálculo documentada y verificable, impidiendo que las entidades inflen artificialmente la base 2025-2026 o escondan contrataciones sin control sectorial."
  }
];

export const RIESGOS_CRITICOS = [
  {
    titulo: "1. Parálisis operativa en servicios esenciales sin planta de relevo",
    detalle: "El Estado colombiano padece un rezago histórico en sus plantas de carrera. Recortar el 75 % de contratistas de tajo sin haber creado antes cargos de planta amenaza con frenar cursos del SENA, defensorías del ICBF y registros sanitarios del INVIMA."
  },
  {
    titulo: "2. El síndrome de «planta quemada» y colapso en atención al ciudadano",
    detalle: "Pretender que la planta actual absorba por 'redistribución de cargas' el trabajo de más de 376.000 contratistas desvinculados generará sobrecarga laboral extrema, enfermedades ocupacionales e incumplimiento de términos en derechos de petición y tutelas."
  },
  {
    titulo: "3. Avalancha de demandas judiciales por «contrato realidad»",
    detalle: "Miles de contratistas que llevan 5, 10 o 15 años cumpliendo horario y órdenes subordinadas, al no ser renovados en enero de 2027, acudirán a la jurisdicción contencioso-administrativa invocando la Sentencia SU-049 de 2017, generando un pasivo contingente multimillonario."
  },
  {
    titulo: "4. Riesgo de tercerización encubierta y más costosa",
    detalle: "Para cumplir en el papel el tope del 25 % en OPS con personas naturales, algunas entidades podrían trasladar esas contrataciones a firmas consultoras, empresas temporales o convenios interadministrativos, pagando comisiones de intermediación e IVA."
  },
  {
    titulo: "5. Fuga de talento especializado (TIC, salud, ingeniería y ciencias)",
    detalle: "Las escalas salariales de la planta pública suelen ser rígidas e inferiores al mercado en áreas como ciberseguridad, arquitectura de software o medicina especializada. El recorte de OPS puede dejar al Estado sin capacidad técnica crítica."
  },
  {
    titulo: "6. Choque recesivo en economías regionales y desprotección familiar",
    detalle: "Los contratistas no cuentan con seguro de desempleo ni cesantías acumuladas. La supresión abrupta de cientos de miles de vínculos en enero de 2027 golpeará el consumo de hogares y el comercio en capitales departamentales altamente dependientes del empleo público."
  }
];

export const PERSPECTIVAS_ACTORES = [
  {
    id: "gobierno-hacienda",
    actor: "1. Perspectiva del Gobierno Nacional y Hacienda Pública",
    subtitulo: "Presidencia de la República (DAPRE) y Ministerio de Hacienda",
    color: "emerald",
    posturaCentral: "La austeridad no es opcional: el Estado debe detener el crecimiento desbordado de la nómina paralela, eliminar duplicidades entre vigencias y demostrar que puede operar con eficiencia, tecnología y disciplina fiscal.",
    prioridad: "Sostenibilidad macroeconómica, reducción del déficit de funcionamiento y control centralizado de prioridades gubernamentales."
  },
  {
    id: "contratistas-sindicatos",
    actor: "2. Perspectiva de los Contratistas OPS y Organizaciones Sindicales",
    subtitulo: "Más de 501.000 trabajadores por prestación de servicios y sindicatos (SINDESENA, centrales obreras)",
    color: "rose",
    posturaCentral: "El ajuste fiscal se descarga sobre el eslabón más débil: trabajadores sin primas, sin vacaciones y que pagan de su bolsillo el 100 % de salud, pensión y ARL sobre el 40 % del IBC. Exigen que la reducción de OPS se haga mediante formalización en plantas de carrera y no mediante despidos masivos.",
    prioridad: "Estabilidad ocupacional, formalización laboral progresiva (Sentencia C-614/09) y reconocimiento del contrato realidad."
  },
  {
    id: "gerentes-publicos",
    actor: "3. Perspectiva de Directores de Entidades y Autoridades de Ordenación del Gasto",
    subtitulo: "Ministros, directores de institutos descentralizados, secretarios generales y jefes de planeación",
    color: "amber",
    posturaCentral: "Enfrentan una encrucijada jurídica: el Numeral 4 les exige recortar el 75 % de OPS, pero el Numeral 8 les recuerda que siguen siendo responsables disciplinaria y fiscalmente si se paraliza el servicio público o se incumplen fallos judiciales.",
    prioridad: "Estructurar expedientes sólidos bajo el Numeral 5 (Excepciones justificadas) para proteger la operación misional sin recibir hallazgos de auditoría."
  },
  {
    id: "sector-educativo",
    actor: "4. Perspectiva del Sector Educativo: SENA y Universidades Públicas (SUE)",
    subtitulo: "Instructores de las 33 Regionales del SENA, rectores del SUE, profesores de cátedra y ocasionales",
    color: "violet",
    posturaCentral: "La educación técnica y superior no es burocracia superflua: el 80 % de la formación del SENA y más del 65 % de la docencia universitaria pública dependen de instructores contratistas y catedráticos. Las universidades defienden además su Autonomía Constitucional (art. 69 CP).",
    prioridad: "Exclusión de la docencia e investigación del recorte lineal, respeto a la Ley 30 de 1992 y protección de recursos parafiscales del SENA."
  },
  {
    id: "cortes-control",
    actor: "5. Perspectiva de Altas Cortes y Órganos de Control",
    subtitulo: "Corte Constitucional, Consejo de Estado, Contraloría General y Procuraduría General",
    color: "indigo",
    posturaCentral: "La racionalización del gasto es constitucionalmente legítima (art. 209 CP), pero no puede vulnerar la continuidad de servicios esenciales (salud, niñez, educación) ni desconocer derechos adquiridos o el principio de primacía de la realidad sobre las formas (art. 53 CP).",
    prioridad: "Control fiscal estricto sobre la línea base 2025-2026, vigilancia de las excepciones del Numeral 5 y protección de derechos fundamentales."
  },
  {
    id: "ciudadania-gremios",
    actor: "6. Perspectiva Ciudadana, Gremios Económicos y Analistas Fiscales",
    subtitulo: "Usuarios de servicios públicos, centros de pensamiento económico y veedurías ciudadanas",
    color: "sky",
    posturaCentral: "Respaldan que los impuestos no se diluyan en burocracia clientelista, pero advierten que un recorte lineal mal diseñado, sin digitalización real previa, se traduce en filas interminables, demoras en licencias e ineficiencia estatal.",
    prioridad: "Que el ahorro fiscal sea real y verificable, y que se mantenga o mejore la calidad y agilidad de los servicios al ciudadano."
  }
];
