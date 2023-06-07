import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  invoiceNoContainer: {
    flexDirection: 'row',
    marginTop: 36,
    justifyContent: 'flex-end',
  },
  invoiceDateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  // invoiceDate: {
  //   fontSize: 10,
  //   fontStyle: 'bold',
  // },
  label: {
    width: 50,
  },
});

const InvoiceNo = ({ invoice }) => (
  <Fragment>
    <View style={styles.invoiceNoContainer}>
      <Text style={styles.label}>Registro:</Text>
      <Text style={styles.invoiceDate}>#{invoice.invoice_no}</Text>
    </View>

    <View style={styles.invoiceDateContainer}>
      <Text style={styles.label}>Data:</Text>
      <Text>{invoice.trans_date}</Text>
    </View>
  </Fragment>
);

export default InvoiceNo;
