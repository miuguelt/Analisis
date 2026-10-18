import React from 'react';
import { Landmark, FileSpreadsheet, ShieldAlert, Calendar } from 'lucide-react';

export default function Header({ onOpenReport }) {
  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <Landmark className="w-3.5 h-3.5" />
                Presidencia de la República — DAPRE
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Calendar className="w-3.5 h-3.5" />
                Efectos desde: 1.° de Enero de 2027
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Observatorio de la Circular Externa No. 08 de 2026
            </h1>
            <p className="mt-1 text-sm text-slate-300 max-w-3xl">
              Análisis integral, simulador de línea base del 25 %, impacto sectorial y balance de perspectivas sobre la directriz de austeridad y reducción de contratos de prestación de servicios en el Estado colombiano.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-center">
            <button
              onClick={onOpenReport}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              title="Generar reporte ejecutivo imprimible"
            >
              <FileSpreadsheet className="w-4 h-4" />
              Exportar Reporte
            </button>
          </div>
        </div>

        {/* Barra de alerta contextual */}
        <div className="mt-5 p-3 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Meta vinculante:</strong> Cupo máximo del <strong>25 %</strong> en contratación de prestación de servicios respecto a la línea base 2025-2026 (recorte del 75 %) y <strong>60 %</strong> en cargos de libre nombramiento.
            </span>
          </div>
          <span className="hidden sm:inline-block text-slate-400">
            Fuente: Archivo oficial DAPRE & Cifras Contraloría
          </span>
        </div>
      </div>
    </header>
  );
}
