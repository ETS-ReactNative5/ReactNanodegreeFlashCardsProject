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

function Quiz(props) {
  const { deckId } = props.route.params;

  return (
    <View style={[styles.container]}>
      <Text>Quiz on {deckId}</Text>
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
export default connect()(Quiz);
