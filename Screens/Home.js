import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Bienvenido a la pantalla de inicio!</Text>
      <TouchableOpacity style={styles.button} onPress={() => console.log("Botón presionado")}>
        <Text style={styles.buttonText}>Presionar aquí</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Home;
