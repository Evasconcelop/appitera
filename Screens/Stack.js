import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Stack = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Stack Screen</Text>
      <Text>Esta es la pantalla de la pila.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Stack;
