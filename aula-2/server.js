const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/teste", (req, res) => {
  res.json({ texto: "[1,2,3,4,5]" });
});

app.get("/aura", (req, res) => {
  res.json({ numeros: [1, 2, 3, 4, 5] });
});

app.post("/echo", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.post("/dobrar", (req, res) => {
  const dobro = req.body.num * 2;

  res.json({ dobro: dobro });
});

app.post("/dobrar-varios", (req, res) => {
  const numeros = req.body.numeros;
  const dobros = numeros.map((numero) => numero * 2);
  res.json({ dobros: dobros });
});

app.post("/maiusculas", (req, res) => {
  const variasMinusculas = req.body;
  const maiusculas = variasMinusculas.map((minuscula) =>
    minuscula.toUpperCase(),
  );
  res.json({ maiusculas: maiusculas });
});

app.listen(8080, () => console.log("[1,2,3,4,5]"));
