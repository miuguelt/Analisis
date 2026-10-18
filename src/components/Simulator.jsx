import React, { useState, useEffect } from 'react';
import { PRESETS_ENTIDADES } from '../data/presetsData';
import {
  calcularLineaBase,
  calcularTopeLNR,
  formatearCOP,
  formatearNumero,
  evaluarNivelRiesgo
} from '../utils/calculations';
import ExceptionEvaluator from './ExceptionEvaluator';
import SimulatorKPIs from './SimulatorKPIs';
import SimulatorLNR from './SimulatorLNR';
import SimulatorChart from './SimulatorChart';
import { Calculator, AlertOctagon, Sparkles, Info, SlidersHorizontal } from 'lucide-react';

export default function Simulator({
  initialPresetId = 'contraloria-nacional',
  savedState,
  onSyncSimulation
}) {
  const initialPreset = PRESETS_ENTIDADES.find(p => p.id === initialPresetId) || PRESETS_ENTIDADES[0];

  const [selectedPresetId, setSelectedPresetId] = useState(
    savedState ? savedState.presetId : initialPreset.id
  );
  const [contratos, setContratos] = useState(
    savedState ? savedState.contratosBase : initialPreset.contratosBienio
  );
  const [presupuesto, setPresupuesto] = useState(
    savedState ? savedState.presupuestoBase : initialPreset.presupuestoBienio
  );
  const [cargosLNR, setCargosLNR] = useState(
    savedState ? savedState.lnrCargosTotales : initialPreset.cargosLNR
  );
  const [excluidosLNR, setExcluidosLNR] = useState(
    savedState ? savedState.lnrCargosExcluidos : initialPreset.cargosExcluidosLNR
  );
  const [tope, setTope] = useState(savedState ? savedState.topeReglamentario : 25);
  const [excepcion, setExcepcion] = useState(savedState ? savedState.porcentajeExcepcion : 10);
  const [mostrarEvaluador, setMostrarEvaluador] = useState(false);

  const activePreset = PRESETS_ENTIDADES.find(p => p.id === selectedPresetId);

  const handleSelectPreset = (e) => {
    const id = e.target.value;
    setSelectedPresetId(id);
    const found = PRESETS_ENTIDADES.find(p => p.id === id);
    if (found) {
      setContratos(found.contratosBienio);
      setPresupuesto(found.presupuestoBienio);
      setCargosLNR(found.cargosLNR);
      setExcluidosLNR(found.cargosExcluidosLNR);
    }
  };

  const handleNumericChange = (rawValue, setter) => {
    setSelectedPresetId('custom');
    if (rawValue === '') {
      setter('');
      return;
    }
    setter(Math.max(0, Number(rawValue)));
  };

  const resultados = calcularLineaBase(contratos, presupuesto, tope, excepcion);
  const resultadosLNR = calcularTopeLNR(cargosLNR, excluidosLNR, 60);
  const dependenciaActiva = activePreset ? activePreset.dependenciaNivel : 'Crítica';
  const evaluacionRiesgo = evaluarNivelRiesgo(resultados.porcentajeReduccionEfectiva, dependenciaActiva);

  useEffect(() => {
    if (onSyncSimulation) {
      onSyncSimulation({
        ...resultados,
        presetId: selectedPresetId,
        entidadNombre: activePreset ? activePreset.nombre : 'Escenario Personalizado',
        lnrCargosTotales: resultadosLNR.cargosTotales,
        lnrCargosExcluidos: resultadosLNR.cargosExcluidos,
        lnrCupo: resultadosLNR.cupoMaximoProvisto,
        lnrCongelados: resultadosLNR.cargosCongelados
      });
    }
  }, [contratos, presupuesto, tope, excepcion, cargosLNR, excluidosLNR, selectedPresetId]);

  return (
    <div className="space-y-8 max-w-7xl mx-auto py-6">
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              Motor de Simulación Cuantitativa
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-2 flex items-center gap-2">
              <Calculator className="w-6 h-6 text-emerald-600" />
              Simulador de Línea Base y Reducción del 25 %
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Modela el impacto financiero en contratos OPS (Numeral 4) y en empleos de Libre Nombramiento y Remoción al 60 % (Numeral 2).
            </p>
          </div>

          <div className="w-full md:w-80">
            <label htmlFor="select-preset-entidad" className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Cargar Preset de Entidad Real:
            </label>
            <select
              id="select-preset-entidad"
              value={selectedPresetId}
              onChange={handleSelectPreset}
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {PRESETS_ENTIDADES.map((p) => (
                <option key={p.id} value={p.id}>{p.nombre}</option>
              ))}
              <option value="custom">-- Ingreso Manual Personalizado --</option>
            </select>
          </div>
        </div>

        {activePreset ? (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-emerald-600" />
                {activePreset.nombre} — <span className="text-emerald-700">{activePreset.tipo}</span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium">Fuente: {activePreset.fuente}</span>
            </div>
            <p className="text-slate-600 leading-relaxed">{activePreset.descripcion}</p>
            <p className="text-amber-900 bg-amber-50/80 p-2.5 rounded-lg border border-amber-200/70 leading-relaxed">
              <strong>Diagnóstico de impacto:</strong> {activePreset.contextoRiesgo}
            </p>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80 flex items-center gap-2.5 text-xs text-emerald-950">
            <SlidersHorizontal className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>
              <strong>Escenario Personalizado Activo:</strong> Cifras ajustadas manualmente para simulación libre de línea base 2025-2026 y planta LNR.
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <label htmlFor="input-ops-contratos" className="block text-xs font-semibold text-slate-700 mb-1">Contratos Línea Base (2025-2026):</label>
            <input id="input-ops-contratos" type="number" min="0" value={contratos} onChange={(e) => handleNumericChange(e.target.value, setContratos)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <span className="text-[11px] text-slate-500 mt-1 block">{formatearNumero(contratos)} contratos bienales</span>
          </div>

          <div>
            <label htmlFor="input-ops-presupuesto" className="block text-xs font-semibold text-slate-700 mb-1">Presupuesto Línea Base (COP):</label>
            <input id="input-ops-presupuesto" type="number" min="0" step="1000000" value={presupuesto} onChange={(e) => handleNumericChange(e.target.value, setPresupuesto)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <span className="text-[11px] text-emerald-700 font-medium mt-1 block">{formatearCOP(presupuesto)}</span>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="slider-tope" className="text-xs font-semibold text-slate-700">Tope Reglamentario:</label>
              <span className="text-xs font-bold text-emerald-700">{tope} %</span>
            </div>
            <input id="slider-tope" type="range" min="10" max="50" step="5" value={tope} onChange={(e) => setTope(Number(e.target.value))} className="w-full accent-emerald-600 cursor-pointer" />
            <span className="text-[11px] text-slate-500 mt-1 block">Tope canónico Circular: 25 %</span>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="slider-excepcion" className="text-xs font-semibold text-slate-700">Excepciones Justificadas:</label>
              <span className="text-xs font-bold text-amber-700">+{excepcion} %</span>
            </div>
            <input id="slider-excepcion" type="range" min="0" max="50" step="5" value={excepcion} onChange={(e) => setExcepcion(Number(e.target.value))} className="w-full accent-amber-600 cursor-pointer" />
            <span className="text-[11px] text-slate-500 mt-1 block">Causales Numeral 5 (Servicios vitales)</span>
          </div>
        </div>
      </section>

      <SimulatorKPIs resultados={resultados} excepcion={excepcion} />

      <SimulatorLNR
        cargosLNR={cargosLNR}
        excluidosLNR={excluidosLNR}
        resultadosLNR={resultadosLNR}
        onChangeCargosLNR={(val) => handleNumericChange(val, setCargosLNR)}
        onChangeExcluidosLNR={(val) => handleNumericChange(val, setExcluidosLNR)}
      />

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <SimulatorChart resultados={resultados} tope={tope} excepcion={excepcion} />
        </div>

        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <AlertOctagon className="w-5 h-5 text-rose-600" />
              <h3 className="text-base font-bold text-slate-900">Termómetro de Riesgo</h3>
            </div>
            <div className={`p-4 rounded-xl border text-center ${evaluacionRiesgo.badgeClass}`}>
              <span className="text-xs uppercase tracking-wider font-bold block">Nivel de Riesgo Operativo</span>
              <span className="text-2xl font-black block my-1">{evaluacionRiesgo.nivel}</span>
              <p className="text-xs leading-relaxed font-medium">{evaluacionRiesgo.mensaje}</p>
            </div>
          </div>

          <button
            onClick={() => setMostrarEvaluador(!mostrarEvaluador)}
            className="w-full mt-4 py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all border border-slate-300"
          >
            {mostrarEvaluador ? 'Ocultar Asistente de Excepciones' : 'Abrir Asistente de Excepciones'}
          </button>
        </div>
      </section>

      {mostrarEvaluador && (
        <section className="transition-all">
          <ExceptionEvaluator />
        </section>
      )}
    </div>
  );
}
