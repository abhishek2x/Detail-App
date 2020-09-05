import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function Detail({ navigation }) {
  const [display, setDisplay] = useState(false);

  const displayhandler = () => {
    setDisplay(!display);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 27 }}>Toast and Logs Messages</Text>
      <View
        style={{
          width: 450,
          height: 400,
          marginTop: 40,
          backgroundColor: "skyblue",
        }}
      >
        {display && (
          <Text style={{ fontSize: 17 }}>You clicked the message</Text>
        )}
        {!display && <Text></Text>}
        <Button title="Display" onPress={displayhandler} />
      </View>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffd",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Detail;