import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { handleAddQuestion } from "../Actions/shared";
import { CommonActions } from "@react-navigation/native";

function AddCard(props) {
  const { deckId } = props.route.params;
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const onCreateCard = () => {
    if (question && answer) {
      props.dispatch(handleAddQuestion({ title: question, answer }, deckId));
      props.navigation.dispatch(CommonActions.goBack({ key: "DeckScreen" }));
    }
  };
  return (
    <View style={[styles.container]}>
      <TextInput
        placeholder="Question"
        onChangeText={(text) => setQuestion(text)}
      />
      <TextInput
        placeholder="Answer"
        onChangeText={(text) => setAnswer(text)}
      />
      <TouchableOpacity onPress={onCreateCard}>
        <Text>Create Card</Text>
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
export default connect()(AddCard);
