import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { HorizontalNumberDisplay } from "@molecules";
import { ComponentProps, useEffect, useState } from "react";

// For inputting target in storybook
const DebouncedNumberDisplay = ({ target, ...props }: ComponentProps<typeof HorizontalNumberDisplay>) => {
  const [debouncedTarget, setDebouncedTarget] = useState(target);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTarget(target);
    }, 300);

    return () => clearTimeout(timer);
  }, [target]);

  return <HorizontalNumberDisplay {...props} target={debouncedTarget} />;
};

const meta: Meta<typeof HorizontalNumberDisplay> = {
  component: HorizontalNumberDisplay,
  title: "Design System/Molecules/HorizontalNumberDisplay",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/dM98LkoC7KPL3UQjvuaj76/Smoking-Cessation-Spec?node-id=277-26839",
    },
  },
  args: {
    disableFading: true,
  },
  argTypes: {
    fadingSettings: { table: { disable: true } },
    disableFading: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof HorizontalNumberDisplay>;

export const Default: Story = {
  render: (args) => <DebouncedNumberDisplay {...args} />,
  args: {
    target: 4,
    maxNumber: 28,
  },
};
