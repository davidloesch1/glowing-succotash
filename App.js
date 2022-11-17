import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View, } from "react-native";
import { ThemeProvider, Input, Icon, Button } from "react-native-elements";
import Main from "./components/Main";
import Authentication from "./views/Authentication";
import React from "react";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Authentication />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
     }
});
