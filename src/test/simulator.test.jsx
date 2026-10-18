import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Simulator from '../components/Simulator';
import ExceptionEvaluator from '../components/ExceptionEvaluator';
import ReportModal from '../components/ReportModal';

describe('Pruebas del Simulador Cuantitativo, Evaluador de Excepciones y Reporte Ejecutivo', () => {
  it('renderiza Simulator, cambia presets, soporta campos en blanco y transiciona a modo personalizado al editar', () => {
    const handleSync = vi.fn();
    const { unmount } = render(<Simulator initialPresetId="preset-inexistente" />);
    unmount();

    render(<Simulator onSyncSimulation={handleSync} />);
    expect(screen.getByText(/Simulador de Línea Base y Reducción del 25 %/i)).toBeInTheDocument();

    const select = screen.getByLabelText(/Cargar Preset de Entidad Real/i);
    fireEvent.change(select, { target: { value: 'universidades-publicas' } });
    expect(screen.getByDisplayValue('34500')).toBeInTheDocument();

    fireEvent.change(select, { target: { value: 'sena' } });
    expect(screen.getByDisplayValue('32000')).toBeInTheDocument();

    // Al editar contratos o dejar temporalmente en blanco, pasa a modo personalizado ('custom')
    const inputContratos = screen.getByLabelText(/Contratos Línea Base/i);
    fireEvent.change(inputContratos, { target: { value: '' } });
    expect(inputContratos.value).toBe('');
    expect(screen.getByText(/Escenario Personalizado Activo/i)).toBeInTheDocument();

    fireEvent.change(inputContratos, { target: { value: '40000' } });
    expect(screen.getByDisplayValue('40000')).toBeInTheDocument();

    const inputPresupuesto = screen.getByLabelText(/Presupuesto Línea Base/i);
    fireEvent.change(inputPresupuesto, { target: { value: '950000000000' } });
    expect(screen.getByDisplayValue('950000000000')).toBeInTheDocument();

    const inputCargosLNR = screen.getByLabelText(/Cargos Totales LNR en Planta/i);
    fireEvent.change(inputCargosLNR, { target: { value: '500' } });
    expect(screen.getByDisplayValue('500')).toBeInTheDocument();

    const inputExcluidosLNR = screen.getByLabelText(/Directivos Excluidos/i);
    fireEvent.change(inputExcluidosLNR, { target: { value: 'no-num' } });
    fireEvent.change(inputExcluidosLNR, { target: { value: '40' } });
    expect(screen.getByDisplayValue('40')).toBeInTheDocument();

    // Sliders actualizan etiquetas dinámicas en KPIs y gráfico
    const sliders = screen.getAllByRole('slider');
    fireEvent.change(sliders[0], { target: { value: '30' } });
    fireEvent.change(sliders[1], { target: { value: '20' } });
    expect(screen.getByText(/Cupo Máximo \(30 %\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Recorte Proyectado \(70 %\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Cupo Ordinario \(30 %\)/i)).toBeInTheDocument();

    // Asistente de excepciones desplegable
    fireEvent.click(screen.getByRole('button', { name: /Abrir Asistente de Excepciones/i }));
    expect(screen.getByText(/Ocultar Asistente de Excepciones/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Ocultar Asistente de Excepciones/i }));
  });

  it('restaura estado guardado (savedState) en Simulator al volver a montar el componente', () => {
    render(
      <Simulator
        savedState={{
          presetId: 'sena',
          contratosBase: 32000,
          presupuestoBase: 880000000000,
          lnrCargosTotales: 420,
          lnrCargosExcluidos: 38,
          topeReglamentario: 35,
          porcentajeExcepcion: 15
        }}
      />
    );
    expect(screen.getByDisplayValue('32000')).toBeInTheDocument();
    expect(screen.getByText(/Cupo Máximo \(35 %\)/i)).toBeInTheDocument();
  });

  it('renderiza ExceptionEvaluator y permite cambiar causales y alternar checkboxes', () => {
    render(<ExceptionEvaluator />);
    expect(screen.getByText(/Asistente de Validación de Excepciones/i)).toBeInTheDocument();
    expect(screen.getByText(/Excepción Formalmente Viable/i)).toBeInTheDocument();
    const selectCausal = screen.getByRole('combobox');
    fireEvent.change(selectCausal, { target: { value: 'seguridad_proteccion' } });
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);
    fireEvent.click(checkboxes[1]);
    fireEvent.click(checkboxes[2]);
    expect(screen.getByText(/Excepción Incompleta/i)).toBeInTheDocument();
  });

  it('renderiza ReportModal con métricas OPS + LNR y permite imprimir y cerrar', () => {
    const handleClose = vi.fn();
    const printSpy = vi.spyOn(window, 'print').mockImplementation(() => {});

    const { rerender } = render(<ReportModal isOpen={true} onClose={handleClose} />);
    expect(screen.getByText(/Dictamen Ejecutivo: Implementación Circular Externa No. 08/i)).toBeInTheDocument();
    expect(screen.getByText(/Meta Numeral 2 — Planta de Libre Nombramiento/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Imprimir \/ Guardar PDF/i }));
    expect(printSpy).toHaveBeenCalled();

    rerender(
      <ReportModal
        isOpen={true}
        onClose={handleClose}
        simData={{
          entidadNombre: 'Servicio Nacional de Aprendizaje (SENA)',
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
    expect(screen.getByText(/Servicio Nacional de Aprendizaje \(SENA\)/i)).toBeInTheDocument();

    rerender(<ReportModal isOpen={false} onClose={handleClose} />);
    expect(screen.queryByText(/Dictamen Ejecutivo/i)).not.toBeInTheDocument();

    printSpy.mockRestore();
  });
});
