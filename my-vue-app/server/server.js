import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

// Configuração do CORS para permitir o frontend
app.use(cors({
  origin: 'http://localhost:5173', // ou use '*' para desenvolvimento (não recomendado para produção)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

// Rota /api/sidebar
app.get('/api/sidebar', (req, res) => {
  const sidebarData = "joelson";
  
  res.json(sidebarData);
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});