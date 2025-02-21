import HintPopup from "@components/molecules/hint-popup/hint-popup";
import { showTooltipPopupRelativeToView } from "@organisms/tooltip-popup/tooltip-popup.helper";
import { highlightNavbarTabReset } from "@redux/app/app.actions";
import { getHighlightedTabs } from "@redux/app/app.selectors";
import { IHighlightedTabOptions } from "@redux/app/app.types";
import { Style } from "@styles";
import { get } from "lodash";
import { RefObject, useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

interface IUsePrizeHintPopupProps {
  routeId: string;
  viewRef?: RefObject<View>;
  delay?: number;
  isEnabled?: boolean;
}

export const usePrizeHintPopup = ({ routeId, viewRef, delay, isEnabled }: IUsePrizeHintPopupProps) => {
  const highlightedTabs = useSelector(getHighlightedTabs);
  const dispatch = useDispatch();

  useEffect(() => {
    const activeTab: IHighlightedTabOptions | undefined = get(highlightedTabs, routeId);
    if (!activeTab?.tooltipHeader || !activeTab?.tooltipBody || !isEnabled) {
      return;
    }

    const popup = ({ onClose }: { onClose: () => void }) => {
      const onPopupClose = () => {
        dispatch(highlightNavbarTabReset({ tab: activeTab.tab }));
        onClose();
      };

      return (
        <HintPopup
          onPress={onPopupClose}
          hideCloseButton={true}
          title={activeTab.tooltipHeader}
          description={activeTab.tooltipBody}
          onClose={onPopupClose}
        />
      );
    };

    setTimeout(() => {
      showTooltipPopupRelativeToView({
        viewRef: viewRef,
        style: {
          maxWidth: Style.DEVICE_WIDTH / 1.5,
        },
        children: popup,
      });
    }, delay);
  }, [delay, dispatch, highlightedTabs, isEnabled, routeId, viewRef]);
};
