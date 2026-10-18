import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import NormaBreakdown from './components/NormaBreakdown';
import Simulator from './components/Simulator';
import SectorAnalysis from './components/SectorAnalysis';
import SocialImpact from './components/SocialImpact';
import PerspectivesDebate from './components/PerspectivesDebate';
import LegalAndEvidence from './components/LegalAndEvidence';
import ReportModal from './components/ReportModal';
import { PRESETS_ENTIDADES } from './data/presetsData';
import { calcularLineaBase } from './utils/calculations';

export default function App() {
  const [activeTab, setActiveTab] = useState('norma');
  const [isReportOpen, setIsReportOpen] = useState(false);

  // Datos de simulación para el reporte ejecutivo
  const simData = calcularLineaBase(
    PRESETS_ENTIDADES[0].contratosBienio,
    PRESETS_ENTIDADES[0].presupuestoBienio,
    25,
    10
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header onOpenReport={() => setIsReportOpen(true)} />
      <Navbar activeTab={activeTab} onSelectTab={setActiveTab} />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'norma' && <NormaBreakdown />}
        {activeTab === 'simulador' && <Simulator />}
        {activeTab === 'sectores' && <SectorAnalysis />}
        {activeTab === 'social' && <SocialImpact />}
        {activeTab === 'perspectivas' && <PerspectivesDebate />}
        {activeTab === 'juridico' && <LegalAndEvidence />}
      </main>

      <footer className="bg-white border-t border-slate-200 py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-1">
          <p className="font-semibold text-slate-700">
            Observatorio Analítico sobre la Circular Externa No. 08 del 15 de octubre de 2026 — DAPRE
          </p>
          <p>
            Desarrollado bajo el estándar DevBrain v8.10 en español de Colombia (`es-CO`). Análisis verificado con base en datos de la Contraloría General de la República y jurisprudencia constitucional.
          </p>
        </div>
      </footer>

      <ReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
        simData={simData}
      />
    </div>
  );
}
