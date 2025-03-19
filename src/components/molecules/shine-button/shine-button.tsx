import { Pressable } from "@components/molecules";
import { ReactNode, memo } from "react";
import { Box, TextTemplate } from "@atoms";
import LinearGradient from "react-native-linear-gradient";
import { StyleSheet } from "react-native";

interface IShineButtonProps {
  onPress?: () => void;
  label?: string;
  icon?: ReactNode;
}

const ShineButton = ({ onPress, label, icon }: IShineButtonProps) => {
  return (
    <Box br={20} pb={6}>
      <Box
        w="97%"
        h={"80%"}
        bottom={0}
        bg="#E7C200"
        left={"1.5%"}
        position="absolute"
        borderTopRadius={0}
        borderBottomRadius={20}
      />
      <Pressable pressedTranslation={3} enableAnimation={true} hitSlop={5} onPress={onPress}>
        <Box position="absolute" w="100%" h="100%" overflow="hidden" bg="#FFD600" br={20}>
          <LinearGradient
            start={{ x: 0.7, y: 0.25 }}
            end={{ x: 0, y: 1.0 }}
            locations={[0, 0.6, 0.6]}
            colors={["#FFD600", "#FFF4BC", "#FFD600"]}
            style={styles.gradient}
          />
        </Box>
        <Box p={12} px={25} br={20} flexDirection="row" alignItems="center" gap={12}>
          {icon}
          {label ? (
            <TextTemplate type="b2b" color="#640038">
              {label}
            </TextTemplate>
          ) : null}
        </Box>
      </Pressable>
    </Box>
  );
};

const styles = StyleSheet.create({
  gradient: { opacity: 0.5, width: "100%", height: "100%", borderRadius: 20 },
});

export default memo(ShineButton);
