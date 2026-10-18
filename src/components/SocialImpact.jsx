import React, { useState } from 'react';
import { calcularLiquidacionContratista, formatearNumero } from '../utils/calculations';
import { 
  Users, 
  UserX, 
  Flame, 
  Home, 
  HelpCircle, 
  ShieldAlert,
  Calculator
} from 'lucide-react';

export default function SocialImpact() {
  const [honorarios, setHonorarios] = useState(4500000);
  const liquidacion = calcularLiquidacionContratista(honorarios);

  return (
    <div className="space-y-8 max-w-7xl mx-auto py-6">
      {/* Encabezado */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
              Dimensión Humana y Ciudadana
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-2 flex items-center gap-2">
              <Users className="w-6 h-6 text-rose-600" />
              ¿Qué impacto real tendrá la Circular sobre la sociedad colombiana?
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Análisis del choque socioeconómico sobre más de 500.000 trabajadores por OPS, sus familias, la planta permanente y el ciudadano usuario de servicios públicos.
            </p>
          </div>
        </div>

        {/* Cifras destacadas */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-xs text-slate-500 block">Universo Total Afectado (Contraloría)</span>
            <span className="text-2xl font-black text-slate-900 block mt-1">501.423</span>
            <span className="text-xs text-slate-600">Contratos de prestación de servicios a nivel nacional y territorial</span>
          </div>

          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200/80">
            <span className="text-xs text-rose-700 block font-semibold">Potencial Desvinculación Neta</span>
            <span className="text-2xl font-black text-rose-600 block mt-1">~376.000</span>
            <span className="text-xs text-rose-700">Contratistas no renovados bajo la estricta regla del 25 %</span>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/80">
            <span className="text-xs text-emerald-700 block font-semibold">Masa Presupuestal Involucrada</span>
            <span className="text-2xl font-black text-emerald-800 block mt-1">$ 22,34 Billones</span>
            <span className="text-xs text-emerald-700">Monto total registrado en OPS según Contraloría General</span>
          </div>
        </div>
      </section>

      {/* Calculadora Interactiva: La Realidad Salarial del Contratista OPS */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-rose-200/80 shadow-sm space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-rose-600" />
              Radiografía Financiera del Contratista OPS (Cálculo de Seguridad Social — IBC 40 %)
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Comprueba cuánto asume de su propio bolsillo un contratista en Colombia sin derecho a prima, vacaciones ni cesantías al terminar su vínculo.
            </p>
          </div>
          <div className="w-full md:w-72">
            <div className="flex justify-between text-xs font-bold text-slate-800 mb-1">
              <span>Honorarios Mensuales:</span>
              <span className="text-rose-700">$ {formatearNumero(honorarios)}</span>
            </div>
            <input
              type="range"
              min="2000000"
              max="12000000"
              step="500000"
              value={honorarios}
              onChange={(e) => setHonorarios(Number(e.target.value))}
              className="w-full accent-rose-600 cursor-pointer"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-slate-500 block">Base Cotización (40 % IBC)</span>
            <span className="text-base font-bold text-slate-900 block mt-0.5">$ {formatearNumero(liquidacion.ibc)}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-slate-500 block">Salud (12,5 % del IBC)</span>
            <span className="text-base font-bold text-rose-700 block mt-0.5">-$ {formatearNumero(liquidacion.aporteSalud)}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-slate-500 block">Pensión (16 % del IBC)</span>
            <span className="text-base font-bold text-rose-700 block mt-0.5">-$ {formatearNumero(liquidacion.aportePension)}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-slate-500 block">ARL Riesgo I (0,522 %)</span>
            <span className="text-base font-bold text-rose-700 block mt-0.5">-$ {formatearNumero(liquidacion.aporteARL)}</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
            <span className="text-emerald-800 font-semibold block">Ingreso Neto (Sin Retefuente)</span>
            <span className="text-base font-black text-emerald-900 block mt-0.5">$ {formatearNumero(liquidacion.ingresoLiquidoEstimado)}</span>
          </div>
        </div>
      </section>

      {/* 4 Dimensiones Críticas de Impacto Social */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-200">
              <UserX className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">1. El Contratista: El Eslabón Más Vulnerable</h3>
              <span className="text-xs text-slate-500">Inestabilidad laboral y meses de enero/febrero sin ingresos</span>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed pt-2">
            A diferencia de los funcionarios de planta, las personas vinculadas por prestación de servicios no perciben cesantías, primas de servicios, vacaciones ni subsidios, y asumen cerca del {liquidacion.porcentajeCargaSeguridadSocial} % de su ingreso bruto en seguridad social obligatoria.
          </p>
          <div className="p-3 rounded-lg bg-rose-50/60 text-xs text-rose-900 border border-rose-200/60 leading-relaxed">
            <strong>Impacto directo:</strong> La no renovación a partir de enero de 2027 deja sin colchón financiero ni seguro de desempleo a miles de profesionales e instructores con cargas familiares.
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">2. El Síndrome de «Planta Quemada»</h3>
              <span className="text-xs text-slate-500">Sobrecarga laboral extrema sobre la carrera administrativa</span>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed pt-2">
            La Circular exige en su numeral 6 una «redistribución de cargas y movilidad interna». Sin embargo, en decenas de entidades la planta permanente es reducida frente a las obligaciones legales.
          </p>
          <div className="p-3 rounded-lg bg-amber-50/60 text-xs text-amber-900 border border-amber-200/60 leading-relaxed">
            <strong>Efecto dominó:</strong> Los empleados de carrera deberán absorber el trabajo de tres contratistas suprimidos, detonando agotamiento laboral y represamiento de expedientes.
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-200">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">3. Choque en Hogares y Consumo Regional</h3>
              <span className="text-xs text-slate-500">Efecto multiplicador contractivo en regiones</span>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed pt-2">
            En ciudades intermedias y municipios apartados, el Estado y los centros regionales del SENA o el ICBF son el principal motor de empleo profesional. Una contracción de hasta $ 16,75 billones golpea directamente el comercio local.
          </p>
          <div className="p-3 rounded-lg bg-indigo-50/60 text-xs text-indigo-900 border border-indigo-200/60 leading-relaxed">
            <strong>Impacto territorial:</strong> Departamentos periféricos con baja densidad empresarial sufrirán una caída inmediata en la demanda interna.
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">4. La Experiencia del Ciudadano de a Pie</h3>
              <span className="text-xs text-slate-500">Demoras en trámites, citas, salud y educación</span>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed pt-2">
            El usuario final del Estado sentirá el recorte si no se formalizan a tiempo las excepciones: menos cupos en fichas técnicas del SENA, demoras en registros sanitarios del INVIMA y mayor espera en defensorías del ICBF.
          </p>
          <div className="p-3 rounded-lg bg-emerald-50/60 text-xs text-emerald-950 border border-emerald-200/60 leading-relaxed">
            <strong>Riesgo institucional:</strong> La austeridad sin modernización digital previa se traduce en barreras de acceso a los servicios públicos.
          </div>
        </div>
      </section>

      {/* Síntesis del Gran Dilema */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800">
        <div className="flex items-start gap-4">
          <HelpCircle className="w-8 h-8 text-amber-400 shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-white">
              El Dilema Estructural: ¿Austeridad Fiscal o Desmantelamiento sin Formalización?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
              La Corte Constitucional en sentencias como la <strong>C-614 de 2009</strong> y la <strong>SU-049 de 2017</strong> prohibió usar contratos de prestación de servicios para labores permanentes y ordenó formalizar plantas. La Circular 08 de 2026 recorta el 75 % de las OPS, pero sin ampliar las plantas de carrera administrativa. El desafío para 2027 será lograr que el ahorro fiscal elimine solo la burocracia clientelista sin desproteger a los trabajadores misionales ni apagar los servicios esenciales del Estado.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

