import { memo } from "react";
import { Box } from "@atoms";
import { Colours, StyleSheet } from "@styles";
import { ParticleInstanceProps, ParticleSpawner, ParticleSpawnerDynamicCount } from "@organisms";
import { QuadStarIcon } from "@atoms/icon/quad-star-icon";

export type StarsDecorationProps = {
  /**
   * Single number - size
   * Array of 2 numbers - A random number is picked between the numbers as the size
   */
  starSize?: number | number[];

  /**
   * Dynamic amount of stars to render on screen.
   * Count will fluctuate to keep the device FPS around the specified target
   */
  dynamicStarCount?: ParticleSpawnerDynamicCount;

  /**
   * A static amount of stars to render on screen.
   * After an animation finishes a new one will spawn in its place
   */
  starCount?: number;

  /**
   * Max distance from the center the star can shoot
   */
  radius?: number;

  /**
   * Min distance from the center the star will shoot
   */
  minDistance?: number;

  /**
   * A random color is picked from the array
   */
  colors?: string[];

  /**
   * Single number - milliseconds in which the shooting animation finishes
   * Array of 2 numbers - A random number is picked between the numbers as the shooting speed
   */
  shootingSpeed?: number | [number, number];

  /**
   * Degrees to rotate the star over the animation
   */
  maxRotation?: number;

  /**
   * Fade out start [0-1]. 0 - from the start, 0.5 in the middle of the animation
   */
  fadeOutStartFraction?: number;
};

type FullStarsDecorationProps = StarsDecorationProps & {
  contentWidth: number;
  contentHeight: number;
};

const StarsDecoration = ({
  contentWidth,
  contentHeight,
  starSize = 10,
  dynamicStarCount,
  starCount = 20,
  radius = 100,
  colors = ["#FCE93D", Colours.neutral.white],
  shootingSpeed = [1000, 1400],
  minDistance = 50,
  maxRotation = 0,
  fadeOutStartFraction = 0.3,
}: FullStarsDecorationProps) => {
  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      style={StyleSheet.absoluteFillObject}
      w={contentWidth}
      h={contentHeight}
    >
      <ParticleSpawner
        particleSize={starSize}
        dynamicCount={dynamicStarCount}
        count={starCount}
        radius={radius}
        colors={colors}
        shootingSpeed={shootingSpeed}
        minDistance={minDistance}
        maxRotation={maxRotation}
        fadeOutStartFraction={fadeOutStartFraction}
      >
        <ParticleStar />
      </ParticleSpawner>
    </Box>
  );
};

const ParticleStar = ({ size, color }: Partial<ParticleInstanceProps>) => <QuadStarIcon size={size} color={color} />;

export default memo(StarsDecoration);
