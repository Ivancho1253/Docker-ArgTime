FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

# copia todo lo que hay en docker2_html/
COPY . .

ENV PORT=10000
EXPOSE 10000
CMD ["npm","start"]
