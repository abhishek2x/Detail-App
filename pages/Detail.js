import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Boxes from "../src/Boxes";
import Magic from "../src/Magic";

function Detail({ navigation }) {
  const details = {
    name: "Abhishek Srivastava",
    reg: "19BCE10071",
    course: "Mobile App Development",
    courseId: "CSE3002 - C21 + C22 + TC2",
    faculty: "Dr. Sathish kumar L",
  };

  const [display, setDisplay] = useState(false);
  const displayHandler = () => {
    setDisplay(!display);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 27 }}>Details App</Text>
      <View style={{ flex: 1, flexDirection: "row", marginTop: 40 }}>
        <View
          style={{ width: 250, height: 500, backgroundColor: "powderblue" }}
        >
          <Boxes />
        </View>
        <View style={{ width: 250, height: 500, backgroundColor: "skyblue" }}>
          {display && <Magic details={details} />}
        </View>
      </View>
      {/* <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Detail")}
      /> */}
      <Button title="Display Details" onPress={displayHandler} />
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
