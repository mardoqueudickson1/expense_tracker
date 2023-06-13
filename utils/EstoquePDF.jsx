import React from 'react';
import ReactPDF, {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
} from '@react-pdf/renderer';

const FaturaVendaPDF = () => {
  const {
    page,
    header,
    headerLeft,
    companyName,
    headerRight,
    separator,
    infoSection,
    infoItem,
    label,
    table,
    tableRow,
    columnHeader,
    totalRow,
    totalLabel,
    totalAmount,
    terms,
  } = styles;

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getRandomString = () => {
    return Math.random().toString(36).substring(2, 7);
  };

  const nomeEmpresa = 'Nome da Empresa';
  const enderecoEmpresa = 'Endereço da Empresa';
  const telefoneEmpresa = 'Telefone da Empresa';
  const emailEmpresa = 'Email da Empresa';
  const numeroFatura = `Fatura #${getRandomNumber(1000, 9999)}`;
  const dataFatura = new Date().toLocaleDateString();

  const produtos = [
    {
      id: 1,
      descricao: 'Produto 1',
      quantidade: getRandomNumber(1, 10),
      subtotal: getRandomNumber(10, 100),
    },
    {
      id: 2,
      descricao: 'Produto 2',
      quantidade: getRandomNumber(1, 10),
      subtotal: getRandomNumber(10, 100),
    },
    {
      id: 3,
      descricao: 'Produto 3',
      quantidade: getRandomNumber(1, 10),
      subtotal: getRandomNumber(10, 100),
    },
  ];

  const total = produtos.reduce((acc, prod) => acc + prod.subtotal, 0);

  return (
    <Document>
      <Page style={page}>
        <View style={header}>
          <View style={headerLeft}>
            <Text style={companyName}>{nomeEmpresa}</Text>
            <Text>Fatura</Text>
          </View>
          <View style={headerRight}>
            <Text>{enderecoEmpresa}</Text>
            <Text>{telefoneEmpresa}</Text>
            <Text>{emailEmpresa}</Text>
          </View>
        </View>
        <View style={separator} />
        <View style={infoSection}>
          <View style={infoItem}>
            <Text style={label}>Bill To:</Text>
            <Text>Informações do cliente</Text>
          </View>
          <View style={infoItem}>
            <Text style={label}>Ship To:</Text>
            <Text>Informações de entrega</Text>
          </View>
          <View style={infoItem}>
            <Text style={label}>Date:</Text>
            <Text>{dataFatura}</Text>
          </View>
        </View>
        <View style={table}>
          <View style={tableRow}>
            <Text style={columnHeader}>Nº Produto</Text>
            <Text style={columnHeader}>Descrição</Text>
            <Text style={columnHeader}>Quantidade</Text>
            <Text style={columnHeader}>Subtotal</Text>
          </View>
          {produtos.map((produto) => (
            <View style={tableRow} key={produto.id}>
              <Text>{produto.id}</Text>
              <Text>{produto.descricao}</Text>
              <Text>{produto.quantidade}</Text>
              <Text>{produto.subtotal}</Text>
            </View>
          ))}
          <View style={totalRow}>
            <Text style={totalLabel}>Total:</Text>
            <Text style={totalAmount}>{total}</Text>
          </View>
        </View>
        <View style={terms}>
          <Text>Termos e condições:</Text>
          <Text>Aqui vão os termos e condições da fatura.</Text>
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: 'column',
  },
  companyName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'column',
    textAlign: 'right',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 20,
  },
  infoSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: 'column',
    flex: 1,
  },
  label: {
    fontWeight: 'bold',
  },
  table: {
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingVertical: 5,
  },
  columnHeader: {
    fontWeight: 'bold',
    flex: 1,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  totalLabel: {
    fontWeight: 'bold',
  },
  totalAmount: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  terms: {
    marginTop: 20,
  },
});

export default FaturaVendaPDF();
