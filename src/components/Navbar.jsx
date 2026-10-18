import React from 'react';
import { 
  FileText, 
  Calculator, 
  Building2, 
  Users, 
  Scale, 
  BookOpen 
} from 'lucide-react';

export const TABS = [
  { id: 'norma', label: 'Anatomía de la Norma', icon: FileText },
  { id: 'simulador', label: 'Simulador 25 % y Ahorro', icon: Calculator },
  { id: 'sectores', label: 'Impacto en Instituciones', icon: Building2 },
  { id: 'social', label: 'Impacto Social y Laboral', icon: Users },
  { id: 'perspectivas', label: 'Debate: Luces y Sombras', icon: Scale },
  { id: 'juridico', label: 'Marco Jurídico y Evidencia', icon: BookOpen },
];

export default function Navbar({ activeTab, onSelectTab }) {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-1 sm:space-x-2 overflow-x-auto py-2 no-scrollbar">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap focus:outline-none ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-700' : 'text-slate-500'}`} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
