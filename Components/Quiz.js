import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { connect } from "react-redux";
import { clearNotificationsAndSetOneForTomorrow } from "../utils/Notifications";

function Quiz(props) {
  useEffect(() => {
    if (Platform.OS !== "web") {
      clearNotificationsAndSetOneForTomorrow();
    }
  }, []);
  const { deckId } = props.route.params;
  const { questions, deckTitle } = props; // question -> {id,title,answer}
  const [questionIndex, setQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const reset = () => {
    setQuestionIndex(0);
    setPoints(0);
    setShowAnswer(false);
  };
  const onSubmitAnswer = (isCorrect) => {
    let score = points;
    if (isCorrect) {
      score = points + 1;
      setPoints(score);
    }
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((i) => i + 1);
    } else {
      // reset and navigate to Quiz Result send deckId & deckTitle & points & totalPoints
      reset();
      props.navigation.push("QuizResult", {
        deckId,
        points: score,
        deckTitle,
        totalPoints: questions.length,
      });
    }
  };
  const title = questions[questionIndex] ? questions[questionIndex].title : "";
  const answer = questions[questionIndex]
    ? questions[questionIndex].answer
    : "";

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
