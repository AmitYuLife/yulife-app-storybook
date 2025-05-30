import { memo, ReactElement, useMemo } from "react";
import { toArray } from "@utils/array";
import { Box } from "@atoms";
import { Particle, ParticleProps } from "./subcomponents/particle";
import { useFrameAdjuster } from "@hooks";

export type ParticleSpawnerDynamicCount = {
  initialCount?: number; // Defaults to minCount
  minCount?: number; // Defaults to 0
  maxCount?: number; // Defaults to initial value
  targetFps: number;
  fpsDelta?: number; // Allow the fps to fluctuate by this value, default 3
};

export type ParticleSpawnerProps = Pick<
  ParticleProps,
  "radius" | "minDistance" | "colors" | "shootingSpeed" | "maxRotation" | "fadeOutStartFraction"
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
   * Dynamically set the particles count based on device FPS
   */
  dynamicCount?: ParticleSpawnerDynamicCount;

  /**
   * Amount of particles to spawn
   * If dynamicCount is absent, count is used, default - 10
   */
  count?: number;
};

const ParticleSpawner = ({
  children,
  particleSize,
  radius,
  colors,
  count: countParam = 10,
  dynamicCount,
  shootingSpeed = 1000,
  minDistance,
  maxRotation,
  fadeOutStartFraction,
}: ParticleSpawnerProps) => {
  const getDelay = () => Math.random() * Math.max(...toArray(shootingSpeed));

  const frameAdjusterProps = useMemo(() => {
    const dynamicCountInitialValue = dynamicCount?.initialCount ?? dynamicCount?.minCount ?? 0;

    return dynamicCount
      ? {
          initialValue: dynamicCountInitialValue,
          targetFps: dynamicCount.targetFps,
          fpsDelta: dynamicCount.fpsDelta,
          minValue: dynamicCount.minCount,
          maxValue: dynamicCount.maxCount ?? dynamicCountInitialValue,
        }
      : {
          initialValue: countParam,
          minValue: countParam,
          maxValue: countParam,
        };
  }, [dynamicCount, countParam]);

  const count = useFrameAdjuster(frameAdjusterProps);

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
      fadeOutStartFraction={fadeOutStartFraction}
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
