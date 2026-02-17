import { navigation } from "@utils";

export const { idVisible, textVisible, textNotVisible, multipleTextVisible } = navigation.common;

export const feedbackFormVisible = (title: string) => async () => {
  await new Promise((res) => setTimeout(res, 3000));

  await device.disableSynchronization();
  try {
    await waitFor(element(by.text(title)))
      .toBeVisible()
      .withTimeout(15000);
  } finally {
    await device.enableSynchronization();
  }
  await new Promise((res) => setTimeout(res, 1000));
};
