import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { CommonActions } from "@react-navigation/native";

function Quiz(props) {
  const { deckId } = props.route.params;
  const { questions, deckTitle } = props; // question -> {id,title,answer}
  const [questionIndex, setQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const onSubmitAnswer = (isCorrect) => {
    if (isCorrect) setPoints((p) => p + 1);
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((i) => i + 1);
    } else {
      // navigate to Quiz Result send deckId & points
    }
  };
  const { title, answer } = questions[questionIndex];
  return (
    <View style={[styles.container]}>
      <View>
        <Text>{deckTitle}</Text>
      </View>
      {questions.length === 0 && (
        <View>
          <Text>No Cards Added to this deck</Text>
        </View>
      )}
      {questions.length > 0 && (
        <View>
          <Text>
            Card {questionIndex + 1} of {questions.length}
          </Text>
          <Text>{showAnswer ? answer : title}</Text>
          <TouchableOpacity
            onPress={() => setShowAnswer((showAnswer) => !showAnswer)}
          >
            <Text>{showAnswer ? "Question" : "Answer"}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onSubmitAnswer(true)}>
            <Text>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onSubmitAnswer(false)}>
            <Text>Incorrect</Text>
          </TouchableOpacity>
        </View>
      )}
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
const mapStateToProps = ({ questions, decks }, props) => {
  const deckId = props.route.params.deckId;
  let qs = decks[deckId].questions;
  return {
    questions: qs.map((id) => questions[id]),
    deckTitle: decks[deckId].title,
  };
};
export default connect(mapStateToProps)(Quiz);
