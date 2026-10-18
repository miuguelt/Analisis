import React, { useState } from 'react';
import { SECTORS_DATA } from '../data/sectorsData';
import { 
  Building2, 
  GraduationCap, 
  HeartHandshake, 
  Activity, 
  ShieldCheck, 
  Truck, 
  Trees, 
  Cpu, 
  AlertTriangle,
  FileText,
  Workflow
} from 'lucide-react';

const ICONS_MAP = {
  GraduationCap,
  HeartHandshake,
  Activity,
  ShieldCheck,
  Truck,
  Trees,
  Cpu,
};

export default function SectorAnalysis() {
  const [filterRiesgo, setFilterRiesgo] = useState('Todos');

  const filtered = SECTORS_DATA.filter((s) => {
    if (filterRiesgo === 'Todos') return true;
    return s.nivelRiesgo === filterRiesgo;
  });

  return (
    <div className="space-y-8 max-w-7xl mx-auto py-6">
      {/* Encabezado del Módulo */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              Diagnóstico Institucional
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-2 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-emerald-600" />
              ¿Cómo se implementa la norma en cada institución del Estado?
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Evaluación de vulnerabilidad misional, perfiles de contratistas en riesgo y alternativas de excepción en las entidades públicas colombianas.
            </p>
          </div>

          {/* Filtros de Riesgo */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">Filtrar:</span>
            {['Todos', 'Crítico', 'Alto', 'Medio'].map((r) => (
              <button
                key={r}
                onClick={() => setFilterRiesgo(r)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  filterRiesgo === r
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Cita institucional */}
        <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
          <strong>Mandato de la Circular (Numeral 6):</strong> Antes de tramitar cualquier contratación o excepción, las entidades están conminadas por ley a <em>«evaluar redistribución de cargas, movilidad interna, uso de capacidades existentes, simplificación de procesos, interoperabilidad y automatización»</em>.
        </div>
      </section>

      {/* Grid de Sectores Institucionales */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((sector) => {
          const IconComponent = ICONS_MAP[sector.icono] || Building2;
          const isCritico = sector.nivelRiesgo === 'Crítico';

          return (
            <div
              key={sector.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Encabezado de la Tarjeta */}
                <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {sector.nombre}
                      </h3>
                      <span className="text-xs text-slate-500">
                        Dependencia: <strong>{sector.dependenciaOps}</strong>
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase shrink-0 ${
                      isCritico
                        ? 'bg-rose-100 text-rose-800 border border-rose-200'
                        : sector.nivelRiesgo === 'Alto'
                        ? 'bg-amber-100 text-amber-800 border border-amber-200'
                        : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                    }`}
                  >
                    Riesgo {sector.nivelRiesgo}
                  </span>
                </div>

                {/* Perfiles Afectados */}
                <div className="mt-4 text-xs text-slate-700">
                  <strong className="text-slate-900 block mb-1">Perfiles profesionales en riesgo:</strong>
                  <p className="text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    {sector.perfilAfectado}
                  </p>
                </div>

                {/* Diagnóstico y Desafío */}
                <div className="mt-4 space-y-2 text-xs">
                  <div>
                    <strong className="text-slate-900">Diagnóstico de terreno:</strong>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">
                      {sector.diagnosticoSectorial}
                    </p>
                  </div>
                  <div>
                    <strong className="text-rose-900">Cuello de botella principal:</strong>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">
                      {sector.desafioPrincipal}
                    </p>
                  </div>
                </div>
              </div>

              {/* Vía de Excepción y Mitigación */}
              <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex items-start gap-2 bg-emerald-50/60 p-2.5 rounded-lg border border-emerald-100">
                  <FileText className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-950">Vía de Excepción Aplicable:</strong>
                    <p className="text-emerald-800 mt-0.5">{sector.viaDeExcepcion}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                  <Workflow className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800">Plan de Mitigación Obligatorio:</strong>
                    <p className="text-slate-600 mt-0.5">{sector.medidasMitigacion}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
