import React, { useState } from 'react';
import { verificarCausalExcepcion } from '../utils/calculations';
import { ShieldCheck, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export const CAUSALES_EXCEPCION = [
  { id: 'servicios_esenciales', label: 'Servicios esenciales (Salud, Educación, Protección vital)' },
  { id: 'obligaciones_legales_judiciales', label: 'Obligaciones legales o fallos judiciales (Tutelas, sentencias)' },
  { id: 'seguridad_proteccion', label: 'Seguridad y protección de personas en riesgo comprobado' },
  { id: 'atencion_emergencias', label: 'Atención de emergencias y desastres de orden público o natural' },
  { id: 'proyectos_destinacion_especifica', label: 'Proyectos con financiación o destinación específica (Créditos/Regalías)' },
  { id: 'compromisos_internacionales', label: 'Compromisos internacionales o situaciones objetivamente indispensables' },
];

export default function ExceptionEvaluator() {
  const [causal, setCausal] = useState('servicios_esenciales');
  const [docEscrito, setDocEscrito] = useState(true);
  const [costoDuracion, setCostoDuracion] = useState(true);
  const [imposibilidadPlanta, setImposibilidadPlanta] = useState(true);

  const dictamen = verificarCausalExcepcion({
    causalSeleccionada: causal,
    tieneDocumentoEscrito: docEscrito,
    especificaCostoYDuracion: costoDuracion,
    demuestraImposibilidadPlanta: imposibilidadPlanta,
  });

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5">
      <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
        <ShieldCheck className="w-5 h-5 text-emerald-600" />
        <h3 className="text-base font-bold text-slate-900">
          Asistente de Validación de Excepciones (Numeral 5)
        </h3>
      </div>

      <p className="text-xs text-slate-600 leading-relaxed">
        Comprueba si la necesidad de contratación de tu entidad califica dentro de las causales taxativas para superar temporalmente el tope del 25 %.
      </p>

      {/* Selector de Causal */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
          Causal justificada invocada:
        </label>
        <select
          value={causal}
          onChange={(e) => setCausal(e.target.value)}
          className="w-full text-xs sm:text-sm rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          {CAUSALES_EXCEPCION.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      {/* Checklist de requisitos formales */}
      <div className="space-y-2 pt-2">
        <span className="block text-xs font-semibold text-slate-700">
          Requisitos formales obligatorios por escrito:
        </span>

        <label className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer">
          <input
            type="checkbox"
            checked={docEscrito}
            onChange={(e) => setDocEscrito(e.target.checked)}
            className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4"
          />
          Consta en documento escrito motivado y suscrito por la autoridad nominadora u ordenadora de la entidad.
        </label>

        <label className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer">
          <input
            type="checkbox"
            checked={costoDuracion}
            onChange={(e) => setCostoDuracion(e.target.checked)}
            className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4"
          />
          Identifica expresamente el costo total presupuestado y la duración temporal precisa.
        </label>

        <label className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer">
          <input
            type="checkbox"
            checked={imposibilidadPlanta}
            onChange={(e) => setImposibilidadPlanta(e.target.checked)}
            className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4"
          />
          Acredita formalmente la imposibilidad de atender la labor con el personal de planta.
        </label>
      </div>

      {/* Resultado del Dictamen */}
      <div className={`p-4 rounded-xl border ${dictamen.esViable ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950' : 'bg-amber-50/70 border-amber-300 text-amber-950'}`}>
        <div className="flex items-center gap-2 mb-1">
          {dictamen.esViable ? (
            <CheckCircle className="w-5 h-5 text-emerald-600" />
          ) : (
            <AlertTriangle className="w-5 h-5 text-amber-600" />
          )}
          <span className="text-sm font-bold">
            {dictamen.esViable ? 'Excepción Formalmente Viable' : 'Excepción Incompleta / No Justificada'}
          </span>
        </div>
        <p className="text-xs mt-1 leading-relaxed">
          {dictamen.esViable
            ? 'Cumple con los 4 postulados del Numeral 5 de la Circular 08. Debe integrarse al reporte trimestral sectorial para el DAPRE.'
            : 'Faltan requisitos esenciales de validez jurídica. Si se suscribe el contrato sin ellos, generará hallazgos en la auditoría del DAPRE y control fiscal de la Contraloría.'}
        </p>
        {!dictamen.esViable && dictamen.faltantes.length > 0 && (
          <ul className="mt-2 space-y-1 text-xs text-amber-900 font-medium">
            {dictamen.faltantes.map((f, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
