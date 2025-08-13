const express = require("express");
const app = express();

const PORT = process.env.PORT || 10000;

// Endpoint JSON (por si querés usarlo en otros lados)
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

// Página principal con la hora grande (se actualiza sola)
app.get("/", (_req, res) => {
  res.type("html").send(`
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Hora Argentina</title>
  <style>
    body{font-family:system-ui,Arial,sans-serif;display:grid;place-items:center;height:100dvh;margin:0;background:#0b1220;color:#e8ecf1}
    .card{padding:2rem 3rem;border-radius:18px;background:#141c2f;box-shadow:0 10px 30px rgba(0,0,0,.35);text-align:center}
    h1{margin:0 0 .5rem 0;font-size:1.1rem;color:#9fb3c8;font-weight:600;letter-spacing:.03em}
    #hora{font-size:3rem;font-weight:700;line-height:1.1}
    .sub{margin-top:.5rem;font-size:.95rem;color:#9fb3c8}
  </style>
</head>
<body>
  <div class="card">
    <h1>Hora en Argentina</h1>
    <div id="hora">Cargando…</div>
    <div class="sub">Zona: America/Argentina/Buenos_Aires</div>
  </div>

  <script>
    async function actualizar() {
      try {
        const r = await fetch("/hora", { cache: "no-store" });
        const d = await r.json();
        document.getElementById("hora").textContent = d.hora;
      } catch (e) {
        document.getElementById("hora").textContent = "Error cargando hora";
      }
    }
    actualizar();
    setInterval(actualizar, 1000); // refresca cada 1s
  </script>
</body>
</html>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor escuchando en 0.0.0.0:${PORT}`);
});
