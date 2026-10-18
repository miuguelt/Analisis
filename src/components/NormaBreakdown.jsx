import React, { useState } from 'react';
import { NORMA_INFO } from '../data/normaData';
import { 
  FileCheck2, 
  AlertCircle, 
  CheckCircle2, 
  ChevronRight, 
  Scale, 
  Info,
  CalendarCheck2
} from 'lucide-react';

export default function NormaBreakdown() {
  const [selectedNumeral, setSelectedNumeral] = useState(NORMA_INFO.articulosClave[3]); // Default al numeral 4 (regla del 25%)

  return (
    <div className="space-y-8 max-w-7xl mx-auto py-6">
      {/* Tarjeta de Resumen Ejecutivo de la Norma */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              Acto Administrativo Vinculante
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-2">
              {NORMA_INFO.tituloOficial}
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Expedida por el <strong>{NORMA_INFO.organismoEmisor}</strong> el {NORMA_INFO.fechaExpedicion}.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5">
              <span className="block text-xs text-slate-500">Efectos formales</span>
              <span className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                <CalendarCheck2 className="w-4 h-4 text-emerald-600" />
                {NORMA_INFO.fechaEfectos}
              </span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5">
              <span className="block text-xs text-slate-500">Ámbito subjetivo</span>
              <span className="text-sm font-bold text-slate-800">
                Rama Ejecutiva Nacional
              </span>
            </div>
          </div>
        </div>

        {/* Fundamentos Constitucionales y Legales */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide flex items-center gap-2 mb-3">
            <Scale className="w-4 h-4 text-slate-500" />
            Fundamentos y Marco Normativo Habilitante
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {NORMA_INFO.fundamentosJuridicos.map((item, index) => (
              <div key={index} className="p-3 rounded-lg bg-slate-50/80 border border-slate-200/60 text-xs">
                <span className="font-semibold text-slate-900 block mb-1 text-emerald-800">
                  {item.articulo}
                </span>
                <span className="text-slate-600 leading-relaxed">
                  {item.descripcion}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explorador de Artículos y Lineamientos */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Lista de Numerales */}
        <div className="lg:col-span-5 space-y-2">
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-emerald-600" />
            Lineamientos Clave de la Directriz
          </h3>
          {NORMA_INFO.articulosClave.map((item, idx) => {
            const isSelected = selectedNumeral.numeral === item.numeral;
            return (
              <button
                key={idx}
                onClick={() => setSelectedNumeral(item)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                  isSelected
                    ? 'bg-emerald-50/70 border-emerald-300 shadow-sm ring-1 ring-emerald-300'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div>
                  <span className={`text-xs font-semibold block ${isSelected ? 'text-emerald-700' : 'text-slate-500'}`}>
                    {item.numeral}
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    {item.titulo}
                  </span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-emerald-700 translate-x-1' : 'text-slate-400 group-hover:translate-x-0.5'}`} />
              </button>
            );
          })}
        </div>

        {/* Panel de Detalle del Numeral Seleccionado */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm sticky top-20">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-md">
                {selectedNumeral.numeral}
              </span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Info className="w-3.5 h-3.5" /> Análisis operativo
              </span>
            </div>

            <h3 className="text-xl font-extrabold text-slate-900 mt-4">
              {selectedNumeral.titulo}
            </h3>

            <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-sm text-slate-700 leading-relaxed font-serif">
              "{selectedNumeral.contenido}"
            </div>

            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200/70">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-emerald-950">
                      Impacto Normativo Directo
                    </h4>
                    <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                      {selectedNumeral.impactoClave}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200/70">
                <div className="flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-amber-950">
                      Obligación de Cumplimiento Inmediato
                    </h4>
                    <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                      La entidad debe documentar en sus expedientes contractuales la fórmula verificable de cálculo, y preparar los reportes trimestrales que serán auditados por el DAPRE y la Contraloría General.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
