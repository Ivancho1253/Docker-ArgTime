const express = require("express");
const app = express();

const PORT = process.env.PORT || 10000;

app.get("/hora", (_req, res) => {
  const now = new Date();
  const hora = now.toLocaleString("es-AR", {
    timeZone: "America/Argentina/Buenos_Aires",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  res.json({ zona: "America/Argentina/Buenos_Aires", hora });
});

app.get("/", (_req, res) => res.send("API OK"));

app.listen(PORT, "0.0.0.0", () =>
  console.log(`API escuchando en 0.0.0.0:${PORT}`)
);
