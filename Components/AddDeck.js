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
      let action = await props.dispatch(handleAddDeck(title));
      console.log(action);
      // TODO navigate to this Deck view
      // props.navigation.push("DeckScreen", action.deck);
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
