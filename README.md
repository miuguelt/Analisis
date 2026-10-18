# Observatorio y Herramienta Interactiva: Circular Externa No. 08 de 2026 (DAPRE)

Herramienta analítica e interactiva para el estudio, simulación y evaluación de impacto de la **Circular Externa No. 08 del 15 de octubre de 2026**, expedida por el Departamento Administrativo de la Presidencia de la República (**DAPRE**), mediante la cual se fijan lineamientos de austeridad, el tope máximo del **25 %** en contratos de prestación de servicios y el límite del **60 %** en la ocupación de empleos de libre nombramiento y remoción a partir del **1.° de enero de 2027**.

---

## 🏛️ Estructura de la Herramienta

La aplicación está construida en **React + Vite + Tailwind CSS** y se divide en 6 módulos especializados:

1. **Anatomía de la Norma:** Desglose interactivo de los **9 numerales completos** de la Circular Externa No. 08 de 2026 con citas textuales del PDF oficial, cuadro de firmantes del DAPRE (Carlos Andrés Ríos Puerta, Rosalín Orozco Becerra y Mateo Duque Giraldo) y fundamentos constitucionales y legales.
2. **Simulador de Línea Base (25 % OPS y 60 % LNR):** Calculadora financiera y cuantitativa del tope del 25 % sobre línea base bienal 2025-2026 (Numeral 4) y del límite del 60 % en empleos de Libre Nombramiento y Remoción (Numeral 2), con presets reales (Consolidado Nacional Contraloría 2026, SENA, Universidades Públicas SUE, ICBF, INVIMA, MinHacienda y Ejemplo Pedagógico Red+ Noticias) y asistente interactivo de excepciones (Numeral 5).
3. **Impacto en Instituciones del Estado (Foco Especial en SENA y Universidades Públicas — SUE):** Panel profundo de análisis sobre la formación profesional del **SENA** (33 Regionales, 118 Centros, Banco de Instructores APE, parafiscales Ley 21/1982 y FIC) y la autonomía universitaria del **Sistema Universitario Estatal — SUE** (Art. 69 CP, Ley 30 de 1992, Sentencia C-220/97, docentes ocasionales y hora cátedra), acompañado de matriz comparativa y semáforo sectorial con simulación en un clic.
4. **Impacto Social y Laboral:** Análisis multidimensional de la afectación sobre los **501.423 contratistas** ($ 22,34 billones COP contabilizados por la Contraloría General de la República con corte a enero de 2026), calculadora interactiva de ingreso neto real del contratista tras aportes de seguridad social sobre el IBC del 40 % (salud 12,5 %, pensión 16 % y ARL 0,522 %), síndrome de «planta quemada» en funcionarios de carrera y efecto en el ciudadano.
5. **Debate: Objetivos, Luces, Sombras y Las 6 Perspectivas:** Hoja de ruta de los objetivos de la norma (corto, mediano y largo plazo), balance de 6 aspectos positivos frente a 6 riesgos críticos y análisis desde **6 perspectivas institucionales y ciudadanas** (Gobierno/Hacienda, Contratistas, Sindicatos de Carrera, Sector Educativo SENA/SUE, Entes de Control CGR/PGN y Ciudadanía).
6. **Marco Jurídico y Evidencia:** Cotejo verificable del PDF oficial (`CIRCULAR INTERNA No. 08 DE 2026.pdf`) con el artículo de Red+ Noticias (15 de octubre de 2026), jurisprudencia constitucional aplicable (Sentencias C-614 de 2009, SU-049 de 2017 y C-220 de 1997) y alcance por ramas del poder público.

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
