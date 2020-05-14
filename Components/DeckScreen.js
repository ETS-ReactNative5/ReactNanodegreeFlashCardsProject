import React from "react";
import { StyleSheet, Text, View } from "react-native";

function DeckScreen(props) {
  console.log("Deck screen props", props);
  return (
    <View style={styles.container}>
      <Text>Welcome single Deck Screen</Text>
    </View>
  );
}
export default DeckScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
