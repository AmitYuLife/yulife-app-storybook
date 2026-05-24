export const isScreenStory = (title?: string, parameters?: { screenStory?: boolean }): boolean =>
  parameters?.screenStory === true ||
  ((title?.startsWith("Screens/") ?? false) && !title?.startsWith("Screens/Examples/"));
