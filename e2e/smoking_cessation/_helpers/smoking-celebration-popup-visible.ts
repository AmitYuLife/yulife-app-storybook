import { idVisible, idNotVisible, idVisibleAtIndex, wait } from "@navigation";
import * as ids from "@ids";

export const smokingCelebrationPopupVisible = (days: number, yucoin?: number) => async () => {
  await wait(2000)();
  await idVisible(ids.SMOKING_CELEBRATION_TITLE)();
  await idVisible(ids.SMOKING_CELEBRATION_DAYS(`Day ${days}`))();
  yucoin && days <= 28 && (await idVisible(ids.SMOKING_CELEBRATION_YUCOIN(yucoin))());
  !yucoin && days > 28 && (await idNotVisible(ids.SMOKING_CELEBRATION_YUCOIN(0))());
  days <= 28 && days > 1 && (await idVisible(ids.SMOKING_CELEBRATION_TIPS_CONTAINER)());
  days <= 28 && days > 1 && (await idVisibleAtIndex(ids.SMOKING_TIP(`day_${days}`), 1)());
  await idVisible(ids.SMOKING_CELEBRATION_CTA)();
};
