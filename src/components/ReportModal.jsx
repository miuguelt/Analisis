import React from 'react';
import { X, Printer, Landmark, FileText, CheckCircle2, Briefcase } from 'lucide-react';
import { formatearCOP, formatearNumero } from '../utils/calculations';

export default function ReportModal({ isOpen, onClose, simData }) {
  if (!isOpen) return null;

  const data = simData || {
    entidadNombre: "Consolidado Nacional (Cifras Contraloría 2026)",
    contratosBase: 501423,
    presupuestoBase: 22340000000000,
    cupoContratos: 125356,
    recorteContratos: 376067,
    recorteContratosEfectivo: 376067,
    contratosEfectivos: 125356,
    cupoPresupuesto: 5585000000000,
    presupuestoEfectivo: 5585000000000,
    ahorroNeto: 16755000000000,
    topeReglamentario: 25,
    porcentajeExcepcion: 0,
    porcentajeReduccionEfectiva: 75.0,
    lnrCupo: 10380,
    lnrCongelados: 6920
  };

  const cupoEfectivoContratos = data.contratosEfectivos ?? data.cupoContratos;
  const cupoEfectivoPresupuesto = data.presupuestoEfectivo ?? data.cupoPresupuesto;
  const recorteEfectivo = data.recorteContratosEfectivo ?? data.recorteContratos;
  const excepcionAplicada = data.porcentajeExcepcion ?? 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 print-modal-wrapper">
      <div className="bg-white rounded-2xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 max-h-[90vh] overflow-y-auto print-modal-content">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 no-print">
          <div className="flex items-center gap-2 text-emerald-800">
            <Landmark className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Informe Ejecutivo de Impacto y Cumplimiento
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-all"
            >
              <Printer className="w-3.5 h-3.5" /> Imprimir / Guardar PDF
            </button>
            <button
              onClick={onClose}
              aria-label="Cerrar reporte"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="space-y-6 text-slate-800">
          <div className="text-center pb-4 border-b border-slate-100">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Dictamen Ejecutivo: Implementación Circular Externa No. 08 de 2026
            </h2>
            <p className="text-xs font-bold text-emerald-700 mt-1">
              Escenario Evaluado: {data.entidadNombre}
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              Departamento Administrativo de la Presidencia de la República (DAPRE) — Efectos obligatorios desde el 1.° de enero de 2027
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] text-slate-500 block uppercase">Línea Base 2025-2026</span>
              <span className="text-lg font-bold text-slate-900 block mt-0.5">
                {formatearNumero(data.contratosBase)}
              </span>
              <span className="text-[10px] text-slate-500">{formatearCOP(data.presupuestoBase)}</span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
              <span className="text-[10px] text-emerald-700 block uppercase font-bold">
                Cupo Autorizado ({data.topeReglamentario} % {excepcionAplicada > 0 ? `+ ${excepcionAplicada} % exc.` : ''})
              </span>
              <span className="text-lg font-bold text-emerald-900 block mt-0.5">
                {formatearNumero(cupoEfectivoContratos)}
              </span>
              <span className="text-[10px] text-emerald-700">{formatearCOP(cupoEfectivoPresupuesto)}</span>
            </div>

            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200">
              <span className="text-[10px] text-rose-700 block uppercase font-bold">
                Recorte Proyectado ({data.porcentajeReduccionEfectiva} %)
              </span>
              <span className="text-lg font-bold text-rose-700 block mt-0.5">
                -{formatearNumero(recorteEfectivo)}
              </span>
              <span className="text-[10px] text-rose-700">Contratistas no renovados</span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
              <span className="text-[10px] text-emerald-700 block uppercase font-bold">Ahorro Fiscal Estimado</span>
              <span className="text-lg font-bold text-emerald-900 block mt-0.5">
                {formatearCOP(data.ahorroNeto)}
              </span>
              <span className="text-[10px] text-emerald-700">Gasto recurrente liberado</span>
            </div>
          </div>

          {data.lnrCupo !== undefined && (
            <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-200 flex flex-wrap items-center justify-between gap-2 text-xs text-indigo-950">
              <span className="font-bold flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-indigo-600" />
                Meta Numeral 2 — Planta de Libre Nombramiento y Remoción (Tope 60 %):
              </span>
              <span>
                Cupo máximo provisto: <strong>{formatearNumero(data.lnrCupo)} cargos</strong> | Vacantes congeladas (40 %): <strong>-{formatearNumero(data.lnrCongelados)} cargos</strong>
              </span>
            </div>
          )}

          <div className="space-y-3 text-xs leading-relaxed">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-emerald-600" />
              Recomendaciones Estratégicas para Autoridades y Gestores del Gasto
            </h4>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Consolidar la Línea Base:</strong> Auditar de inmediato el bienio 2025 y 2026 sin duplicidades ni vicios de cálculo para fijar el techo infranqueable del 25 %.
                </span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Formalizar Expedientes de Excepción:</strong> Aplicar estrictamente el numeral 5 únicamente a servicios de salud, emergencias, educación o fallos judiciales, sustentando por escrito la incapacidad de la planta.
                </span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Plan de Mitigación Tecnológica:</strong> Invertir prioritariamente en automatización de trámites y ventanillas electrónicas para evitar el colapso por falta de personal asistencial.
                </span>
              </p>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 text-center pt-4 border-t border-slate-100">
            Documento emitido para fines analíticos conforme a la Circular Externa 08 de 2026 del DAPRE y jurisprudencia de la Corte Constitucional colombiana.
          </div>
        </div>
      </div>
    </div>
  );
}
