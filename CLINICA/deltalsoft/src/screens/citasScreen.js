import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CitasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📅 Citas</Text>
      <Text>Aquí listaremos las citas (GET)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 16 },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 8 },
});