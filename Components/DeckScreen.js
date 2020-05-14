import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DeckHeader from "./Home/DeckHeader";
function DeckScreen(props) {
  console.log("Deck screen props", props);
  const { deck } = props.route.params;
  return (
    <View style={styles.container}>
      <DeckHeader deck={deck} />
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
