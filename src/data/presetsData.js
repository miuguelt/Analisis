export const PRESETS_ENTIDADES = [
  {
    id: "contraloria-nacional",
    nombre: "Consolidado Nacional (Cifras Contraloría 2026)",
    tipo: "Nivel Nacional Consolidado",
    contratosBienio: 501423,
    presupuestoBienio: 22340000000000, // 22,34 billones COP
    fuente: "Informe Oficial de Contraloría General de la República (Enero 2026)",
    descripcion: "Universo total de contratos de prestación de servicios registrados en entidades del orden nacional y territorial en Colombia.",
    contextoRiesgo: "Un recorte al 25% a nivel nacional afectaría a más de 376.000 contratistas y liberaría hasta $16,7 billones, pero crearía un choque operativo sin precedentes en la administración pública."
  },
  {
    id: "sena",
    nombre: "Servicio Nacional de Aprendizaje (SENA)",
    tipo: "Entidad de Formación y Empleo",
    contratosBienio: 32000,
    presupuestoBienio: 880000000000, // 880 mil millones COP
    fuente: "Reportes SIA Observa y ejecución presupuestal institucional",
    descripcion: "Cuerpo de instructores de formación técnica, tecnólogos, coordinadores de talleres y tutores virtuales en las 33 regionales.",
    contextoRiesgo: "El 80% de las horas cátedra se imparten mediante contratos de servicios. Sin excepciones, millones de cupos técnicos quedarían vacantes."
  },
  {
    id: "universidades-publicas",
    nombre: "Universidades Públicas (Sistema Universitario Estatal - SUE)",
    tipo: "Educación Superior y Autonomía Universitaria",
    contratosBienio: 34500,
    presupuestoBienio: 1120000000000, // 1,12 billones COP
    fuente: "Consolidado SUE, Ministerio de Educación y Ley 30 de 1992",
    descripcion: "Docentes de cátedra, profesores ocasionales, jóvenes investigadores y apoyos de laboratorio en las 34 universidades públicas del país.",
    contextoRiesgo: "Más del 65 % de los cursos universitarios dependen de docentes no pertenecientes a la planta de carrera. Además, la autonomía universitaria (art. 69 CP) genera un debate sobre el alcance de las directrices del DAPRE."
  },
  {
    id: "icbf",
    nombre: "Instituto Colombiano de Bienestar Familiar (ICBF)",
    tipo: "Protección Social y Familia",
    contratosBienio: 24500,
    presupuestoBienio: 640000000000, // 640 mil millones COP
    fuente: "Boletín de gestión del talento humano ICBF",
    descripcion: "Equipos psicosociales (psicólogos, pedagogos y trabajadores sociales) en defensorías de familia y centros zonales.",
    contextoRiesgo: "Atención directa a niños en condición de vulnerabilidad y seguimiento a casos de restablecimiento de derechos."
  },
  {
    id: "invima",
    nombre: "Instituto Nacional de Vigilancia de Medicamentos (INVIMA)",
    tipo: "Vigilancia Sanitaria y Salud Pública",
    contratosBienio: 3800,
    presupuestoBienio: 98000000000, // 98 mil millones COP
    fuente: "Plan Estratégico Institucional y requerimientos del MinSalud",
    descripcion: "Evaluadores de expedientes farmacológicos, técnicos de inspección en puertos y analistas de registros sanitarios.",
    contextoRiesgo: "El retraso en autorizaciones sanitarias podría impactar el abastecimiento de medicamentos críticos en Colombia."
  },
  {
    id: "ministerio-tipo",
    nombre: "Ministerio Promedio del Nivel Central",
    tipo: "Gobierno Central",
    contratosBienio: 1250,
    presupuestoBienio: 42000000000, // 42 mil millones COP
    fuente: "Línea base representativa según Circular 08 DAPRE",
    descripcion: "Estructura central con dependencias de contratación, planeación, oficinas jurídicas, sistemas y atención al ciudadano.",
    contextoRiesgo: "Reducción a 312 contratistas obliga a trasladar cargas administrativas a los funcionarios de carrera y directivos de planta."
  }
];
