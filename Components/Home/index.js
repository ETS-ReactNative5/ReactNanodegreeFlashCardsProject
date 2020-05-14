import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { connect } from "react-redux";
import { handleInitialData } from "../../Actions/shared";
import DeckHeader from "./DeckHeader";
function Home(props) {
  console.log("HomeScreen props", props);
  useEffect(() => {
    console.log("Hello Hooks");
    props.getInitialData();
  }, []); // in mounting only

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Object.values(props.decks)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.deckHeader]}>
            <DeckHeader deck={item} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
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
  deckHeader: {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "#bbb",
    margin: 10,
    padding: 10,
  },
});
