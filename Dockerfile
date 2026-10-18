# Etapa 1: Construcción con Node.js
FROM node:20-alpine AS builder
WORKDIR /app

# Copiar manifiestos e instalar dependencias
COPY package*.json ./
RUN npm ci

# Copiar código fuente y compilar bundle de producción
COPY . .
RUN npm run build

# Etapa 2: Servidor estático optimizado Nginx (sin privilegios de root)
FROM nginxinc/nginx-unprivileged:alpine
WORKDIR /usr/share/nginx/html

# Copiar artefactos compilados desde el builder
COPY --from=builder /app/dist .
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

# Verificación de salud periódica para orquestadores y Coolify
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -q -O - http://127.0.0.1:8080/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
