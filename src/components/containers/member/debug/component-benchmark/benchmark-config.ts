import Box from "@atoms/box/box";
import { Style } from "@styles";
import { View } from "react-native";

export const BENCHMARK_INITIAL_RENDER_COUNT = 100000;
export const BENCHMARK_SCROLL_ITEM_COUNT = 1000000;
export const BENCHMARK_PROP_UPDATE_ITERATIONS = 10000;
export const BENCHMARK_CHILDREN_UPDATE_ITERATIONS = 6000;

export const BENCHMARK_TESTABLE_COMPONENTS = [
  {
    name: "Box",
    Component: Box,
    itemHeight: 150,
    getProps: (iteration: number) => ({
      w: 100,
      mb: 10,
      gap: 21,
      br: 120,
      bg: "red",
      h: 150 + iteration,
      flexDirection: "row",
    }),
  },
  {
    name: "View",
    Component: View,
    itemHeight: 150,
    getProps: (iteration: number) => ({
      style: {
        flexDirection: "row",
        mb: Style.adjust(10),
        gap: Style.adjust(21),
        backgroundColor: "red",
        width: Style.adjust(100),
        borderRadius: Style.adjust(120),
        height: Style.adjust(150 + iteration),
      },
    }),
  },
];
