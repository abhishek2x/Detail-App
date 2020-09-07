import React, { Component } from "react";
import DropdownMenu from "react-native-dropdown-menu";
import { View, Text } from "react-native";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  render() {
    var data = [["Home", "Detail", "Toast"]];
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <DropdownMenu
          style={{ flex: 1 }}
          bgColor={"white"}
          tintColor={"#666666"}
          activityTintColor={"green"}
          handler={(selection, row) =>
            this.setState({ text: data[selection][row] })
          }
          data={data}
        />
      </View>
    );
  }
}

export default Navbar;
