import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Draggable from "./draggable";
import { View } from "react-native";
import { useSharedValue } from "react-native-reanimated";

const DraggableWithSharedValue = (args: React.ComponentProps<typeof Draggable>) => {
  const left = useSharedValue(args.defaultIndex * args.sectionWidth + args.minOffsetX);
  return <Draggable {...args} left={left} />;
};

const meta: Meta<typeof Draggable> = {
  component: Draggable,
  decorators: [
    (Story) => (
      <View style={{ width: 300, height: 300, backgroundColor: "green" }}>
        <Story />
      </View>
    ),
  ],
  title: "Design System/Atoms/Draggable",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {
    children: <View style={{ height: 48, width: 48, backgroundColor: "red" }} />,
    minOffsetX: 24,
    maxOffsetX: 300,
    sectionWidth: 50,
    breakpoints: [],
    defaultIndex: 2,
    handleWidth: 24,
  },
};

export default meta;
type Story = StoryObj<typeof Draggable>;

export const Default: Story = {
  render: (args) => <DraggableWithSharedValue {...args} />,
};
