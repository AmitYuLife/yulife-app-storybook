import { navigation } from "@utils";

export const { textVisible, idVisible } = navigation.common;

export const onFAQPage = (content: string[]) => async () => {
  for (const text of content) {
    await textVisible(text)();
  }
};
