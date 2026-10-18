import React from 'react';
import { 
  Users, 
  UserX, 
  Flame, 
  Home, 
  HelpCircle, 
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

export default function SocialImpact() {
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

        {/* Cifra destacada */}
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
            <span className="text-xs text-emerald-700 block font-semibold">Masa Salarial Involucrada</span>
            <span className="text-2xl font-black text-emerald-800 block mt-1">$ 22,34 Billones</span>
            <span className="text-xs text-emerald-700">Monto total de gasto anual en OPS registrado en el Estado</span>
          </div>
        </div>
      </section>

      {/* 4 Dimensiones Críticas de Impacto Social */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Dimensión 1: El contratista como eslabón desprotegido */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-200">
              <UserX className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                1. El Contratista: El Eslabón Más Vulnerable
              </h3>
              <span className="text-xs text-slate-500">Inestabilidad laboral y choque en ingresos</span>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed pt-2">
            A diferencia de los funcionarios de planta, las personas vinculadas por prestación de servicios no perciben cesantías, primas de servicios, vacaciones ni subsidios. Pagan de su propio bolsillo la seguridad social (salud 12,5%, pensión 16% y ARL) sobre el 40% del IBC, sumado a la retención en la fuente e ICA.
          </p>
          <div className="p-3 rounded-lg bg-rose-50/60 text-xs text-rose-900 border border-rose-200/60 leading-relaxed">
            <strong>Impacto directo:</strong> La no renovación a partir de 2027 arroja al desempleo o a la informalidad a miles de profesionales calificados (abogados, contadores, psicólogos, ingenieros) con créditos educativos del Icetex y cargas familiares.
          </div>
        </div>

        {/* Dimensión 2: El Síndrome de la Planta Quemada */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                2. El Síndrome de «Planta Quemada»
              </h3>
              <span className="text-xs text-slate-500">Sobrecarga laboral extrema sobre la carrera administrativa</span>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed pt-2">
            La Circular exige en su numeral 6 una «redistribución de cargas y movilidad interna». Sin embargo, en decenas de entidades la planta permanente es diminuta frente a las responsabilidades misionales.
          </p>
          <div className="p-3 rounded-lg bg-amber-50/60 text-xs text-amber-900 border border-amber-200/60 leading-relaxed">
            <strong>Efecto dominó:</strong> Los empleados de planta deberán absorber el trabajo de tres o cuatro contratistas suprimidos, detonando estrés laboral, incapacidades médicas y parálisis en la gestión de expedientes y derechos de petición.
          </div>
        </div>

        {/* Dimensión 3: Impacto en las Familias y Economía Local */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-200">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                3. Choque en Hogares y Consumo Regional
              </h3>
              <span className="text-xs text-slate-500">Efecto multiplicador contractivo</span>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed pt-2">
            En ciudades intermedias y municipios apartados, el Estado es el mayor empleador formal de mano de obra calificada. Una contracción de $16 billones en honorarios deprime el comercio local, el arrendamiento de vivienda y la capacidad de pago de los hogares.
          </p>
          <div className="p-3 rounded-lg bg-indigo-50/60 text-xs text-indigo-900 border border-indigo-200/60 leading-relaxed">
            <strong>Impacto territorial:</strong> Los departamentos de la periferia (Chocó, Guajira, Caquetá, Cauca), donde casi no existe industria privada, sufrirán un impacto desproporcionado en sus economías locales.
          </div>
        </div>

        {/* Dimensión 4: El Ciudadano Usuario de Servicios Públicos */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                4. La Experiencia del Ciudadano de a Pie
              </h3>
              <span className="text-xs text-slate-500">Demoras en trámites, citas y educación</span>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed pt-2">
            El usuario final del Estado sentirá el recorte en filas más largas, tiempos de espera dilatados para registros de medicamentos en el INVIMA, menor número de cursos técnicos en el SENA y retrasos en la atención psicosocial del ICBF.
          </p>
          <div className="p-3 rounded-lg bg-emerald-50/60 text-xs text-emerald-950 border border-emerald-200/60 leading-relaxed">
            <strong>Deterioro de la percepción:</strong> La austeridad mal ejecutada puede traducirse en una percepción ciudadana de ineficacia y abandono institucional por parte del Estado.
          </div>
        </div>
      </section>

      {/* Síntesis del Gran Dilema */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800">
        <div className="flex items-start gap-4">
          <HelpCircle className="w-8 h-8 text-amber-400 shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-white">
              El Dilema Estructural: ¿Austeridad o Desmantelamiento sin Formalización?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
              Durante décadas, sucesivos gobiernos recurrieron al abuso de la prestación de servicios para esquivar la rigidez de las plantas de personal. La Corte Constitucional en sentencias como la <strong>SU-049 de 2017</strong> ordenó al Estado formalizar estas relaciones y crear plantas temporales. 
              La Circular 08 de 2026 impone una drástica reducción del 75 %, pero sin proveer los recursos ni la estructura para que los trabajadores misionales sean incorporados a plantas formales. El riesgo real es que el ajuste fiscal se haga a costa de la desprotección del trabajador y la degradación del servicio público.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
