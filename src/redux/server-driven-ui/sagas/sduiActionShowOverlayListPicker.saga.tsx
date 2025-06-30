import React from "react";
import { store } from "../../_core/store";
import { call } from "redux-saga/effects";
import { parseJSON } from "@utils";
import Logger from "@services/logging/logger";
import { getServerPayload } from "../sdui.helpers";
import { SduiActionWithServerPayload } from "../sdui.types";
import { ListPicker } from "@molecules";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";
import { SduiAction } from "@graphql/__generated";

type Item = {
  onPress: SduiAction;
  value: number | string;
  label: string;
};

/**
 * TODO ISA-339: We shouldn't be importing components in redux, it's an anti-pattern.
 */

export function* sduiActionShowOverlayListPicker({ payload }: SduiActionWithServerPayload) {
  const { data, isValid } = parseJSON(getServerPayload(payload));

  if (isValid && data?.items?.length && data?.title) {
    try {
      const items = data.items.map((i: Item) => ({
        ...i,
        onPress: () => {
          Navigation.dismissOverlay(MODALS.blurredOverlay);
          store.dispatch(i.onPress);
        },
      }));
      const children = <ListPicker instruction={data.title} items={items} />;
      yield call(() => Navigation.showOverlayWithChild({ children }));
    } catch (e) {
      yield call(() =>
        Logger.error(e, {
          sdui: true,
          location: "sduiActionShowOverlayListPicker",
        })
      );
    }
  }
}
