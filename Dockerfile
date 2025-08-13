FROM node:20-alpine
WORKDIR /app

# Instalar deps primero para cachear capas
COPY package.json package-lock.json* ./
RUN npm install --omit=dev

# Copiar código
COPY server.js .

# Render redirige al puerto expuesto (recomendado 10000)
ENV PORT=10000
EXPOSE 10000

CMD ["npm", "start"]
