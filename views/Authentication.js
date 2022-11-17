import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider, Input, Icon, Button } from "react-native-elements";
import React from "react";

export default function Authentication() {
  return (
    <View style={styles.container}>
      <Icon name="open-book" type="entypo" size={100} style={styles.mainIcon} />
      <Text h2 style={styles.text}>StoryTime Fun!</Text>
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
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    flex: 1,
    // backgroundColor: "orange",
  },
  mainIcon: {
    marginBottom: 10,
  },
  text: {
    textAlign: "center",
    marginBottom: 100,

    // display: "flex",
  },
  btnContainer: {
    justifyContent: "space-evenly",
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "red",
  },
  // inputField: { backgroundColor: "green" },
});
