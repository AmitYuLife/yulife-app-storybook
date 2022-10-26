import { CenteredScreenImages } from "@redux/theme/theme.reducer";

export function getStyle(currentWorld: number, yuniversalMap?: number) {
  if (yuniversalMap) {
    return {
      backgroundImage: "yuniversal_1" as CenteredScreenImages,
      textStyle: { color: "white" },
      lineColour: "white",
    };
  }

  switch (currentWorld) {
    case 3:
      return {
        backgroundImage: "challenge_mountain" as CenteredScreenImages,
        backgroundStyle: { backgroundColor: "rgb(255, 226, 230)" },
      };

    case 2:
      return {
        backgroundImage: "challenge_success_desert" as CenteredScreenImages,
        backgroundStyle: { backgroundColor: "rgb(255, 251, 205)" },
      };
    case 1:
      return {
        backgroundImage: "challenge_success_ocean" as CenteredScreenImages,
        backgroundStyle: { backgroundColor: "" },
      };
    case 0:
      return {
        backgroundImage: "challenge_success_forest" as CenteredScreenImages,
        backgroundStyle: { backgroundColor: "rgb(255, 251, 205)" },
      };

    default:
      return {
        backgroundImage: null,
        backgroundStyle: null,
      };
  }
}
