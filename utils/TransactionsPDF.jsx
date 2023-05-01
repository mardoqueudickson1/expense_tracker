import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const generateMonthlyTransactionsPDF = async (transactions) => {
  // Cria um novo documento PDF
  const doc = new jsPDF();
  

  // Define a posição inicial do cursor
  let cursorX = 10;
  let cursorY = 20;

  // Adiciona o cabeçalho do PDF
  doc.setFontSize(24);
  doc.setTextColor("#2B2D42");
  doc.text('The Potter House - Transações', 50, cursorY);
  
  cursorY += 20;

  // Define as configurações da tabela
  const tableHeaders = ['Data', 'Tipo', 'Descrição', 'Valor'];
  const tableData = transactions.map(transaction => [transaction.data_formatada, transaction.tipo, transaction.descricao, `Kz ${transaction.valor}`]);
  const tableWidths = [50, 40, 40, 40];

  // Adiciona a tabela ao PDF
  doc.autoTable({
    startY: cursorY,
    head: [tableHeaders],
    body: tableData,
    columns: tableWidths,
    headStyles: { fillColor: ["#2B2D42"] },
    bodyStyles: { textColor: [51, 51, 51] },
    styles: { fontSize: 12 },
  });

  // Salva o documento PDF e retorna seus dados
  const pdfBytes = doc.output('arraybuffer');
  return pdfBytes;
}
