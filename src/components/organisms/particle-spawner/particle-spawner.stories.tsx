import type { Meta, StoryObj } from "@storybook/react-webpack5";
import ParticleSpawner from "./particle-spawner";
import { QuadStarIcon } from "@atoms/icon/quad-star-icon";

export const ParticleInstance = ({ color, size }: { color: string; size: number }) => (
  <QuadStarIcon size={size} color={color} />
);

const meta: Meta<typeof ParticleSpawner> = {
  title: "Design System/Organisms/Particle Spawner",
  component: ParticleSpawner,
  tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      <div style={{ height: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
};

export default meta;

type Story = StoryObj<typeof ParticleSpawner>;

export const Default: Story = {
  args: {
    children: <ParticleInstance color="#ff0000" size={8} />,
    particleSize: 8,
    radius: 200,
    colors: ["#ff0000"],
    count: 20,
    shootingSpeed: 1200,
  },
};

export const MultiColorParticles: Story = {
  args: {
    children: <ParticleInstance color="#ffffff" size={8} />,
    particleSize: 8,
    radius: 200,
    colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00"],
    count: 30,
    shootingSpeed: [800, 1600],
  },
};

export const RandomSizeParticles: Story = {
  args: {
    children: <ParticleInstance color="#ffffff" size={8} />,
    particleSize: [6, 10, 14],
    radius: 220,
    colors: ["#00d1ff", "#ff2d55"],
    count: 25,
    shootingSpeed: [500, 1500],
  },
};

export const SpinningParticles: Story = {
  args: {
    children: <ParticleInstance color="#ff9500" size={10} />,
    particleSize: 10,
    radius: 180,
    colors: ["#ff9500"],
    count: 15,
    shootingSpeed: 1000,
    maxRotation: 360,
  },
};

export const DenseSlowParticles: Story = {
  args: {
    children: <ParticleInstance color="#ffffff" size={6} />,
    particleSize: 6,
    radius: 250,
    count: 50,
    shootingSpeed: [2000, 3000],
    minDistance: 50,
  },
};
