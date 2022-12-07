import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Button from "../components/Button";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import { useState } from "react";
import Liability from "./Liability";

const CategoryPg = ({ navigation }) => {
  var radio_props = [
    { label: "💰Chits", value: 0 },
    { label: "💰Installment", value: 1 },
    { label: "💰loans ", value: 2 },
    { label: "🧾bills", value: 3 },
  ];
  const [value, setValue] = useState(0);
  const [value3Index, setvalue3Index] = useState(0);
  let pagename = "Liability";
  // let pagename = "Liability";
  // const [pagename, setPagename] = useState("Liability");
  // const changePgname = (i) => {
  //   // console.log("Button" + i + "Pressed!");
  //   if (i === 3) {
  //     setPagename((pagename) => (pagename = "Bills"));
  //     // console.log("Pagename is now:" + pagename);
  //     // navigation.navigate(pagename);
  //   } else {
  //     setPagename((pagename) => (pagename = "Liability"));
  //     // console.log("Pagename is now:" + pagename);
  //   }
  //   // setPagename((pagename) => p)
  // };
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.text1}>Choose your category</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.chit}>
          {/* <Text style={styles.text2}>💰 Chits</Text> */}
          {/* <RadioForm
            radio_props={radio_props}
            // initial={0}
            labelHorizontal={true}
            formHorizontal={false}
            buttonColor={"#02C3BD"}
            buttonInnerColor={"#02C3BD"}
            buttonOuterColor={"02C3BD"}
            buttonSize={15}
            animation={true}
            onPress={() => setValue(value)}
          /> */}

          <RadioForm formHorizontal={false} animation={true}>
            {/* To create radio buttons, loop through your array of options */}
            {radio_props.map((obj, i) => (
              <RadioButton labelHorizontal={true} key={i}>
                {/*  You can set RadioButtonLabel before RadioButtonInput */}

                <View
                  style={{
                    flex: 1,
                    paddingHorizontal: 4,
                    paddingVertical: 15,
                  }}
                >
                  <RadioButtonLabel
                    obj={obj}
                    index={i}
                    labelHorizontal={true}
                    onPress={() => setvalue3Index(i)}
                    labelStyle={{
                      fontSize: 20,
                      color: "#2ecc71",
                      textAlign: "left",
                    }}
                    labelWrapStyle={{}}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "flex-end",
                  }}
                >
                  <RadioButtonInput
                    obj={obj}
                    index={i}
                    isSelected={value3Index === i}
                    onPress={() => {
                      // changePgname(i);
                      setvalue3Index(i);
                      i === 3 ? (pagename = "Bills") : null;
                      navigation.navigate(pagename);
                    }}
                    borderWidth={1}
                    buttonInnerColor={"#e74c3c"}
                    buttonOuterColor={value3Index === i ? "#2196f3" : "#000"}
                    buttonSize={10}
                    buttonOuterSize={20}
                    buttonStyle={{}}
                    buttonWrapStyle={{ flex: 1 }}
                  />
                </View>
              </RadioButton>
            ))}
          </RadioForm>
        </View>

        {/* <View style={styles.installment}>
          <Text style={styles.text3}>💰 Installment</Text>
        </View>

        <View style={styles.loan}>
          <Text style={styles.text4}>💰 loans </Text>
        </View>

        <View style={styles.bills}>
          <Text style={styles.text5}>🧾 Bills</Text>
        </View> */}
      </View>
      <View style={styles.container3}>
        {/* <Button
          onPress={() => navigation.navigate({ name: pagename })}
          navigation={navigation}
          title="Continue"
        /> */}
        {/* <Text style={styles.text3}>CategoryPg</Text> */}
      </View>
    </View>
  );
};

export default CategoryPg;

const styles = StyleSheet.create({
  container: { flex: 1 },
  container1: { flex: 1, alignItems: "center", justifyContent: "center" },
  container2: { flex: 3, paddingHorizontal: 30 },
  container3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  text1: { color: "black", opacity: 0.8, fontSize: 28, fontWeight: "700" },
  text2: { color: "black", fontSize: 18, fontWeight: "700", padding: 10 },
  text3: { color: "black", fontSize: 18, fontWeight: "700" },
  text4: { color: "black", fontSize: 18, fontWeight: "700" },
  text5: { color: "black", fontSize: 18, fontWeight: "700" },

  chit: {
    // flexDirection: "row",
    backgroundColor: "#D9D9D9",
    padding: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  loan: {
    flexDirection: "row",
    backgroundColor: "#D9D9D9",
    padding: 10,
    paddingHorizontal: 10,
  },
  installment: {
    flexDirection: "row",
    backgroundColor: "#D9D9D9",
    padding: 10,
    paddingHorizontal: 10,
  },
  bills: {
    flexDirection: "row",
    backgroundColor: "#D9D9D9",
    padding: 10,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
