import React from 'react';
import { formatearCOP, formatearNumero } from '../utils/calculations';

export default function SimulatorChart({ resultados, tope, excepcion }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
      <h3 className="text-base font-bold text-slate-900">
        Comparativa de Distribución de Contratos y Recursos
      </h3>

      <div className="space-y-4 pt-2">
        <div>
          <div className="flex justify-between text-xs text-slate-600 mb-1">
            <span className="font-semibold">Línea Base 2025-2026 (100 %)</span>
            <span>{formatearNumero(resultados.contratosBase)} contratistas ({formatearCOP(resultados.presupuestoBase)})</span>
          </div>
          <div className="w-full bg-slate-100 h-6 rounded-full overflow-hidden">
            <div className="bg-slate-700 h-full w-full rounded-full transition-all duration-500"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs text-slate-600 mb-1">
            <span className="font-semibold text-emerald-700">Cupo Ordinario (25 %)</span>
            <span>{formatearNumero(resultados.cupoContratos)} contratistas ({formatearCOP(resultados.cupoPresupuesto)})</span>
          </div>
          <div className="w-full bg-slate-100 h-6 rounded-full overflow-hidden">
            <div style={{ width: `${tope}%` }} className="bg-emerald-600 h-full rounded-full transition-all duration-500"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs text-slate-600 mb-1">
            <span className="font-semibold text-amber-700">Cupo con Excepciones Justificadas ({tope + excepcion} %)</span>
            <span>{formatearNumero(resultados.contratosEfectivos)} contratistas ({formatearCOP(resultados.presupuestoEfectivo)})</span>
          </div>
          <div className="w-full bg-slate-100 h-6 rounded-full overflow-hidden flex">
            <div style={{ width: `${tope}%` }} className="bg-emerald-600 h-full"></div>
            <div style={{ width: `${excepcion}%` }} className="bg-amber-500 h-full"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs text-slate-600 mb-1">
            <span className="font-semibold text-rose-700">Gasto Suprimido / Ahorro Neto ({100 - (tope + excepcion)} %)</span>
            <span>{formatearCOP(resultados.ahorroNeto)}</span>
          </div>
          <div className="w-full bg-slate-100 h-6 rounded-full overflow-hidden">
            <div style={{ width: `${Math.max(0, 100 - (tope + excepcion))}%` }} className="bg-rose-500 h-full rounded-full transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
