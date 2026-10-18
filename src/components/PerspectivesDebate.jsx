import React, { useState } from 'react';
import { 
  Scale, 
  ThumbsUp, 
  AlertTriangle, 
  Target, 
  Briefcase, 
  ShieldCheck, 
  Landmark,
  Layers
} from 'lucide-react';

export default function PerspectivesDebate() {
  const [activeView, setActiveView] = useState('balance');

  return (
    <div className="space-y-8 max-w-7xl mx-auto py-6">
      {/* Encabezado */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              Evaluación Crítica Plural
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-2 flex items-center gap-2">
              <Scale className="w-6 h-6 text-emerald-600" />
              Objetivos, Luces, Sombras y Perspectivas del Debate
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              ¿Qué persigue el Gobierno? ¿Qué aciertos tiene la norma? ¿Cuáles son sus riesgos latentes y cómo la perciben los distintos actores del Estado?
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveView('balance')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeView === 'balance'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Luces vs. Sombras
            </button>
            <button
              onClick={() => setActiveView('perspectivas')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeView === 'perspectivas'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Las 4 Perspectivas
            </button>
          </div>
        </div>

        {/* El Objetivo Central de la Norma */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
          <div className="flex items-start gap-3">
            <Target className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                El Objetivo Político y Fiscal de la Norma: ¿Qué espera lograr el Estado?
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                La Circular 08 tiene como propósito central <strong>frenar la inercia expansiva del gasto público de funcionamiento</strong> y revertir la proliferación descontrolada de contratos de prestación de servicios, que a comienzos de 2026 superaron las 501.000 vinculaciones y $22,34 billones. Busca obligar a los directores de entidades a planificar con base en necesidades verificables y no por inercia presupuestal, forzando la digitalización y el saneamiento de las finanzas del Estado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vista 1: Balance de Aspectos Positivos vs. Riesgos */}
      {activeView === 'balance' && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Lo Bueno / Aciertos de la Norma */}
          <div className="bg-white rounded-2xl p-6 border border-emerald-200/80 shadow-sm space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-emerald-100 text-emerald-800">
              <ThumbsUp className="w-5 h-5" />
              <h3 className="text-base font-bold">
                ¿Qué hay de bueno en la norma? (Virtudes y Aciertos)
              </h3>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                <strong className="text-emerald-950 block mb-0.5">
                  1. Freno frontal al clientelismo y nóminas paralelas:
                </strong>
                <p className="text-slate-600 leading-relaxed">
                  Históricamente, las OPS han sido usadas como fortín político y pago de favores en campañas. Limitar el cupo al 25 % y congelar el 40 % de cargos de libre nombramiento corta de raíz la creación desmedida de burocracia sin funciones claras.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                <strong className="text-emerald-950 block mb-0.5">
                  2. Impulso a la automatización y modernización:
                </strong>
                <p className="text-slate-600 leading-relaxed">
                  Al no poder contratar miles de transcriptores y apoyos manuales, las entidades se ven obligadas a implementar interoperabilidad tecnológica, trámites digitales y simplificación de procesos que debieron adoptarse hace años.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                <strong className="text-emerald-950 block mb-0.5">
                  3. Recuperación del sentido de la Ley 80 de 1993:
                </strong>
                <p className="text-slate-600 leading-relaxed">
                  El artículo 32 de la Ley 80 concibió la prestación de servicios exclusivamente para labores transitorias que no puede hacer la planta. La Circular pone fin a la desnaturalización de contratos continuos de 10 o 15 años sin derechos laborales.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                <strong className="text-emerald-950 block mb-0.5">
                  4. Alivio fiscal en momento macroeconómico exigente:
                </strong>
                <p className="text-slate-600 leading-relaxed">
                  Permite redirigir billones de pesos desde burocracia corriente hacia inversión social directa, programas de subsidios focalizados o reducción del déficit de deuda soberana.
                </p>
              </div>
            </div>
          </div>

          {/* Los Riesgos y Críticas / Sombras */}
          <div className="bg-white rounded-2xl p-6 border border-rose-200/80 shadow-sm space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-rose-100 text-rose-800">
              <AlertTriangle className="w-5 h-5" />
              <h3 className="text-base font-bold">
                ¿Cuáles son los riesgos críticos? (Sombras y Costos)
              </h3>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="p-3 rounded-xl bg-rose-50/50 border border-rose-100">
                <strong className="text-rose-950 block mb-0.5">
                  1. Riesgo inminente de parálisis en servicios clave:
                </strong>
                <p className="text-slate-600 leading-relaxed">
                  El Estado colombiano tiene plantas de personal anacrónicas y diminutas. Un recorte del 75 % sin ampliación previa de planta puede colapsar trámites en el INVIMA, cursos en el SENA y comisarías de familia del ICBF.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-rose-50/50 border border-rose-100">
                <strong className="text-rose-950 block mb-0.5">
                  2. La trampa de la tercerización sustitutiva:
                </strong>
                <p className="text-slate-600 leading-relaxed">
                  Las entidades, asfixiadas por la falta de manos para operar, pueden caer en la tentación de contratar empresas privadas de servicios temporales o convenios con organismos multilaterales (OIM, PNUD), resultando en costos de intermediación aún mayores para el erario.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-rose-50/50 border border-rose-100">
                <strong className="text-rose-950 block mb-0.5">
                  3. Fuga masiva de talento especializado:
                </strong>
                <p className="text-slate-600 leading-relaxed">
                  Ingenieros de sistemas, científicos de datos y médicos especialistas no aceptarán sueldos de carrera rígidos por debajo del mercado. Sin la flexibilidad de honorarios por OPS, el Estado perderá a sus mejores cerebros.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-rose-50/50 border border-rose-100">
                <strong className="text-rose-950 block mb-0.5">
                  4. Desprotección social sin plan de transición:
                </strong>
                <p className="text-slate-600 leading-relaxed">
                  La norma recorta de tajo el 75 % sin ofrecer un puente de formalización laboral, ferias de empleo o subsidios de desempleo para las decenas de miles de familias de contratistas que quedarán desamparadas en 2027.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Vista 2: Las 4 Perspectivas de Actores Clave */}
      {activeView === 'perspectivas' && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Landmark className="w-5 h-5 text-emerald-600" />
              Perspectiva 1: El Gobierno y la Hacienda Pública
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              <em>«La austeridad es imperativa. El Estado no puede ser una agencia de empleo clientelista financiada con deuda pública. Las entidades deben hacer más con menos, automatizar sus procesos y respetar el límite del 25 %»</em>.
            </p>
            <div className="text-[11px] bg-slate-50 p-2.5 rounded-lg border text-slate-700">
              <strong>Prioridad:</strong> Sostenibilidad macroeconómica, cumplimiento de la Regla Fiscal y control del gasto corriente.
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Briefcase className="w-5 h-5 text-rose-600" />
              Perspectiva 2: Los Contratistas de Prestación de Servicios
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              <em>«Llevamos años sosteniendo la operación del Estado sin primas, sin vacaciones y pagando nuestra propia seguridad social. Ahora, con una circular, nos reducen el 75 % sin darnos la oportunidad de ingresar a una planta formal»</em>.
            </p>
            <div className="text-[11px] bg-rose-50 p-2.5 rounded-lg border border-rose-100 text-rose-800">
              <strong>Prioridad:</strong> Derecho al trabajo digno, estabilidad laboral y aplicación de la jurisprudencia del contrato realidad.
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Layers className="w-5 h-5 text-amber-600" />
              Perspectiva 3: Los Gerentes Públicos y Directores de Entidad
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              <em>«Nos exigen cumplir las metas misionales del Plan Nacional de Desarrollo, pero nos retiran las manos operativas y técnicas para lograrlo. Tendremos que acudir a las excepciones del Numeral 5 para no incurrir en desacatos»</em>.
            </p>
            <div className="text-[11px] bg-amber-50 p-2.5 rounded-lg border border-amber-100 text-amber-800">
              <strong>Prioridad:</strong> Continuidad del servicio público, evitar demandas por parálisis y lograr autorizaciones del DAPRE.
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-indigo-600" />
              Perspectiva 4: Las Cortes y Órganos de Control
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              <em>«La austeridad no puede violar los derechos fundamentales a la salud, educación y debido proceso de los ciudadanos. La Contraloría vigilará que el recorte sea real y la Corte exigirá que no se disfracen relaciones laborales permanentes»</em>.
            </p>
            <div className="text-[11px] bg-indigo-50 p-2.5 rounded-lg border border-indigo-100 text-indigo-800">
              <strong>Prioridad:</strong> Supremacía constitucional, legalidad en el gasto público y tutela judicial efectiva.
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
