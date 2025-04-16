import 'dotenv/config';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Servidor ES Modules com .env!');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});