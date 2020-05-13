import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { handleInitialData, handleAddQuestion } from "../../Actions/shared";
import { handleAddDeck } from "../../Actions/decks";

function Home(props) {
  useEffect(() => {
    console.log("Hello Hooks");
    const testRedux = async () => {
      let t = await props.dispatch(handleInitialData());
      t = await props.dispatch(handleAddDeck("deck0"));
      t = await props.dispatch(
        handleAddQuestion(
          { title: "q0", answer: "ans0" },
          "6e2ab6b0-9565-11ea-b3d9-bf304f1d6b03"
        )
      );
    };
    testRedux();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}
export default connect()(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
