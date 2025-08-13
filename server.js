const express = require("express");
const app = express();

// Render te pasa el puerto en la variable de entorno PORT
const PORT = process.env.PORT || 10000; // 3000 local, 10000 en Docker/Render

app.get("/", (_req, res) => {
  res.send("OK");
});

app.get("/hora", (_req, res) => {
  const date = new Date();
  const options = {
    timeZone: "America/Argentina/Buenos_Aires",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  };
  const horaArgentina = date.toLocaleString("es-AR", options);
  res.json({ zona: "America/Argentina/Buenos_Aires", hora: horaArgentina });
});

// IMPORTANTE: bind en 0.0.0.0
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor corriendo en http://0.0.0.0:${PORT}/hora`);
});
