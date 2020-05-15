import React from "react";
import { StyleSheet, View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./Reducers/";
import middleware from "./Middlewares";
import Home from "./Components/Home";
import AddDeck from "./Components/AddDeck";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import DeckScreen from "./Components/DeckScreen";
import AddCard from "./Components/AddCard";
import Quiz from "./Components/Quiz";
import QuizResult from "./Components/QuizResult";
const Tab = createMaterialBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator barStyle={[styles.center]}>
      <Tab.Screen name="DECKS" component={Home} />
      <Tab.Screen name="AddDeck" component={AddDeck} />
    </Tab.Navigator>
  );
}
const Stack = createStackNavigator();
export default function App() {
  const store = createStore(reducer, middleware);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View styles={styles.statusBar}></View>
        <Stack.Navigator>
          <Stack.Screen
            name="MyTabs"
            component={MyTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="DeckScreen" component={DeckScreen} />
          <Stack.Screen name="AddCard" component={AddCard} />
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="QuizResult" component={QuizResult} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignContent: "center",
  },
  statusBar: { marginBottom: 20 },
});
