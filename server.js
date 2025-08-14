const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

// Endpoint JSON para hora
app.get("/hora", (_req, res) => {
  const now = new Date();
  const fmt = now.toLocaleString("es-AR", {
    timeZone: "America/Argentina/Buenos_Aires",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  res.json({ zona: "America/Argentina/Buenos_Aires", hora: fmt });
});

// Servir el HTML principal
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor escuchando en 0.0.0.0:${PORT}`);
});
