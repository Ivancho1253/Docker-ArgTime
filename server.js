const express = require("express");
const app = express();

app.get("/hora", (req, res) => {
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

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000/hora");
});
