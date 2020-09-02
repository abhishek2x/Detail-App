import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

const Magic = ({ details }) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-around",
          margin: 10,
        }}
      >
        <Text style={{ fontSize: 17 }}>{details.name}</Text>
        <Text style={{ fontSize: 17 }}>{details.reg}</Text>
        <Text style={{ fontSize: 17 }}>{details.course}</Text>
        <Text style={{ fontSize: 17 }}>{details.courseId}</Text>
        <Text style={{ fontSize: 17 }}>{details.faculty}</Text>
      </View>
    );

};

export default Magic;
