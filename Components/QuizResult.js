import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CommonActions } from "@react-navigation/native";

export default function QuizResult(props) {
  const { deckId, deckTitle, points, totalPoints } = props.route.params;
  const backToDeck = () => {
    props.navigation.dispatch(CommonActions.navigate("DeckScreen", { deckId })); // navigate checks history first and will not push
  };
  const quizAgain = () => {
    props.navigation.dispatch(CommonActions.navigate("Quiz", { deckId }));
  };
  return (
    <View style={[styles.container]}>
      <Text>Result</Text>
      <Text>
        {points}/{totalPoints}
      </Text>
      <TouchableOpacity onPress={quizAgain}>
        <Text>Quiz Again</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={backToDeck}>
        <Text>Back to {deckTitle}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
