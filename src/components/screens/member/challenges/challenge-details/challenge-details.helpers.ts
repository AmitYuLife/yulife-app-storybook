export function getCardBackgroundColor(currentWorld: number) {
  switch (currentWorld) {
    case 3:
      return "rgb(255, 239, 239)";
    case 2:
      return "rgb(255, 253, 231)";
    case 0:
      return "rgb(235, 255, 244)";
    default:
      return "rgb(237, 251, 248)";
  }
}

export const data = {
  ctaLabel: "Take challenge",
  footer: "",
  loading: "Loading...",
  setUpLabel: "Set up tutorial",
};
