const express = require("express");
const app = express();

const tasks = [
  { id: 1, description: "Hacer la compra", completed: false },
  { id: 2, description: "Lavar los platos", completed: true },
  { id: 3, description: "Hacer ejercicio", completed: false },
];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
