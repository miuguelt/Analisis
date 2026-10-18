import React from 'react';
import { 
  BookOpen, 
  FileText, 
  ExternalLink, 
  Scale, 
  Building, 
  CheckCircle2
} from 'lucide-react';

export default function LegalAndEvidence() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto py-6">
      {/* Encabezado */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              Rigor Documental y Jurídico
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-2 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-emerald-600" />
              Fuentes Verificadas, Jurisprudencia y Soporte Normativo
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Cotejo documental de la Circular 08 de 2026 frente al ordenamiento constitucional, datos oficiales de la Contraloría y pronunciamientos de las altas cortes.
            </p>
          </div>
        </div>

        {/* Cotejo de Fuentes Físicas y Digitales */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
              <FileText className="w-4 h-4 text-emerald-600" />
              Documento Oficial Analizado (Repositorio Local)
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-mono font-bold">
              CIRCULAR INTERNA No. 08 DE 2026.pdf
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Expedida formalmente como <strong>Circular Externa No. 08</strong> del 15 de octubre de 2026 (4 folios, 9 numerales). Suscrita por <strong>Carlos Andrés Ríos Puerta</strong> (Director del DAPRE), proyectada/revisada por <strong>Mateo Duque Giraldo</strong> y aprobada por <strong>Rosalín Orozco Becerra</strong> (Subdirectora General).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center justify-between gap-2 text-slate-900 font-bold text-xs">
              <span className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-emerald-600" />
                Noticia de Prensa Verificada
              </span>
              <a
                href="https://redmas.com.co/economia/gobierno-de-la-espriella-hace-oficial-el-recorte-para-los-colombianos-con-contrato-de-prestacion-de-servicios-notifica-cambio-20261015-0043.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 underline hover:text-emerald-900"
              >
                Abrir enlace original
              </a>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-semibold">
              Red+ Noticias — Por Sebastián David García Castro (15 de octubre de 2026)
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Documenta la notificación oficial a ministerios y departamentos administrativos del tope del 25 % desde el 1.° de enero de 2027, expone el ejemplo práctico (100 contratistas y $ 1.000 millones reducidos a 25 contratos y $ 250 millones) y cita el censo de la Contraloría General (501.423 contratos por $ 22,34 billones a enero de 2026).
            </p>
          </div>
        </div>
      </section>

      {/* Bloque Jurisprudencial Clave */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Scale className="w-5 h-5 text-emerald-600" />
          Jurisprudencia Constitucional sobre «Contrato Realidad», SENA y Universidades Públicas
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded">
                Sentencia SU-049 de 2017
              </span>
              <span className="text-xs text-slate-500">Corte Constitucional</span>
            </div>
            <h4 className="text-sm font-bold text-slate-900">
              Primacía de la realidad sobre las formas y estabilidad ocupacional
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cuando un contratista de prestación de servicios cumple horario, recibe órdenes subordinadas y desarrolla funciones permanentes de la entidad, se configura una relación laboral oculta amparada por el artículo 53 de la Constitución.
            </p>
            <div className="text-[11px] text-emerald-900 bg-emerald-50 p-2.5 rounded-lg border border-emerald-100">
              <strong>Tensión con la Circular:</strong> Desvincular al 75 % de contratistas antiguos sin formalización puede detonar miles de litigios de contrato realidad.
            </div>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-indigo-800 bg-indigo-100/70 px-2.5 py-0.5 rounded">
                Sentencia C-614 de 2009
              </span>
              <span className="text-xs text-slate-500">Corte Constitucional</span>
            </div>
            <h4 className="text-sm font-bold text-slate-900">
              Prohibición de plantas paralelas y protección de funciones misionales
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Prohibió celebrar contratos de prestación de servicios para el ejercicio de funciones de carácter permanente en la administración pública, fijando cinco criterios (funcional, igualdad, temporalidad, excepcionalidad y subordinación).
            </p>
            <div className="text-[11px] text-indigo-900 bg-indigo-50 p-2.5 rounded-lg border border-indigo-100">
              <strong>Doble lectura:</strong> Respalda eliminar nóminas paralelas clientelistas, pero exige que las labores permanentes (como instructores del SENA) pasen a planta formal.
            </div>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-violet-800 bg-violet-100/70 px-2.5 py-0.5 rounded">
                Sentencia C-220 de 1997 y C-006 de 1996
              </span>
              <span className="text-xs text-slate-500">Corte Constitucional</span>
            </div>
            <h4 className="text-sm font-bold text-slate-900">
              Autonomía de las Universidades Públicas y Régimen Docente Ley 30
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              La Corte precisó que las universidades estatales son entes autónomos constitucionales (art. 69 CP) que no integran la Rama Ejecutiva ni están sujetas a tutela administrativa de los ministerios, y reguló el estatus especial de los profesores ocasionales y de hora cátedra (arts. 73 y 74 Ley 30 de 1992).
            </p>
            <div className="text-[11px] text-violet-900 bg-violet-50 p-2.5 rounded-lg border border-violet-100">
              <strong>Efecto frente a la Circular 08:</strong> Fundamenta por qué el DAPRE debe respetar la autonomía de los Consejos Superiores Universitarios (Considerando 4 y Numeral 8).
            </div>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-800 bg-amber-100/70 px-2.5 py-0.5 rounded">
                Unificación Consejo de Estado (2021)
              </span>
              <span className="text-xs text-slate-500">Sección Segunda</span>
            </div>
            <h4 className="text-sm font-bold text-slate-900">
              Solución de continuidad y límite temporal de las OPS
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Unificó las reglas sobre el término estrictamente indispensable de los contratos de prestación de servicios y el cómputo de 30 días hábiles de interrupción entre contratos sucesivos para determinar la existencia de relación laboral continuada.
            </p>
            <div className="text-[11px] text-amber-900 bg-amber-50 p-2.5 rounded-lg border border-amber-100">
              <strong>Relevancia en 2027:</strong> Guía obligatoria para las oficinas jurídicas al auditar la línea base 2025-2026 ordenada en el Numeral 4.
            </div>
          </div>
        </div>
      </section>

      {/* Matriz del Marco Normativo Aplicable */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Building className="w-5 h-5 text-emerald-600" />
          Pirámide Jerárquica del Ordenamiento Jurídico Involucrado
        </h3>

        <div className="space-y-3 text-xs">
          <div className="p-3.5 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900">Constitución Política de Colombia (Artículos 53, 54, 67, 69, 125 y 209):</strong>
              <p className="text-slate-600 mt-0.5 leading-relaxed">
                Consagran la protección al trabajo, el deber del Estado de ofrecer formación profesional y técnica (SENA), la autonomía universitaria, el mérito en la carrera administrativa y los principios de eficacia y economía de la función pública.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900">Ley 80 de 1993 (Art. 32 Num. 3), Ley 30 de 1992 y Ley 119 de 1994:</strong>
              <p className="text-slate-600 mt-0.5 leading-relaxed">
                Definen el contrato de prestación de servicios estatal, el régimen autónomo de las universidades públicas (profesores de cátedra y ocasionales) y la misión del SENA financiada con recursos parafiscales de destinación específica.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900">Ley 2155 de 2021 (Art. 19), Decreto 2647 de 2022 y Decreto 618 de 2026:</strong>
              <p className="text-slate-600 mt-0.5 leading-relaxed">
                Habilitan las facultades de coordinación del DAPRE y los planes semestrales y trimestrales de austeridad del gasto de funcionamiento en la Rama Ejecutiva.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

