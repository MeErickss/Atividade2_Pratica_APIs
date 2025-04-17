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
  res.send("Bem-vindo à API de Consultas Brasileiras! Use /cnpj/SEU_CNPJ para consultar empresas ou /banco/CODIGO para informações bancárias.");
});

// Rota de consulta de CNPJ
app.get('/cnpj/:cnpj', async (req, res) => {
  try {
    const { cnpj } = req.params;
    const response = await axios.get(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);
    res.send(`Empresa encontrada: ${response.data.razao_social} (${response.data.cnae_fiscal_descricao})`);
  } catch (error) {
    res.send(`Erro: CNPJ não encontrado. Use 14 dígitos (ex: 00000000000191)`);
  }
});

// Rota de consulta de bancos
app.get('/banco/:codigo', async (req, res) => {
  try {
    const { codigo } = req.params;
    const response = await axios.get(`https://brasilapi.com.br/api/banks/v1/${codigo}`);
    res.send(`Banco ${codigo}: ${response.data.fullName} (${response.data.name})`);
  } catch (error) {
    res.send(`Erro: Banco não encontrado. Códigos válidos: 1 (Banco do Brasil), 33 (Santander), etc.`);
  }
});

// Inicia o servidor
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});