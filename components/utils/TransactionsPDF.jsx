import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

export default async function generateMonthlyTransactionsPDF(transactions) {
  // Cria um novo documento PDF
  const pdfDoc = await PDFDocument.create();

  // Adiciona uma nova página ao documento
  const page = pdfDoc.addPage();

  // Pega a fonte Helvetica
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Define a posição inicial do cursor
  let cursorX = 50;
  let cursorY = page.getHeight() - 50;

  // Adiciona o cabeçalho do PDF
  const titleText = 'Transações Mensais';
  const titleWidth = font.widthOfTextAtSize(titleText, 24);
  cursorY -= 24;
  page.drawText(titleText, {
    x: (page.getWidth() - titleWidth) / 2,
    y: cursorY,
    size: 24,
    font,
    color: rgb(0, 0.53, 0.71),
  });

  // Adiciona as transações ao PDF
  cursorY -= 50;
  for (const transaction of transactions) {
    const text = `${transaction.tipo} - ${transaction.descricao} - R$ ${transaction.valor}`;
    const width = font.widthOfTextAtSize(text, 12);
    cursorY -= 15;
    page.drawText(text, {
      x: cursorX,
      y: cursorY,
      size: 12,
      font,
    });
  }

  // Salva o documento PDF e retorna seus dados
  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}
