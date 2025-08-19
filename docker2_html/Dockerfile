FROM node:20-alpine
WORKDIR /app

# 1) copiar manifiestos y instalar deps
COPY package*.json ./
RUN npm install --omit=dev

# 2) copiar el código
COPY server.js index.template.html ./

ENV PORT=10000
EXPOSE 10000
CMD ["npm","start"]
