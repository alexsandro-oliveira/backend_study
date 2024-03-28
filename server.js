//import http from "http";
import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log("servidor escutando!");
});

//criando server e rotas direto no node, sem utilizar o express

// const rotas = {
//   "/": "Curso de Node.js",
//   "/livros": "Entrei na rota livros",
//   "/autores": "Entrei na rota autores",
// };

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end(rotas[req.url]);
// });

// server.listem(PORT, () => {
//   console.log("servidor escutando!");
// });
