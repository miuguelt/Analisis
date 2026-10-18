import React, { useState } from 'react';
import {
  OBJETIVOS_HORIZONTE,
  ASPECTOS_POSITIVOS,
  RIESGOS_CRITICOS,
  PERSPECTIVAS_ACTORES
} from '../data/perspectivesData';
import { 
  Scale, 
  ThumbsUp, 
  AlertTriangle, 
  Target, 
  Users
} from 'lucide-react';

export default function PerspectivesDebate() {
  const [activeView, setActiveView] = useState('balance');

  return (
    <div className="space-y-8 max-w-7xl mx-auto py-6">
      {/* Encabezado y Objetivo Político-Fiscal */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              Evaluación Crítica Plural
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-2 flex items-center gap-2">
              <Scale className="w-6 h-6 text-emerald-600" />
              Objetivos, Luces, Sombras y Perspectivas del Debate
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              ¿Cuál es el objetivo de la norma y qué espera lograr? ¿Qué aspectos positivos plantea y cuáles son todas las perspectivas institucionales y sociales?
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveView('balance')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeView === 'balance'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Luces vs. Sombras (6 vs. 6)
            </button>
            <button
              onClick={() => setActiveView('perspectivas')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeView === 'perspectivas'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Las 6 Perspectivas
            </button>
          </div>
        </div>

        {/* El Objetivo Central de la Norma y Horizonte de Resultados */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-4">
          <div className="flex items-start gap-3">
            <Target className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                ¿Cuál es el objetivo de la norma y qué espera lograr el Gobierno?
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                La Circular Externa No. 08 de 2026 busca <strong>quebrar la inercia expansiva del gasto público de funcionamiento</strong>, desmontar el uso de contratos de prestación de servicios como nóminas paralelas permanentes (que alcanzaron 501.423 contratos y $ 22,34 billones) y obligar a las entidades del Estado a operar mediante eficiencia, automatización e interoperabilidad.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {OBJETIVOS_HORIZONTE.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200/80 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                  {item.fase}
                </span>
                <strong className="text-xs font-bold text-slate-900 block">
                  {item.titulo}
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vista 1: Balance de 6 Aspectos Positivos vs. 6 Riesgos Críticos */}
      {activeView === 'balance' && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-emerald-200/80 shadow-sm space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-emerald-100 text-emerald-800">
              <ThumbsUp className="w-5 h-5" />
              <h3 className="text-base font-bold">
                ¿Qué hay de bueno en la norma? (6 Aciertos y Virtudes)
              </h3>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              {ASPECTOS_POSITIVOS.map((pos, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100">
                  <strong className="text-emerald-950 block mb-1">
                    {pos.titulo}
                  </strong>
                  <p className="text-slate-600 leading-relaxed">
                    {pos.detalle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-rose-200/80 shadow-sm space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-rose-100 text-rose-800">
              <AlertTriangle className="w-5 h-5" />
              <h3 className="text-base font-bold">
                ¿Cuáles son los riesgos críticos? (6 Sombras y Costos)
              </h3>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              {RIESGOS_CRITICOS.map((riesgo, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-rose-50/50 border border-rose-100">
                  <strong className="text-rose-950 block mb-1">
                    {riesgo.titulo}
                  </strong>
                  <p className="text-slate-600 leading-relaxed">
                    {riesgo.detalle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Vista 2: Las 6 Perspectivas de Actores Clave */}
      {activeView === 'perspectivas' && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PERSPECTIVAS_ACTORES.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Users className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{item.actor}</span>
                </div>
                <span className="text-[11px] font-semibold text-slate-500 block">
                  {item.subtitulo}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  «{item.posturaCentral}»
                </p>
              </div>
              <div className="text-[11px] bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-slate-700">
                <strong>Prioridad institucional y jurídica:</strong> {item.prioridad}
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

