import { CenteredScreenImages } from "@atoms/centred-screen/centred-screen";

export function getStyle(currentWorld: number) {
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
