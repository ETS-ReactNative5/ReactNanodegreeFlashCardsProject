import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { handleAddDeck } from "../Actions/decks";

function AddDeck(props) {
  const [title, setTitle] = useState("");
  const createDeck = async (title) => {
    if (title) {
      setTitle("");
      let action = await props.dispatch(handleAddDeck(title)); // action is returned as I returned it in my middlware
      // console.log("navigate to deck screen with", action.deck);
      props.navigation.navigate("DECKS"); // tab
      props.navigation.push("DeckScreen", { deckId: action.deck.id });
    }
  };
  return (
    <View style={styles.container}>
      <Text>What is the title of your new deck?</Text>
      <TextInput
        placeholder="Deck Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TouchableOpacity onPress={() => createDeck(title)}>
        <Text>Create Deck</Text>
      </TouchableOpacity>
    </View>
  );
}
export default connect()(AddDeck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
