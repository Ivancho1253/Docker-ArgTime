FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --omit=dev
COPY server.js index.html ./
ENV PORT=10000
EXPOSE 10000
CMD ["npm","start"]
