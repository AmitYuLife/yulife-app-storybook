import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  absolute: { position: "absolute", left: 0, right: 0, top: 0, bottom: 0 },
  innerWrapper: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
  svgWrapper: {
    borderRadius: 53,
    height: 109,
    overflow: "hidden",
    width: 109,
  },
  wrapper: {
    height: 200,
    width: 200,
  },
  svg: {
    alignItems: "center",
    borderRadius: 106 / 2,
    justifyContent: "center",
    overflow: "hidden",
  },
});

export const svgSpecs = {
  height: "109",
  viewBox: "0 0 212 218",
  width: "106",
};

export default styles;
