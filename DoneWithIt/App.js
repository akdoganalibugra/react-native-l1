import React from "react";
import { View, Text, Image } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row", // horizontal
        justifyContent: "center", // main
        alignItems: "center", // secondary
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          height: 100,
          width: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          height: 100,
          width: 100,
          top: 20,
          left: 20,
          position: "relative",
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          height: 100,
          width: 100,
        }}
      />
    </View>
  );
}
