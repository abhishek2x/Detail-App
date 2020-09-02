import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

const Boxes = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        margin: 10,
      }}
    >
      <Text style={{ fontSize: 17 }}>Name</Text>
      <Text style={{ fontSize: 17 }}>Registration Number</Text>
      <Text style={{ fontSize: 17 }}>Course</Text>
      <Text style={{ fontSize: 17 }}>Course ID</Text>
      <Text style={{ fontSize: 17 }}>Faculty</Text>
    </View>
  );
};

export default Boxes;
