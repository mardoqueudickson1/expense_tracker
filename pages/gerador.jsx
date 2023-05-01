import { useState } from 'react';
import { generateMonthlyTransactionsPDF } from '../utils/TransactionsPDF';
import axios  from '../services/axios'

export default function MonthlyTransactions() {
  const [transactions, setTransactions] = useState([]);
  console.log(transactions)

  // Função que carrega as transações da API
  async function fetchTransactions() {
    const response = await axios.get('/empresa/filha/transacoes');
    const data = await response.data;
    setTransactions(data);
  }

  // Função que gera o PDF e faz o download
  async function downloadPDF() {
    const pdfBytes = await generateMonthlyTransactionsPDF(transactions);

    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'transacoes-mensais.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  return (
    <div className="max-w-lg mx-auto py-8">
  <h1 className="text-2xl font-bold mb-4">Transações Mensais</h1>
  <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={fetchTransactions}>Carregar Transações</button>
  <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={downloadPDF} disabled={!transactions.length}>Baixar PDF</button>
</div>
  );
}
