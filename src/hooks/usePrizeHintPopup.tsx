import HintPopup from "@components/molecules/hint-popup/hint-popup";
import { showTooltipPopupRelativeToView } from "@organisms/tooltip-popup/tooltip-popup.helper";
import { highlightNavbarTabReset } from "@redux/app/app.actions";
import { getHighlightedTabs, getModalState } from "@redux/app/app.selectors";
import { IHighlightedTabOptions } from "@redux/app/app.types";
import { addPrizeHintToQueue, clearCurrentPrizeHint } from "@redux/prizes/prizes.actions";
import { getCurrentPrizeHint } from "@redux/prizes/prizes.selectors";
import { IPrizeHintPopup } from "@redux/prizes/prizes.types";
import { Style } from "@styles";
import { get } from "lodash";
import { RefObject, useEffect, useRef } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

interface IUsePrizeHintPopupProps {
  routeIds: string[];
  viewRef?: RefObject<View>;
  isEnabled?: boolean;
  delay?: number;
}

export const usePrizeHintPopup = ({ routeIds, viewRef, isEnabled, delay = 200 }: IUsePrizeHintPopupProps) => {
  const dispatch = useDispatch();
  const isMounted = useRef(true);
  const activeModal = useSelector(getModalState);
  const activeModalRef = useRef<string | null>(null);
  const popupShownRef = useRef<string | null>(null);
  const highlightedTabs = useSelector(getHighlightedTabs);
  const currentPrizeHint = useSelector(getCurrentPrizeHint);

  useEffect(() => {
    activeModalRef.current = activeModal;
  }, [activeModal]);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (!isEnabled || !routeIds || !isMounted.current) {
      return;
    }

    const tabsWithOurFilter = routeIds
      .map((screen) => {
        const tab = get(highlightedTabs, screen);
        return tab;
      })
      .filter(Boolean) as IHighlightedTabOptions[];

    const activeTab: IHighlightedTabOptions | undefined = tabsWithOurFilter?.[0];

    if (!activeTab?.tooltipHeader || !activeTab?.tooltipBody) {
      return;
    }

    const hint: IPrizeHintPopup = {
      routeIds,
      id: activeTab.tab,
      tab: activeTab,
    };

    dispatch(addPrizeHintToQueue({ hint }));
  }, [dispatch, highlightedTabs, isEnabled, routeIds, viewRef]);

  useEffect(() => {
    if (!currentPrizeHint || !isEnabled || !isMounted.current) {
      return;
    }

    const hasMatchingRoute = currentPrizeHint.routeIds.some((route) => routeIds.includes(route));
    const isAlreadyShown = popupShownRef.current && popupShownRef.current === currentPrizeHint.id;
    const activeTab = currentPrizeHint.tab;
    const hasTooltipContent = activeTab?.tooltipHeader && activeTab?.tooltipBody;

    if (!hasMatchingRoute || isAlreadyShown || !hasTooltipContent) {
      return;
    }

    const popup = ({ onClose }: { onClose: () => void }) => {
      const onPopupClose = () => {
        if (!isMounted.current) {
          return;
        }

        popupShownRef.current = null;

        dispatch(highlightNavbarTabReset({ tab: activeTab.tab }));
        dispatch(clearCurrentPrizeHint());
        onClose();
      };

      return (
        <HintPopup
          onPress={onPopupClose}
          hideCloseButton={true}
          title={activeTab.tooltipHeader}
          buttonTranslationKey="labels.cta.got_it"
          description={activeTab.tooltipBody}
          onClose={onPopupClose}
        />
      );
    };

    setTimeout(() => {
      if (!isMounted.current) {
        return;
      }

      // Don't show if there's already another popup open
      if (popupShownRef.current || activeModalRef.current) {
        return;
      }

      popupShownRef.current = currentPrizeHint.id;

      showTooltipPopupRelativeToView({
        viewRef: viewRef,
        style: {
          maxWidth: Style.DEVICE_WIDTH / 1.5,
        },
        children: popup,
      });
    }, delay);
  }, [currentPrizeHint, dispatch, isEnabled, routeIds, viewRef, delay]);
};
