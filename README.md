# Observatorio y Herramienta Interactiva: Circular Externa No. 08 de 2026 (DAPRE)

Herramienta analítica e interactiva para el estudio, simulación y evaluación de impacto de la **Circular Externa No. 08 del 15 de octubre de 2026**, expedida por el Departamento Administrativo de la Presidencia de la República (**DAPRE**), mediante la cual se fijan lineamientos de austeridad, el tope máximo del **25 %** en contratos de prestación de servicios y el límite del **60 %** en la ocupación de empleos de libre nombramiento y remoción a partir del **1.° de enero de 2027**.

---

## 🏛️ Estructura de la Herramienta

La aplicación está construida en **React + Vite + Tailwind CSS** y se divide en 6 módulos especializados:

1. **Anatomía de la Norma:** Desglose interactivo numeral por numeral de la Circular (tope del 25 %, tope del 60 %, regla de no provisión automática y régimen de transición 2027).
2. **Simulador de Línea Base y Reducción del 25 %:** Calculadora financiera y cuantitativa con presets de entidades reales colombianas (Consolidado Nacional Contraloría 2026, SENA, ICBF, INVIMA y Ministerios) y modo personalizado.
3. **Impacto en Instituciones del Estado:** Matriz de vulnerabilidad misional por sectores (Salud/Invima, Educación/SENA, Niñez e Inclusión/ICBF, Seguridad/UNP, Infraestructura, Tierras y TIC) con semáforo de riesgo y vías de mitigación.
4. **Impacto Social y Laboral:** Análisis profundo de la afectación sobre más de 500.000 contratistas, sus familias, el consumo regional, el síndrome de «planta quemada» en la carrera administrativa y el servicio al ciudadano.
5. **Debate: Luces y Sombras:** Balance equilibrado entre los aciertos de la norma (freno a nóminas paralelas, austeridad fiscal, estímulo a la automatización) y sus riesgos críticos (parálisis de servicios, fuga de cerebros y tercerización encubierta).
6. **Marco Jurídico y Evidencia:** Cotejo del documento oficial en PDF con la noticia de prensa, sentencias de unificación de la Corte Constitucional (SU-049 de 2017 y C-614 de 2009 sobre contrato realidad) y marco de la Ley 80 de 1993.

---

## 🚀 Puesta en Marcha en Desarrollo Local

El entorno local funciona en **Windows nativo** con Node.js v20+:

```powershell
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo en tiempo real
npm run dev
```

---

## 🧪 Pruebas Automatizadas y Compuerta de Cobertura (100 %)

Cumpliendo con el estándar estricto de ingeniería de **DevBrain v8.10**, cada función y componente cuenta con pruebas automatizadas con aserciones observables:

```powershell
# Ejecutar suite de pruebas
npm test

# Ejecutar compuerta estricta de cobertura (100 % de funciones)
npm run test:coverage
```

---

## 🐳 Despliegue en Producción (Coolify / Docker)

Para despliegues autohospedados en **Coolify** o servidores de producción con Docker:

```powershell
# Compilar y levantar contenedor con Nginx sin privilegios y HEALTHCHECK
docker compose up -d --build
```

El servicio responderá en el puerto `8080` e incluye endpoint de verificación de salud en `/health`.
