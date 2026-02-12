import { call } from "redux-saga/effects";
import { parseJSON } from "@utils";
import Logger from "@services/logging/logger";
import { getServerPayload } from "../sdui.helpers";
import { SduiActionWithServerPayload } from "../sdui.types";
import { store as reduxStore } from "@redux/_core/store";
import { showFloatingModal } from "@components/modals/floating-modals/showFloatingModal";
import { Style } from "@styles";
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
          // possibly move this configs into the server side
          showButton: false,
          showCloseIcon: false,
          paddingTop: 0,
          height: Style.adjust(490),
          wrapperStyle: {
            backgroundColor: "transparent",
            width: Style.DEVICE_WIDTH - Style.adjust(24),
            borderRadius: 8,
          },
          overlayStyle: {
            justifyContent: "center",
            alignItems: "center",
          },
          // end
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
