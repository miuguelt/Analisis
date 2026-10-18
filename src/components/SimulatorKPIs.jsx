import React from 'react';
import { Users, TrendingDown, Sliders, DollarSign } from 'lucide-react';
import { formatearCOP, formatearNumero } from '../utils/calculations';

export default function SimulatorKPIs({ resultados, excepcion }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between text-slate-500 text-xs mb-2">
          <span>Cupo Máximo (25 %)</span>
          <Users className="w-4 h-4 text-emerald-600" />
        </div>
        <div className="text-2xl font-black text-slate-900">
          {formatearNumero(resultados.cupoContratos)}
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Presupuesto: {formatearCOP(resultados.cupoPresupuesto)}
        </p>
      </div>

      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between text-slate-500 text-xs mb-2">
          <span>Recorte Proyectado (75 %)</span>
          <TrendingDown className="w-4 h-4 text-rose-600" />
        </div>
        <div className="text-2xl font-black text-rose-600">
          -{formatearNumero(resultados.recorteContratos)}
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Contratistas que no serían renovados
        </p>
      </div>

      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between text-slate-500 text-xs mb-2">
          <span>Con Excepciones (+{excepcion}%)</span>
          <Sliders className="w-4 h-4 text-amber-600" />
        </div>
        <div className="text-2xl font-black text-slate-900">
          {formatearNumero(resultados.contratosEfectivos)}
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Reducción neta: <strong>{resultados.porcentajeReduccionEfectiva} %</strong>
        </p>
      </div>

      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between text-slate-500 text-xs mb-2">
          <span>Ahorro Fiscal Neto</span>
          <DollarSign className="w-4 h-4 text-emerald-600" />
        </div>
        <div className="text-2xl font-black text-emerald-700">
          {formatearCOP(resultados.ahorroNeto)}
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Liberación de gasto recurrente
        </p>
      </div>
    </section>
  );
}
