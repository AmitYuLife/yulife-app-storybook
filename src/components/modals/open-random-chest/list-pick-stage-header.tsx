import { GlowingSpinner, TextTemplate } from "@atoms";
import { memo } from "react";
import { Image, StyleSheet, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

interface IListPickStageHeaderProps {
  image: string;
}

const ListPickStageHeader = ({ image }: IListPickStageHeaderProps) => (
  <>
    {image ? (
      <View style={styles.container}>
        <GlowingSpinner size={220} />
        <Image resizeMode="cover" source={{ uri: image }} width={150} height={150} />
      </View>
    ) : null}
    <Animated.View entering={FadeInUp.duration(600).delay(500)}>
      <TextTemplate type="b2" color="white">
        {/* TODO: Should come from the API */}
        Select a prize to continue
      </TextTemplate>
    </Animated.View>
  </>
);

export default memo(ListPickStageHeader);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
    width: 150,
    height: 150,
  },
});
