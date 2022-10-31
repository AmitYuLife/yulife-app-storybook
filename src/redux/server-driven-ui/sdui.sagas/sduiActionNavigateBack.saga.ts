import { getYuScreenProductSlots } from "@graphql/yuscreen";
import { getYuScreen } from "@graphql/yuscreen/getYuScreen.gql";
import { MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { getRouteState } from "@redux/app/app.selectors";
import { getUserFeatures } from "@redux/user/user.selectors";
import { Navigation } from "react-native-navigation";
import { call, select, all, put } from "redux-saga/effects";
import { parseJSON, getServerPayload } from "../sdui.helpers";
import { SduiActionWithServerPayload } from "../sdui.types";

export function* sduiActionNavigateBackSaga({ payload }: SduiActionWithServerPayload) {
  const currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);
  const userFeatures: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);

  const onExit = () => Navigation.pop(currentRoute);

  const {
    isValid,
    data: { dispatchActions = [], ...data },
  } = parseJSON(getServerPayload(payload), ["title", "message", "cancelLabel", "confirmLabel"]);

  try {
    // update YuScreen slots incase any journey progression has changed
    const updateYuScreen = userFeatures.yuScreenV4 ? getYuScreen : getYuScreenProductSlots;
    yield call(updateYuScreen);

    // Dispatch additional actions supplied by the server
    if (dispatchActions.length) {
      yield all(dispatchActions.map((dispatchAction: { type: string }) => put(dispatchAction)));
    }
  } catch (e) {
    // log
  }

  if (isValid) {
    const onPressSecondary = () => Navigation.dismissModal(MODALS.generic);
    const onPress = () => {
      onExit();
      onPressSecondary();
    };

    yield call(() =>
      showYuModal({
        component: {
          id: MODALS.generic,
          name: MODALS.generic,
          passProps: {
            heading: data.title,
            subheading: data.message,
            ctaLabel: data.confirmLabel,
            ctaLabelSecondary: data.cancelLabel,
            onPress,
            onPressSecondary,
          },
        },
      })
    );

    return;
  }

  yield call(onExit);
}
