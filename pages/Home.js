import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 37 }}>Home page</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Detail")}
      />
      <Button
        title="Go to Toast"
        onPress={() => navigation.navigate("Toast")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffd",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
