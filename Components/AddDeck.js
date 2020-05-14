import React from "react";
import { StyleSheet, Text, View } from "react-native";

function AddDeck(props) {
  return (
    <View style={styles.container}>
      <Text>Welcome to Add Deck Screen</Text>
    </View>
  );
}
export default AddDeck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
