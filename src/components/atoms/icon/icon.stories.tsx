import React from "react";
import IconComponent from "./index";
import { Text, View, StyleSheet } from "react-native";
import { Meta, StoryObj } from "@storybook/react";

const IconographyComponent = () => {
  const icons = Object.values(IconComponent);
  return (
    <>
      {icons.map((Icon, index) => {
        const name = Icon.name || (Icon as any)?.displayName;
        return (
          <View
            key={`${name}-${index}`}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, flexBasis: "auto" }}
          >
            <Icon
              checked={true}
              label={name}
              isDoneToday={false}
              isWinner={false}
              isDraw={false}
              position={1}
              wrapperStyle={styles.wrapperStyle}
              color="blue"
              colour="blue"
            />
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>{name}</Text>
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "flex-start",
  },
  wrapperStyle: {},
});

const meta: Meta<typeof IconographyComponent> = {
  component: IconographyComponent,
  title: "Design System/Atoms/Iconography",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },

  decorators: [
    (Story: any) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%",
          gap: 40,
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {},
};

export default meta;
type Story = StoryObj<typeof IconographyComponent>;

export const Default: Story = {
  args: {},
  storyName: "Iconography",
  name: "Iconography",
};
