import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./Reducers/";
import middleware from "./Middlewares";
import Home from "./Components/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
export default function App() {
  const store = createStore(reducer, middleware);
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
