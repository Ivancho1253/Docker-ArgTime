const date = new Date();

// Convertir a hora de Argentina (UTC-3 todo el año)
const options = {
  timeZone: "America/Argentina/Buenos_Aires",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
};

console.log(
  "Hora en Argentina:",
  date.toLocaleString("es-AR", options)
);
