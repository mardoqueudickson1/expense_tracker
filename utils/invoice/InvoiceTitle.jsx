import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  reportTitle: {
    color: '#61dafb',
    letterSpacing: 2,
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'bold',
    textTransform: 'uppercase',
  },
});

const InvoiceTitle = ({ title }) => (
  <View style={styles.titleContainer}>
    <Text style={styles.reportTitle}>{title}</Text>
  </View>
);

export default InvoiceTitle;
