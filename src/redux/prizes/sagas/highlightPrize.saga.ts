import { highlightNavbarTabs } from "@redux/app/app.actions";
import { ROUTES } from "@navigation/constants";
import { prizeTypeExplained, prizesAwarded } from "../prizes.actions";
import { GamePrizeType } from "@graphql/__generated";
import { put, select } from "redux-saga/effects";
import { getExplainedPrizeTypes } from "../prizes.selectors";
import { t } from "@locale";
import { isEmpty } from "lodash";

interface PrizeTypeOption {
  tab: string;
  tooltipHeader?: string;
  tooltipBody?: string;
}

const getPrizeTypeOptions = (prize: GamePrizeType): PrizeTypeOption => {
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
      return {
        tab: ROUTES.purchases,
        tooltipHeader: t("prizes.tooltips.purchase.title"),
        tooltipBody: t("prizes.tooltips.purchase.body"),
      };
  }
};

export default function* highlightPrizeSaga({ payload }: ReturnType<typeof prizesAwarded>) {
  const tabsToHighlight: Partial<Record<GamePrizeType, PrizeTypeOption>> = {};
  const explainedPrizeTypes: Partial<Record<GamePrizeType, boolean>> = yield select(getExplainedPrizeTypes);

  // TODO: Multiple prize support - currently only 1 prize is claimable at once so this is okay)
  let shownTooltipPrizeType: GamePrizeType;

  for (const prizeType of payload.prizeTypes) {
    if (tabsToHighlight[prizeType]) {
      continue;
    }

    const { tab, ...copy } = getPrizeTypeOptions(prizeType) ?? {};
    const showTooltip = !explainedPrizeTypes[prizeType] && !shownTooltipPrizeType;

    if (!tab) {
      continue;
    }

    tabsToHighlight[prizeType] = {
      tab,
      ...(showTooltip ? copy : {}),
    };

    if (showTooltip) {
      shownTooltipPrizeType = prizeType;
    }
  }

  if (!isEmpty(Object.keys(tabsToHighlight))) {
    yield put(
      highlightNavbarTabs({
        tabs: Object.values(tabsToHighlight),
      })
    );
  }

  if (shownTooltipPrizeType) {
    yield put(prizeTypeExplained({ prizeType: shownTooltipPrizeType }));
  }

  yield true;
}
