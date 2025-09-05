import type { Meta, StoryObj } from "@storybook/react";
import CarouselPathways from "./carousel-pathways";

const pathways = [
  {
    imageUrl:
      "https://img.freepik.com/free-vector/hand-drawn-apache-illustration_23-2150012166.jpg?semt=ais_hybrid&w=740&q=80",
    text: "Wellness Journey",
    onPress: () => console.log("Wellness Journey pressed"),
  },
  {
    imageUrl:
      "https://img.freepik.com/free-vector/hand-drawn-apache-illustration_23-2150012166.jpg?semt=ais_hybrid&w=740&q=80",
    text: "Fitness Goals",
    onPress: () => console.log("Fitness Goals pressed"),
  },
  {
    imageUrl:
      "https://img.freepik.com/free-vector/hand-drawn-apache-illustration_23-2150012166.jpg?semt=ais_hybrid&w=740&q=80",
    text: "Mental Health",
    onPress: () => console.log("Mental Health pressed"),
  },
  {
    imageUrl:
      "https://img.freepik.com/free-vector/hand-drawn-apache-illustration_23-2150012166.jpg?semt=ais_hybrid&w=740&q=80",
    text: "Nutrition Plan",
    onPress: () => console.log("Nutrition Plan pressed"),
  },
  {
    imageUrl:
      "https://img.freepik.com/free-vector/hand-drawn-apache-illustration_23-2150012166.jpg?semt=ais_hybrid&w=740&q=80",
    text: "Sleep Tracking",
    onPress: () => console.log("Sleep Tracking pressed"),
  },
];

const meta: Meta<typeof CarouselPathways> = {
  component: CarouselPathways,
  title: "Design System/Organisms/CarouselPathways",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/bEJ8yKPTj2aWVhNxvoZC3e/-L--Pathways?node-id=4026-21297&m=dev",
    },
  },
  args: { pathways },
};

export default meta;
type Story = StoryObj<typeof CarouselPathways>;

export const Default: Story = {
  args: {
    pathways,
  },
};
