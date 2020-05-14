import React from "react";
import { View, Text } from "react-native";
export default function DeckHeader(props) {
  const { title, questions } = props.deck;
  return (
    <View>
      <Text>{title}</Text>
      <Text>{questions.length} Cards</Text>
    </View>
  );
}
