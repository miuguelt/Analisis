import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import NormaBreakdown from '../components/NormaBreakdown';
import Simulator from '../components/Simulator';
import SectorAnalysis from '../components/SectorAnalysis';
import SocialImpact from '../components/SocialImpact';
import PerspectivesDebate from '../components/PerspectivesDebate';
import LegalAndEvidence from '../components/LegalAndEvidence';
import ReportModal from '../components/ReportModal';
import ExceptionEvaluator from '../components/ExceptionEvaluator';

describe('Pruebas de Componentes React — Observatorio Circular 08 DAPRE', () => {
  it('renderiza App completa, navega entre todas las pestañas y gestiona el modal de reporte', () => {
    render(<App />);
    expect(screen.getByText(/Observatorio de la Circular Externa No. 08/i)).toBeInTheDocument();

    // Navegación por todas las pestañas
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

    // Apertura y cierre del modal de reporte
    const btnExportar = screen.getByText(/Exportar Reporte/i);
    fireEvent.click(btnExportar);
    expect(screen.getByText(/Dictamen Ejecutivo: Implementación Circular Externa/i)).toBeInTheDocument();

    const btnCerrar = screen.getByRole('button', { name: '' });
    // el botón de cerrar tiene el icono X
    const closeButtons = screen.getAllByRole('button');
    const xButton = closeButtons.find(b => b.querySelector('svg.lucide-x'));
    if (xButton) {
      fireEvent.click(xButton);
    }
  });

  it('renderiza Header y dispara el modal de reporte al hacer clic', () => {
    const handleOpen = vi.fn();
    render(<Header onOpenReport={handleOpen} />);
    
    expect(screen.getByText(/Observatorio de la Circular Externa No. 08/i)).toBeInTheDocument();
    const btn = screen.getByText(/Exportar Reporte/i);
    fireEvent.click(btn);
    expect(handleOpen).toHaveBeenCalledTimes(1);
  });

  it('renderiza Navbar y permite cambiar entre pestañas activas', () => {
    const handleSelect = vi.fn();
    render(<Navbar activeTab="norma" onSelectTab={handleSelect} />);
    
    const tabSimulador = screen.getByText(/Simulador 25 % y Ahorro/i);
    fireEvent.click(tabSimulador);
    expect(handleSelect).toHaveBeenCalledWith('simulador');
  });

  it('renderiza NormaBreakdown y permite alternar numerales', () => {
    render(<NormaBreakdown />);
    expect(screen.getByText(/Acto Administrativo Vinculante/i)).toBeInTheDocument();
    
    const numeralBtn = screen.getByText(/1. Objeto Central/i);
    fireEvent.click(numeralBtn);
    expect(screen.getAllByText(/Racionalización del gasto de funcionamiento/i).length).toBeGreaterThanOrEqual(1);
  });

  it('renderiza Simulator y prueba controles de inputs, sliders y alternador de asistente', () => {
    render(<Simulator />);
    expect(screen.getByText(/Simulador de Línea Base y Reducción del 25 %/i)).toBeInTheDocument();
    
    // Cambiar preset
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'sena' } });
    expect(screen.getByDisplayValue('32000')).toBeInTheDocument();

    // Cambiar inputs numéricos
    const inputContratos = screen.getByDisplayValue('32000');
    fireEvent.change(inputContratos, { target: { value: '40000' } });
    expect(screen.getByDisplayValue('40000')).toBeInTheDocument();

    const inputPresupuesto = screen.getByDisplayValue('880000000000');
    fireEvent.change(inputPresupuesto, { target: { value: '950000000000' } });
    expect(screen.getByDisplayValue('950000000000')).toBeInTheDocument();

    // Cambiar sliders de tope y excepción
    const sliders = screen.getAllByRole('slider');
    fireEvent.change(sliders[0], { target: { value: '30' } });
    fireEvent.change(sliders[1], { target: { value: '20' } });

    // Alternar asistente de excepciones
    const btnToggle = screen.getByRole('button', { name: /Abrir Asistente de Excepciones/i });
    fireEvent.click(btnToggle);
    expect(screen.getByText(/Ocultar Asistente de Excepciones/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Ocultar Asistente de Excepciones/i }));
  });

  it('renderiza ExceptionEvaluator y permite cambiar causales y alternar checkboxes', () => {
    render(<ExceptionEvaluator />);
    expect(screen.getByText(/Asistente de Validación de Excepciones/i)).toBeInTheDocument();
    expect(screen.getByText(/Excepción Formalmente Viable/i)).toBeInTheDocument();

    const selectCausal = screen.getByRole('combobox');
    fireEvent.change(selectCausal, { target: { value: 'seguridad_proteccion' } });

    const checkboxes = screen.getAllByRole('checkbox');
    // Desmarcar todos para probar faltantes completos
    fireEvent.click(checkboxes[0]);
    fireEvent.click(checkboxes[1]);
    fireEvent.click(checkboxes[2]);
    expect(screen.getByText(/Excepción Incompleta/i)).toBeInTheDocument();
  });

  it('renderiza SectorAnalysis y filtra por todos los niveles de riesgo', () => {
    render(<SectorAnalysis />);
    expect(screen.getByText(/¿Cómo se implementa la norma en cada institución del Estado\?/i)).toBeInTheDocument();
    
    // Probar filtros 'Crítico', 'Alto', 'Medio', 'Todos'
    fireEvent.click(screen.getByRole('button', { name: 'Crítico' }));
    expect(screen.getByText(/Servicio Nacional de Aprendizaje \(SENA\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Universidades Públicas \(Sistema Universitario Estatal/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Alto' }));
    expect(screen.getByText(/Salud y Vigilancia Sanitaria \(MinSalud \/ INVIMA \/ INS\)/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Medio' }));
    expect(screen.getByText(/Tecnología, Hacienda y Nivel Central/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Todos' }));
    expect(screen.getByText(/Infraestructura y Transporte/i)).toBeInTheDocument();
  });

  it('renderiza SocialImpact con todas las dimensiones de afectación', () => {
    render(<SocialImpact />);
    expect(screen.getByText(/El Contratista: El Eslabón Más Vulnerable/i)).toBeInTheDocument();
    expect(screen.getByText(/El Síndrome de «Planta Quemada»/i)).toBeInTheDocument();
    expect(screen.getByText(/501.423/i)).toBeInTheDocument();
  });

  it('renderiza PerspectivesDebate y permite alternar entre balance y perspectivas', () => {
    render(<PerspectivesDebate />);
    expect(screen.getByText(/¿Qué hay de bueno en la norma\?/i)).toBeInTheDocument();
    
    const btnPerspectivas = screen.getByRole('button', { name: /Las 4 Perspectivas/i });
    fireEvent.click(btnPerspectivas);
    expect(screen.getByText(/Perspectiva 1: El Gobierno y la Hacienda Pública/i)).toBeInTheDocument();

    const btnBalance = screen.getByRole('button', { name: /Luces vs. Sombras/i });
    fireEvent.click(btnBalance);
    expect(screen.getByText(/¿Qué hay de bueno en la norma\?/i)).toBeInTheDocument();
  });

  it('renderiza LegalAndEvidence con soporte de jurisprudencia', () => {
    render(<LegalAndEvidence />);
    expect(screen.getByText(/Sentencia SU-049 de 2017/i)).toBeInTheDocument();
    expect(screen.getByText(/CIRCULAR INTERNA No. 08 DE 2026.pdf/i)).toBeInTheDocument();
  });

  it('renderiza ReportModal y permite imprimir y cerrar', () => {
    const handleClose = vi.fn();
    const printSpy = vi.spyOn(window, 'print').mockImplementation(() => {});

    // Render sin props para probar fallback por defecto
    const { rerender } = render(<ReportModal isOpen={true} onClose={handleClose} />);
    expect(screen.getByText(/Dictamen Ejecutivo: Implementación Circular Externa No. 08/i)).toBeInTheDocument();
    
    const btnPrint = screen.getByRole('button', { name: /Imprimir \/ Guardar PDF/i });
    fireEvent.click(btnPrint);
    expect(printSpy).toHaveBeenCalled();

    // Rerender con simData explícito
    rerender(
      <ReportModal
        isOpen={true}
        onClose={handleClose}
        simData={{
          contratosBase: 100,
          presupuestoBase: 1000,
          cupoContratos: 25,
          recorteContratos: 75,
          cupoPresupuesto: 250,
          ahorroNeto: 750,
          topeReglamentario: 25,
          porcentajeReduccionEfectiva: 75
        }}
      />
    );
    expect(screen.getByText('$ 750')).toBeInTheDocument();

    // Render con isOpen false retorna null
    rerender(<ReportModal isOpen={false} onClose={handleClose} />);
    expect(screen.queryByText(/Dictamen Ejecutivo/i)).not.toBeInTheDocument();

    printSpy.mockRestore();
  });
});
