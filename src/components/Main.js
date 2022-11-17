import { useState } from "react";
import { View, StatusBar, StyleSheet, FlatList } from "react-native";
import { STORIES, STORY } from "../../dataObjects/Story";
import StoryCard from "./StoryCard";

export default function Main() {
  const [hidden, setHidden] = useState(false);

  const storyCard = ({ details }) => <StoryCard details={details} />;

  return (
    <>
      <StatusBar backgroundColor="#7CA982" hidden={hidden} barStyle="default" />
      <View style={styles.container}>
        <FlatList
          data={STORIES}
          renderItem={storyCard}
          keyExtractor={(item) => item.id}
          // extraData={}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
  },
  text: { fontSize: 10 },
});
