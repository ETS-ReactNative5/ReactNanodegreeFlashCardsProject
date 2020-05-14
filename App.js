import React from "react";
import { StyleSheet } from "react-native";
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
        <Stack.Navigator>
          <Stack.Screen
            name="MyTabs"
            component={MyTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="DeckScreen" component={DeckScreen} />
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
});
