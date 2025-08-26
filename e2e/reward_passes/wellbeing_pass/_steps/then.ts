import { navigation } from "@utils";

export const { textVisible, idVisible } = navigation.common;

export const assertMultipleTextsVisible = (content: string[]) => async () => {
  for (const text of content) {
    await textVisible(text)();
  }
};
