import express, { json } from 'express';
import { generate } from 'shortid';
const sqlite3 = require('sqlite3').verbose();
import cors from 'cors';
const app = express();
const port = process.env.PORT || 3001;

app.use(json());
app.use(cors());

// Conexão com o banco SQLite
const db = new sqlite3.Database('./urls.db', (err) => {
  if (err) console.error(err.message);
  console.log('Conectado ao SQLite.');
});

// Criação da tabela
db.run(`CREATE TABLE IF NOT EXISTS urls (
  id TEXT PRIMARY KEY,
  original_url TEXT NOT NULL
)`);

// Rota para encurtar URL
app.post('/shorten', (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL é obrigatória' });

  const id = generate();
  db.run(`INSERT INTO urls (id, original_url) VALUES (?, ?)`, [id, url], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ shortUrl: `http://localhost:${port}/${id}` });
  });
});

// Rota para redirecionar
app.get('/:id', (req, res) => {
  const { id } = req.params;
  db.get(`SELECT original_url FROM urls WHERE id = ?`, [id], (err, row) => {
    if (err || !row) return res.status(404).json({ error: 'URL não encontrada' });
    res.redirect(row.original_url);
  });
});

app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}`);
});