import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App, { construirSimDataDesdePreset } from '../App';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import NormaBreakdown from '../components/NormaBreakdown';
import SectorAnalysis from '../components/SectorAnalysis';
import EducationDeepDive from '../components/EducationDeepDive';
import SocialImpact from '../components/SocialImpact';
import PerspectivesDebate from '../components/PerspectivesDebate';
import LegalAndEvidence from '../components/LegalAndEvidence';

describe('Pruebas de Componentes React — Módulos Informativos y Flujo Principal', () => {
  it('renderiza App completa, preserva estado al navegar entre pestañas y sincroniza el modal de reporte', () => {
    const fallbackSim = construirSimDataDesdePreset('id-no-existente');
    expect(fallbackSim.presetId).toBe('contraloria-nacional');
    render(<App />);
    expect(screen.getByText(/Observatorio de la Circular Externa No. 08/i)).toBeInTheDocument();

    const tabs = [
      { name: /Simulador 25 % y Ahorro/i, textToCheck: /Motor de Simulación Cuantitativa/i },
      { name: /Impacto en Instituciones/i, textToCheck: /¿Cómo se implementa la norma en cada institución/i },
      { name: /Impacto Social y Laboral/i, textToCheck: /¿Qué impacto real tendrá la Circular/i },
      { name: /Debate: Luces y Sombras/i, textToCheck: /Objetivos, Luces, Sombras/i },
      { name: /Marco Jurídico y Evidencia/i, textToCheck: /Fuentes Verificadas, Jurisprudencia/i },
      { name: /Anatomía de la Norma/i, textToCheck: /Acto Administrativo Vinculante/i }
    ];

    for (const tab of tabs) {
      fireEvent.click(screen.getByText(tab.name));
      expect(screen.getAllByText(tab.textToCheck).length).toBeGreaterThanOrEqual(1);
    }

    // Simular SENA desde Impacto en Instituciones y verificar persistencia al cambiar de pestaña y volver
    fireEvent.click(screen.getByText(/Impacto en Instituciones/i));
    const btnSimularSector = screen.getAllByRole('button', { name: /Simular en Calculadora/i })[0];
    fireEvent.click(btnSimularSector);
    expect(screen.getByDisplayValue('32000')).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Anatomía de la Norma/i));
    fireEvent.click(screen.getByText(/Simulador 25 % y Ahorro/i));
    expect(screen.getByDisplayValue('32000')).toBeInTheDocument();

    // Apertura y cierre del modal de reporte sincronizado con el SENA
    fireEvent.click(screen.getByText(/Exportar Reporte/i));
    expect(screen.getByText(/Dictamen Ejecutivo: Implementación Circular Externa/i)).toBeInTheDocument();
    expect(screen.getByText(/Escenario Evaluado: Servicio Nacional de Aprendizaje \(SENA\)/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Cerrar reporte/i }));
    expect(screen.queryByText(/Dictamen Ejecutivo/i)).not.toBeInTheDocument();
  });

  it('renderiza Header y dispara el modal de reporte al hacer clic', () => {
    const handleOpen = vi.fn();
    render(<Header onOpenReport={handleOpen} />);
    expect(screen.getByText(/Observatorio de la Circular Externa No. 08/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Exportar Reporte/i));
    expect(handleOpen).toHaveBeenCalledTimes(1);
  });

  it('renderiza Navbar y permite cambiar entre pestañas activas', () => {
    const handleSelect = vi.fn();
    render(<Navbar activeTab="norma" onSelectTab={handleSelect} />);
    fireEvent.click(screen.getByText(/Simulador 25 % y Ahorro/i));
    expect(handleSelect).toHaveBeenCalledWith('simulador');
  });

  it('renderiza NormaBreakdown con los 9 numerales, firmantes y texto literal del PDF', () => {
    render(<NormaBreakdown />);
    expect(screen.getByText(/Acto Administrativo Vinculante/i)).toBeInTheDocument();
    expect(screen.getByText(/Carlos Andrés Ríos Puerta/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/1. Objeto Central/i));
    expect(screen.getAllByText(/Reducción y racionalización del gasto de funcionamiento/i).length).toBeGreaterThanOrEqual(1);

    fireEvent.click(screen.getByText(/8. Competencias y Responsabilidad/i));
    expect(screen.getAllByText(/Intangibilidad de las competencias legales/i).length).toBeGreaterThanOrEqual(1);

    fireEvent.click(screen.getByText(/9. Vigencia y Efectos/i));
    expect(screen.getAllByText(/Transición inmediata y aplicación desde el 1.° de enero de 2027/i).length).toBeGreaterThanOrEqual(1);
  });

  it('renderiza EducationDeepDive y alterna entre SENA, Universidades Públicas y Matriz Comparativa', () => {
    const handleSimulate = vi.fn();
    render(<EducationDeepDive onSimulatePreset={handleSimulate} />);
    expect(screen.getByText(/Foco Especial: SENA y Universidades Públicas/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Simular Caso SENA/i }));
    expect(handleSimulate).toHaveBeenCalledWith('sena');

    fireEvent.click(screen.getByRole('button', { name: /Universidades Públicas \(SUE\)/i }));
    expect(screen.getByText(/34 Instituciones de Educación Superior, Ley 30 de 1992/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Simular Caso Universidades/i }));
    expect(handleSimulate).toHaveBeenCalledWith('universidades-publicas');

    fireEvent.click(screen.getByRole('button', { name: /Paralelo Constitucional y Operativo/i }));
    expect(screen.getByText(/Fuerza Vinculante de la Circular 08 del DAPRE/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Caso SENA \(33 Regionales\)/i }));
    expect(screen.getAllByText(/Banco de Instructores/i).length).toBeGreaterThanOrEqual(1);
  });

  it('renderiza SectorAnalysis, filtra por niveles de riesgo y ejecuta callback de simulación por sector', () => {
    const handleSimulate = vi.fn();
    render(<SectorAnalysis onSimulatePreset={handleSimulate} />);
    expect(screen.getByText(/¿Cómo se implementa la norma en cada institución del Estado\?/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Crítico' }));
    expect(screen.getByText(/Servicio Nacional de Aprendizaje \(SENA\) — Formación Técnica/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Alto' }));
    expect(screen.getByText(/Salud y Vigilancia Sanitaria/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Medio' }));
    expect(screen.getByText(/Tecnología, Hacienda y Nivel Central/i)).toBeInTheDocument();
    expect(screen.getByText(/Infraestructura y Transporte/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Todos' }));
    const btnsSimular = screen.getAllByRole('button', { name: /Simular en Calculadora/i });
    fireEvent.click(btnsSimular[4]);
    expect(handleSimulate).toHaveBeenCalledWith('unp-seguridad');
  });

  it('renderiza SocialImpact y permite interactuar con la calculadora salarial de contratista', () => {
    render(<SocialImpact />);
    expect(screen.getByText(/El Contratista: El Eslabón Más Vulnerable/i)).toBeInTheDocument();
    expect(screen.getByText(/501.423/i)).toBeInTheDocument();
    const sliderHonorarios = screen.getByRole('slider');
    fireEvent.change(sliderHonorarios, { target: { value: '6000000' } });
    expect(screen.getByText(/\$ 2.400.000/i)).toBeInTheDocument();
  });

  it('renderiza PerspectivesDebate con horizonte de objetivos, balance de 6 puntos y 6 perspectivas', () => {
    render(<PerspectivesDebate />);
    expect(screen.getByText(/¿Qué hay de bueno en la norma\?/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Las 6 Perspectivas/i }));
    expect(screen.getByText(/4. Perspectiva del Sector Educativo: SENA y Universidades Públicas/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Luces vs. Sombras/i }));
    expect(screen.getByText(/¿Qué hay de bueno en la norma\?/i)).toBeInTheDocument();
  });

  it('renderiza LegalAndEvidence con soporte de jurisprudencia y verificación de fuentes', () => {
    render(<LegalAndEvidence />);
    expect(screen.getByText(/Sentencia SU-049 de 2017/i)).toBeInTheDocument();
    expect(screen.getByText(/Sentencia C-220 de 1997/i)).toBeInTheDocument();
    expect(screen.getByText(/CIRCULAR INTERNA No. 08 DE 2026.pdf/i)).toBeInTheDocument();
    expect(screen.getByText(/Sebastián David García Castro/i)).toBeInTheDocument();
  });
});
