import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider, Input, Icon, Button } from "react-native-elements";
import Main from "./src/components/Main";
import Authentication from "./src/screens/Authentication";

import React from "react";

export default function App() {
  return (
    <SafeAreaProvider style={styles.root}>
      <ThemeProvider>
        <Authentication />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 , backgroundColor: "#F1F7ED"},

});
