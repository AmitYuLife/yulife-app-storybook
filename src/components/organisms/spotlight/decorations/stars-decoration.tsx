import { memo } from "react";
import { Box } from "@atoms";
import { Colours } from "@styles";
import { StyleSheet } from "react-native";
import { ParticleSpawner } from "@organisms";
import { ParticleInstanceProps } from "@organisms/particle-spawner/subcomponents/particle";
import { QuadStarIcon } from "@atoms/icon/quad-star-icon";

export type StarsDecorationProps = {
  /**
   * Single number - size
   * Array of 2 numbers - A random number is picked between the numbers as the size
   */
  starSize?: number | number[];

  /**
   * Amount of stars to render on screen.
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
};

type FullStarsDecorationProps = StarsDecorationProps & {
  contentWidth: number;
  contentHeight: number;
};

const StarsDecoration = ({
  contentWidth,
  contentHeight,
  starSize = 10,
  starCount = 20,
  radius = 100,
  colors = ["#FCE93D", Colours.neutral.white],
  shootingSpeed = [1000, 1400],
  minDistance = 50,
  maxRotation = 0,
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
        count={starCount}
        radius={radius}
        colors={colors}
        shootingSpeed={shootingSpeed}
        minDistance={minDistance}
        maxRotation={maxRotation}
      >
        <ParticleStar />
      </ParticleSpawner>
    </Box>
  );
};

const ParticleStar = ({ size, color }: Partial<ParticleInstanceProps>) => <QuadStarIcon size={size} color={color} />;

export default memo(StarsDecoration);
