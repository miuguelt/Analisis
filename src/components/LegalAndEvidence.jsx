import React from 'react';
import { 
  BookOpen, 
  FileText, 
  ExternalLink, 
  Scale, 
  Building, 
  CheckCircle2, 
  AlertCircle 
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
              Documento Oficial Analizado (Local)
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-mono">
              CIRCULAR INTERNA No. 08 DE 2026.pdf
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Expedida formalmente como <strong>Circular Externa No. 08</strong> del 15 de octubre de 2026 por el Director del DAPRE. Consta de 4 folios suscritos por la Dirección y Subdirección General.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
              <ExternalLink className="w-4 h-4 text-emerald-600" />
              Noticia de Prensa Confirmada
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-semibold">
              Red+ Noticias (15 de octubre de 2026)
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Confirma la notificación oficial a todos los ministerios y departamentos administrativos del recorte al 25% y la cifra oficial de 501.423 contratos reportados por la Contraloría General.
            </p>
          </div>
        </div>
      </section>

      {/* Bloque Jurisprudencial Clave */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Scale className="w-5 h-5 text-emerald-600" />
          La Jurisprudencia Constitucional sobre el «Contrato Realidad»
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
              Unificación sobre la relación laboral oculta en el Estado
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              La Sala Plena estableció que cuando una persona vinculada por prestación de servicios cumple un horario, recibe órdenes directas y ejerce funciones permanentes de la entidad, opera el principio constitucional de <strong>primacía de la realidad sobre las formas</strong> (art. 53 CP). El Estado tiene la obligación de responder por prestaciones sociales y formalizar las plantas.
            </p>
            <div className="text-[11px] text-emerald-900 bg-emerald-50 p-2.5 rounded-lg border border-emerald-100">
              <strong>Tensión con la Circular:</strong> Reducir el 75 % sin formalización puede detonar miles de demandas laborales por contrato realidad contra la Nación.
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
              Prohibición de desnaturalización de plantas de personal
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Declaró inexequible el uso indiscriminado de contratos de prestación de servicios para cubrir funciones misionales permanentes. Reiteró que el ingreso al servicio público debe ser por concurso de méritos (art. 125 CP) y que las entidades no pueden crear «plantas paralelas».
            </p>
            <div className="text-[11px] text-indigo-900 bg-indigo-50 p-2.5 rounded-lg border border-indigo-100">
              <strong>Coincidencia con la Circular:</strong> El objetivo de austeridad del Gobierno se apoya en esta doctrina para suprimir las nóminas paralelas espurias.
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
              <strong className="text-slate-900">Constitución Política de Colombia (Artículos 53, 125 y 209):</strong>
              <p className="text-slate-600 mt-0.5 leading-relaxed">
                Establecen la carrera administrativa por mérito, los principios de austeridad y celeridad de la función pública, y la protección especial a los derechos de los trabajadores.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900">Estatuto General de Contratación Pública (Ley 80 de 1993, Art. 32):</strong>
              <p className="text-slate-600 mt-0.5 leading-relaxed">
                Define taxativamente que los contratos de prestación de servicios solo se celebran con personas naturales para desarrollar actividades relacionadas con la administración cuando no puedan realizarse con personal de planta o requieran conocimientos especializados.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900">Decreto 2647 de 2022 y Decreto 618 de 2026:</strong>
              <p className="text-slate-600 mt-0.5 leading-relaxed">
                Facultan al DAPRE para coordinar prioridades gubernamentales y establecen la obligación de planes internos de austeridad del gasto con seguimiento semestral y trimestral.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900">Autonomía Universitaria y Régimen Especial (Constitución Art. 69 y Ley 30 de 1992):</strong>
              <p className="text-slate-600 mt-0.5 leading-relaxed">
                Las universidades públicas cuentan con personería jurídica, autonomía académica y administrativa para definir sus plantas docentes. La propia Circular 08 reconoce en sus considerandos que se aplica <em>«respetando los regímenes especiales y las competencias de cada autoridad»</em>, reservando a los Consejos Superiores la fijación de políticas sobre profesores de cátedra y proyectos de investigación.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
