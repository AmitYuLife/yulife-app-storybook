import { navigation } from "@utils";

export const assertMultipleTextsVisible = (content: string[]) => async () => {
  for (const text of content) {
    await navigation.common.textVisible(text)();
  }
};
