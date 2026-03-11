import { call } from "redux-saga/effects";
import { parseJSON } from "@utils";
import Logger from "@services/logging/logger";
import { getServerPayload } from "../sdui.helpers";
import { SduiActionWithServerPayload } from "../sdui.types";
import { store as reduxStore } from "@redux/_core/store";
import { showFloatingModal } from "@components/modals/floating-modals/showFloatingModal";
import { Colours, Style } from "@styles";
import routesForRegistration from "@navigation/routes";
import { Navigation } from "@navigation/main";

export function* sduiActionShowFloatingModal({ payload }: SduiActionWithServerPayload) {
  const { data, isValid } = parseJSON(getServerPayload(payload), ["modalId", "props"]);
  const dispatch = reduxStore.dispatch;

  if (isValid) {
    const { modalId, props } = data;
    const Modal = routesForRegistration.find((route) => route.name === modalId);

    try {
      const ModalComponent = Modal.component;
      const isBottomSheet = props.modalConfig?.bottomSheet === true;

      yield call(() =>
        showFloatingModal({
          modalId,
          children: (
            <ModalComponent
              {...props}
              closeOverlay={() => Navigation.dismissAllOverlays()}
              onConfirm={props.onConfirm ? () => dispatch(props.onConfirm) : undefined}
            />
          ),
          showButton: false,
          showCloseIcon: isBottomSheet,
          paddingTop: 0,
          height: isBottomSheet ? 0 : Style.adjust(490),
          wrapperStyle: isBottomSheet
            ? { backgroundColor: Colours.neutral.white }
            : {
                backgroundColor: "transparent",
                width: Style.DEVICE_WIDTH - Style.adjust(24),
                borderRadius: 8,
              },
          overlayStyle: isBottomSheet ? undefined : { justifyContent: "center", alignItems: "center" },
        })
      );
    } catch (e) {
      yield call(() =>
        Logger.error(e, {
          location: "sduiActionShowFloatingModal",
        })
      );
    }
  }
}
