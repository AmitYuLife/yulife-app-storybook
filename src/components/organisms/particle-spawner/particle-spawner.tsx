import { memo, ReactElement } from "react";
import { toArray } from "@utils/array";
import { Box } from "@atoms";
import { Particle, ParticleProps } from "./subcomponents/particle";

type ParticleSpawnerProps = Pick<
  ParticleProps,
  "radius" | "minDistance" | "colors" | "shootingSpeed" | "maxRotation"
> & {
  /**
   * Particle instance
   */
  children: ReactElement;

  /**
   * Single number - Particle size
   * Array of 2 numbers - A random number is picked between the numbers as the particle size
   */
  particleSize: number | number[];

  /**
   * Amount of particles to spawn
   */
  count: number;
};

const ParticleSpawner = ({
  children,
  particleSize,
  radius,
  colors,
  count,
  shootingSpeed = 1000,
  minDistance,
  maxRotation,
}: ParticleSpawnerProps) => {
  const getDelay = () => Math.random() * Math.max(...toArray(shootingSpeed));

  const particles = Array.from({ length: count }, (_, i) => (
    <Particle
      key={i}
      particleInstance={children}
      size={particleSize}
      colors={colors}
      shootingSpeed={shootingSpeed}
      minDistance={minDistance}
      radius={radius}
      maxRotation={maxRotation}
      delay={getDelay()}
    />
  ));

  return (
    <Box w={radius} h={radius}>
      {particles}
    </Box>
  );
};

export default memo(ParticleSpawner);
