import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, View, StatusBar, StyleSheet } from "react-native";
import { Card, Button, Icon } from "@rneui/themed";
// import { STORY } from "../dataObjects/Story";

export default function StoryCard(details) {
  return (
    <>
      <Card>
        <Card.Title>{details.title}</Card.Title>
        <Card.Divider />
        <Card.Image style={{ padding: 0 }} source={details.img} />
        <Text style={{ marginBottom: 10 }}>{details.cardText}</Text>
        <Button
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Read More"
        />
      </Card>
    </>
  );
}
