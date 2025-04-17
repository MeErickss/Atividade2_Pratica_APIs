import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Rota raiz com instruções
app.get('/', (req, res) => {
  res.send("Bem-vindo à API de Consultas Brasileiras! Use /cep/SEU_CEP para consultar endereços ou /taxas/TIPO para ver taxas.");
});

// Rota de consulta de CEP
app.get('/cep/:cep', async (req, res) => {
  try {
    const { cep } = req.params;
    const response = await axios.get(`https://brasilapi.com.br/api/cep/v1/${cep}`);
    res.send(`Endereço encontrado para CEP ${cep}: ${response.data.street}, ${response.data.city}/${response.data.state}`);
  } catch (error) {
    res.send(`Erro: CEP não encontrado. Use 8 dígitos (ex: 01001000)`);
  }
});

// Rota de consulta de taxas
app.get('/taxas/:tipo', async (req, res) => {
  try {
    const { tipo } = req.params;
    const response = await axios.get(`https://brasilapi.com.br/api/taxas/v1/${tipo}`);
    res.send(`Taxa ${tipo}: ${response.data.valor}%`);
  } catch (error) {
    res.send(`Erro: Taxa não encontrada. Tipos válidos: SELIC, CDI ou IPCA`);
  }
});

// Inicia o servidor
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});