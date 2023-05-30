import React from 'react';
import {
  Page,
  Text,
  PDFViewer,
  Document,
  View,
  StyleSheet,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: '1cm',
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: '1cm',
  },
  logo: {
    width: '5cm',
    height: 'auto',
    marginBottom: '0.5cm',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: '0.5cm',
  },
  section: {
    marginBottom: '0.5cm',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: '0.3cm',
  },
  sectionContent: {
    fontSize: 12,
    marginBottom: '0.3cm',
  },
  footer: {
    position: 'absolute',
    bottom: '1cm',
    left: '1cm',
    right: '1cm',
  },
});

const InvoiceTemplate = ({ product }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Recibo de Compra</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações do Produto:</Text>
        <Text style={styles.sectionContent}>
          Nome do Produto: {product.nome_estoque}
        </Text>

        <Text style={styles.sectionContent}>
          Preço Unitário: {product.valor_total}
        </Text>
        <Text style={styles.sectionContent}>
          Quantidade: {product.quantity}
        </Text>
        <Text style={styles.sectionContent}>
          Subtotal: {product.valor_total}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações do Comprador:</Text>
        <Text style={styles.sectionContent}>
          Nome: {product.pessoa_receber}
        </Text>
        <Text style={styles.sectionContent}>
          Endereço: {product.pessoa_receber}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Detalhes da Transação:</Text>
        <Text style={styles.sectionContent}>Total: {product.valor_total}</Text>
        <Text style={styles.sectionContent}>Data: {product.updated_at}</Text>
      </View>

      <View style={styles.footer}>
        <Text style={{ textAlign: 'center' }}>Obrigado por sua compra!</Text>
      </View>
    </Page>
  </Document>
);

export default InvoiceTemplate;
