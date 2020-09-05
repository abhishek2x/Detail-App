import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Toast from "./pages/Toast";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />

        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ title: "Details " }}
        />

        <Stack.Screen
          name="Toast"
          component={Toast}
          options={{ title: "Toast " }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
