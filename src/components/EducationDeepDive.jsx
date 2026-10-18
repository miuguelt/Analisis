import React, { useState } from 'react';
import {
  SENA_DEEP_DIVE,
  UNIVERSIDADES_DEEP_DIVE,
  MATRIZ_COMPARATIVA_EDUCACION
} from '../data/educationDeepDiveData';
import {
  GraduationCap,
  School,
  Scale,
  CheckCircle2,
  Calculator,
  ShieldCheck
} from 'lucide-react';

export default function EducationDeepDive({ onSimulatePreset }) {
  const [activeTab, setActiveTab] = useState('sena');

  return (
    <section className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-200 shadow-sm space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
            Foco Especial: SENA y Universidades Públicas
          </span>
          <h3 className="text-xl font-bold text-slate-900 mt-2 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-emerald-600" />
            Análisis Profundo: Educación Técnica (SENA) y Educación Superior (SUE)
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            ¿Por qué el SENA y las 34 Universidades Públicas son los casos más sensibles frente al tope del 25 % y qué regímenes jurídicos los protegen?
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('sena')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'sena' ? 'bg-amber-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            Caso SENA (33 Regionales)
          </button>
          <button
            onClick={() => setActiveTab('universidades')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'universidades' ? 'bg-violet-700 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <School className="w-4 h-4" />
            Universidades Públicas (SUE)
          </button>
          <button
            onClick={() => setActiveTab('comparativa')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'comparativa' ? 'bg-slate-900 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Scale className="w-4 h-4" />
            Paralelo Constitucional y Operativo
          </button>
        </div>
      </div>

      {activeTab === 'sena' && (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-amber-50/60 p-4 rounded-xl border border-amber-200/80">
            <div>
              <h4 className="text-base font-bold text-slate-900">{SENA_DEEP_DIVE.titulo}</h4>
              <p className="text-xs font-semibold text-amber-800">{SENA_DEEP_DIVE.subtitulo}</p>
              <p className="text-xs text-slate-600 mt-1">{SENA_DEEP_DIVE.naturalezaJuridica}</p>
            </div>
            <button
              onClick={() => onSimulatePreset && onSimulatePreset('sena')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-500 text-white shrink-0 transition-all"
            >
              <Calculator className="w-4 h-4" />
              Simular Caso SENA
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {SENA_DEEP_DIVE.metricasClave.map((m, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[11px] text-slate-500 block">{m.label}</span>
                <span className="text-xl font-black text-slate-900 block my-0.5">{m.valor}</span>
                <span className="text-[11px] text-slate-600">{m.detalle}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SENA_DEEP_DIVE.radiografiaOperativa.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5">
                <strong className="text-xs font-bold text-slate-900 block">{item.area}</strong>
                <p className="text-xs text-slate-600 leading-relaxed">{item.impacto}</p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-3">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Ruta de Salvaguarda Jurídica: {SENA_DEEP_DIVE.blindajeJuridicoCircular08.causalPrincipal}
            </div>
            <p className="text-xs text-emerald-950 leading-relaxed">{SENA_DEEP_DIVE.blindajeJuridicoCircular08.argumentacion}</p>
            <ul className="space-y-1.5 text-xs text-emerald-900">
              {SENA_DEEP_DIVE.blindajeJuridicoCircular08.requisitosExpediente.map((req, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'universidades' && (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-violet-50/60 p-4 rounded-xl border border-violet-200/80">
            <div>
              <h4 className="text-base font-bold text-slate-900">{UNIVERSIDADES_DEEP_DIVE.titulo}</h4>
              <p className="text-xs font-semibold text-violet-800">{UNIVERSIDADES_DEEP_DIVE.subtitulo}</p>
              <p className="text-xs text-slate-600 mt-1">{UNIVERSIDADES_DEEP_DIVE.alcanceCircular}</p>
            </div>
            <button
              onClick={() => onSimulatePreset && onSimulatePreset('universidades-publicas')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-violet-700 hover:bg-violet-600 text-white shrink-0 transition-all"
            >
              <Calculator className="w-4 h-4" />
              Simular Caso Universidades
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {UNIVERSIDADES_DEEP_DIVE.metricasClave.map((m, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[11px] text-slate-500 block">{m.label}</span>
                <span className="text-xl font-black text-slate-900 block my-0.5">{m.valor}</span>
                <span className="text-[11px] text-slate-600">{m.detalle}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {UNIVERSIDADES_DEEP_DIVE.modalidadesLey30.map((mod, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                <strong className="text-xs font-bold text-violet-900 block">{mod.figura}</strong>
                <p className="text-xs text-slate-600 leading-relaxed">{mod.regimen}</p>
                <div className="p-2.5 rounded-lg bg-rose-50/60 border border-rose-100 text-[11px] text-rose-900">
                  <strong>Impacto potencial:</strong> {mod.riesgoCircular}
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-indigo-50/70 border border-indigo-200 space-y-3">
            <div className="flex items-center gap-2 text-indigo-950 font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-indigo-600" />
              Blindaje Constitucional: {UNIVERSIDADES_DEEP_DIVE.blindajeJuridicoCircular08.causalPrincipal}
            </div>
            <p className="text-xs text-indigo-950 leading-relaxed">{UNIVERSIDADES_DEEP_DIVE.blindajeJuridicoCircular08.argumentacion}</p>
            <ul className="space-y-1.5 text-xs text-indigo-900">
              {UNIVERSIDADES_DEEP_DIVE.blindajeJuridicoCircular08.requisitosExpediente.map((req, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'comparativa' && (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="p-3.5 rounded-tl-xl font-bold w-1/4">Dimensión de Análisis</th>
                <th className="p-3.5 font-bold w-[37.5%] text-amber-300">SENA (Formación Profesional)</th>
                <th className="p-3.5 rounded-tr-xl font-bold w-[37.5%] text-violet-300">Universidades Públicas (SUE)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 border border-slate-200">
              {MATRIZ_COMPARATIVA_EDUCACION.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900 bg-slate-50/60">{row.criterio}</td>
                  <td className="p-3.5 text-slate-700 leading-relaxed">{row.sena}</td>
                  <td className="p-3.5 text-slate-700 leading-relaxed">{row.universidades}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
