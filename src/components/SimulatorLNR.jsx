import React from 'react';
import { Briefcase } from 'lucide-react';
import { formatearNumero } from '../utils/calculations';

export default function SimulatorLNR({
  cargosLNR,
  excluidosLNR,
  resultadosLNR,
  onChangeCargosLNR,
  onChangeExcluidosLNR
}) {
  return (
    <section className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Briefcase className="w-5 h-5 text-indigo-600" />
        <h3 className="text-base font-bold text-slate-900">
          Numeral 2: Meta de Ocupación del 60 % en Libre Nombramiento y Remoción (LNR)
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
        <div>
          <label htmlFor="input-lnr-total" className="block text-xs font-semibold text-slate-700 mb-1">
            Cargos Totales LNR en Planta:
          </label>
          <input
            id="input-lnr-total"
            type="number"
            min="0"
            value={cargosLNR}
            onChange={(e) => onChangeCargosLNR(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="input-lnr-excluidos" className="block text-xs font-semibold text-slate-700 mb-1">
            Directivos Excluidos (Ministro/Viceministro):
          </label>
          <input
            id="input-lnr-excluidos"
            type="number"
            min="0"
            value={excluidosLNR}
            onChange={(e) => onChangeExcluidosLNR(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-xs">
          <span className="text-indigo-700 font-semibold block">Cupo Máximo Provisto (60 %)</span>
          <span className="text-xl font-black text-indigo-950">
            {formatearNumero(resultadosLNR.cupoMaximoProvisto)} cargos
          </span>
          <span className="block text-[11px] text-indigo-700">
            Sobre base de {formatearNumero(resultadosLNR.baseCalculo)} cargos ({formatearNumero(resultadosLNR.totalPermitidoEnPlanta)} total con excluidos)
          </span>
        </div>
        <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs">
          <span className="text-rose-700 font-semibold block">
            Vacantes LNR Congeladas ({resultadosLNR.porcentajeCongelado} %)
          </span>
          <span className="text-xl font-black text-rose-700">
            -{formatearNumero(resultadosLNR.cargosCongelados)} cargos
          </span>
          <span className="block text-[11px] text-rose-700">No provisión automática (Numeral 3)</span>
        </div>
      </div>
    </section>
  );
}
