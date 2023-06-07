import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 36,

    // flexDirection: 'row',
    // justifyContent: 'space-between', // Adicionado para obter espaçamento igual entre os elementos
  },
  billTo: {
    marginTop: 20,
    paddingBottom: 3,
    fontFamily: 'Helvetica-Oblique',
  },
  billToContent: {
    textAlign: 'right',
    fontFamily: 'Helvetica',
    marginTop: -72,
  },

  billToContent2: {
    textAlign: 'left',
    fontFamily: 'Helvetica',
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    textAlign: 'right',
  },
});

const BillTo = ({ invoice }) => (
  <View style={styles.headerContainer}>
    <View style={styles.billToContent2}>
      <Text>Entregue para:</Text>
      <Text>{invoice.company}</Text>
      <Text>{invoice.address}</Text>
      <Text>{invoice.phone}</Text>
      <Text>{invoice.email}</Text>
    </View>

    <View style={styles.billToContent}>
      <Text>{invoice.empresa}</Text>
      <Text>{invoice.endereco}</Text>
      <Text>{invoice.telefone}</Text>
      <Text>{invoice.email1}</Text>
    </View>
  </View>
);

export default BillTo;
