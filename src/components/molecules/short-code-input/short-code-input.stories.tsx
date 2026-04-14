import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useState } from "react";
import { Box } from "@atoms";
import ShortCodeInput from "./short-code-input";

const meta: Meta<typeof ShortCodeInput> = {
  component: ShortCodeInput,
  title: "Design System/Molecules/ShortCodeInput",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/4tvQWEu6I2nmPKK8eSVtOM/YuLife-App---Login--Spec-?node-id=151-3109",
    },
  },
  decorators: [
    (Story) => (
      <Box ph={30} pt={40} style={{ width: 375 }}>
        <Story />
      </Box>
    ),
  ],
  render: (args) => {
    const [value, setValue] = useState(args.value ?? "");
    return <ShortCodeInput {...args} value={value} onChange={setValue} />;
  },
};

export default meta;
type Story = StoryObj<typeof ShortCodeInput>;

export const Empty: Story = {
  args: {
    value: "",
  },
};

export const PartiallyFilled: Story = {
  args: {
    value: "AD6",
  },
};

export const Full: Story = {
  args: {
    value: "AD69BZ",
  },
};
