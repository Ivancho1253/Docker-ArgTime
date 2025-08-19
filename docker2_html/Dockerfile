FROM node:20-alpine
WORKDIR /app

# 1) Instalar dependencias
COPY package*.json ./
RUN npm ci --omit=dev || npm install --omit=dev

# 2) Copiar el código
COPY . .

# 3) Verificación (ayuda a detectar nombres mal escritos en Render)
RUN test -f server.js && test -f index.template.html

ENV PORT=10000
EXPOSE 10000
CMD ["npm","start"]
