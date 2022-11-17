import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { ThemeProvider, Input, Icon, Button } from "react-native-elements";
import React from "react";

export default function Authentication() {
  const { height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Icon name="open-book" type="entypo" style={styles.mainIcon} size={80} />
      <Text h2 style={styles.text}>
        StoryTime Fun!
      </Text>
      <Input
        placeholder="Username"
        type="email"
        style={styles.inputField}
        leftIcon={
          <Icon name="emoticon-cool-outline" type="material-community" />
        }
      />
      <Input
        placeholder="Password"
        type="password"
        secureTextEntry
        style={styles.inputField}
        leftIcon={<Icon name="key" type="entypo" />}
      />
      <View style={styles.btnContainer}>
        <Button
          onPress={() => console.log("Sign Up button!")}
          title="Sign Up"
          loading={false}
          titleStyle={{
            marginTop: 5,
            marginRight: 10,
            marginLeft: 10,
            marginBottom: 5,
          }}
          buttonStyle={{
            backgroundColor: "rgba(111, 202, 186, 1)",
          }}
          containerStyle={{ display: "flex" }}
        />
        <Button
          onPress={() => console.log("Sign In button!")}
          title="Sign In"
          loading={false}
          titleStyle={{
            marginTop: 5,
            marginRight: 10,
            marginLeft: 10,
            marginBottom: 5,
          }}
          buttonStyle={{}}
          containerStyle={{ display: "flex" }}
        />
      </View>
      <Text
        style={{ textAlign: "center", marginTop: 50, color: "blue" }}
        onPress={() => console.log("Ya dingleberry! you forgot your password!")}
      >
        Forgot Password?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
    flex: 1,
    // backgroundColor: "orange",
  },
  mainIcon: {},
  text: {
    textAlign: "center",
    marginBottom: 100,
    display: "flex",
  },
  btnContainer: {
    justifyContent: "space-evenly",
    display: "flex",
    flexDirection: "row",
    width: '100%'
  },
  inputField: { backgroundColor: "white", display: "flex" },
});
