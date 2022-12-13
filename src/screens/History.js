import { View, Text } from "react-native";
import React from "react";

const History = (navigation) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingTop: 30, paddingLeft: 20, paddingBottom: 20 }}>
        <Text style={{ color: "black", fontSize: 16, fontWeight: "600" }}>
          Recent Payments{" "}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#D9D9D9",
          padding: 20,
          borderRadius: 10,
          marginHorizontal: 20,
        }}
      >
        <View style={{ flexDirection: "row", paddingBottom: 20 }}>
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Text style={{ color: "black" }}>Electricity Bill</Text>
          </View>

          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Text style={{ color: "black" }}>Rs 3000</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Text style={{ color: "black" }}>SBI</Text>
          </View>

          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Text
              style={{
                color: "black",
              }}
            >
              Rs 5000
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default History;
