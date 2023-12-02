import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function Movements({ data }) {
  const [showValue, setShowValue] = useState(false);

  const renderValue = () => {
    if (data.type === 1) {
      return <Text style={styles.value}>R$ {data.value}</Text>;
    } else {
      return <Text style={styles.expenses}>R$ -{data.value}</Text>;
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setShowValue(!showValue)}
    >
      <Text style={styles.date}>{data.date}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>

        {showValue && renderValue()}
        {!showValue && <View style={styles.skeletron} />}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DADADA',
    padding: 14,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    color: '#DADADA',
    fontWeight: 'bold',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    color: '#2ecc71',
    fontWeight: 'bold'
  },
  expenses: {
    fontSize: 16,
    color: '#e74c3c',
    fontWeight: 'bold'
  },
  skeletron: {
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: '#DADADA',
    borderRadius: 8,
  }
});
