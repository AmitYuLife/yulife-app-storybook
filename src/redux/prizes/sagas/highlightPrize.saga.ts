import { highlightNavbarTabs } from "@redux/app/app.actions";
import { ROUTES } from "@navigation/constants";
import { GamePrizeType } from "@graphql/__generated";
import { put } from "redux-saga/effects";
import { t } from "@locale";
import { isEmpty } from "lodash";
import { prizeTypeExplained, prizesAwarded } from "../prizes.actions";

interface PrizeTypeOption {
  tab: string;
  tooltipHeader?: string;
  tooltipBody?: string;
}

const getPrizeTypeOptions = (prize: GamePrizeType): PrizeTypeOption | undefined => {
  switch (prize) {
    case GamePrizeType.ChallengeBoost:
    case GamePrizeType.ChallengeSurge:
    case GamePrizeType.PowerUp:
      return {
        tab: ROUTES.quests,
        tooltipHeader: t("prizes.tooltips.power_up.title"),
        tooltipBody: t("prizes.tooltips.power_up.body"),
      };
    case GamePrizeType.InventoryItem:
      return {
        tab: ROUTES.yuScreen,
        tooltipHeader: t("prizes.tooltips.yumoji.title"),
        tooltipBody: t("prizes.tooltips.yumoji.body"),
      };
    case GamePrizeType.YuCoin:
      return {
        tab: ROUTES.dailySteps,
        tooltipHeader: t("prizes.tooltips.yucoin.title"),
        tooltipBody: t("prizes.tooltips.yucoin.body"),
      };
    case GamePrizeType.CoreReward:
    case GamePrizeType.Coupon:
      return {
        tab: ROUTES.purchases,
        tooltipHeader: t("prizes.tooltips.purchase.title"),
        tooltipBody: t("prizes.tooltips.purchase.body"),
      };
  }
};

export default function* highlightPrizeSaga({ payload }: ReturnType<typeof prizesAwarded>) {
  const tabsToHighlight: Partial<Record<GamePrizeType, PrizeTypeOption>> = {};

  let shownTooltipPrizeType: GamePrizeType | undefined;

  for (const prizeType of payload.prizeTypes) {
    if (tabsToHighlight[prizeType]) {
      continue;
    }

    const prizeOptions = getPrizeTypeOptions(prizeType);

    const { tab, ...copy } = prizeOptions ?? {};
    if (!tab) {
      continue;
    }

    tabsToHighlight[prizeType] = {
      tab,
      ...copy,
    };

    shownTooltipPrizeType = prizeType;
  }

  if (!isEmpty(Object.keys(tabsToHighlight))) {
    const tabsArray = Object.values(tabsToHighlight);
    yield put(
      highlightNavbarTabs({
        tabs: tabsArray,
      })
    );
  }

  if (shownTooltipPrizeType) {
    yield put(prizeTypeExplained({ prizeType: shownTooltipPrizeType }));
  }

  yield true;
}
