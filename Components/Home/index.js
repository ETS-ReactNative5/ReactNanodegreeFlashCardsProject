import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { handleInitialData } from "../../Actions/shared";

function Home(props) {
  console.log("HomeScreen props", props);
  useEffect(() => {
    console.log("Hello Hooks");
    props.getInitialData();
  }, []); // in mounting only
  const onDeckPress = () => {
    console.log("Deck pressed");
    props.navigation.push("DeckScreen");
  };
  return (
    <View style={styles.container}>
      <Text>Welcome to Decks list screen</Text>
      <Text>{JSON.stringify(props.decks)}</Text>
      <TouchableOpacity onPress={onDeckPress}>
        <Text>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
}
const mapStateToProps = ({ decks }) => ({ decks });
const mapDispatchToProps = (dispatch) => ({
  getInitialData: () => dispatch(handleInitialData()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
