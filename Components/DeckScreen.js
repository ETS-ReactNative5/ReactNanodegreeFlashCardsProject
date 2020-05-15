import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import DeckHeader from "./Home/DeckHeader";
import { handleDeleteDeck } from "../Actions/decks";
import { CommonActions } from "@react-navigation/native";
function DeckScreen(props) {
  console.log("Deck screen props", props);
  const { deckId } = props.route.params;
  const onDeleteDeck = () => {
    props.dispatch(handleDeleteDeck(deckId));
    props.navigation.dispatch(CommonActions.goBack());
  };
  const onAddCardPress = () => {
    props.navigation.push("AddCard", { deckId });
  };
  const onStartQuiz = () => {
    props.navigation.push("Quiz", { deckId });
  };
  return (
    <View style={styles.container}>
      <DeckHeader deckId={deckId} />
      <TouchableOpacity onPress={onDeleteDeck}>
        <Text>Delete Deck</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onAddCardPress}>
        <Text>Add Card</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onStartQuiz}>
        <Text>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  );
}
export default connect()(DeckScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
