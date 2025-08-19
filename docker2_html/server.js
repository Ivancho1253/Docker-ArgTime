const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;
const API_URL = process.env.API_URL || "http://localhost:3000"; // default local

app.get("/", (_req, res) => {
  const tpl = fs.readFileSync(path.join(__dirname, "index.template.html"), "utf8");
  const html = tpl.replace(/__API_URL__/g, API_URL);
  res.type("html").send(html);
});

app.listen(PORT, "0.0.0.0", () =>
  console.log(`WEB escuchando en 0.0.0.0:${PORT} → API_URL=${API_URL}`)
);
