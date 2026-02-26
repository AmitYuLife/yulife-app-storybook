import React, { memo, useMemo, useState } from "react";
import { View } from "react-native";
import { ContentItemRowIconTextBannerFragment as IContentItemRowIconTextBanner } from "@graphql/__generated";
import { mapServerStyles } from "@components/sdui";
import InfoPanel from "@components/molecules/info-panel/info-panel";
import { useDispatch, useSelector } from "react-redux";
import { getSduiLoadingForKey } from "@redux/server-driven-ui/sdui.selectors";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { defaultSduiActionProps } from "../_utils/sduiEventActionCreator";
import { YUGI_INFO_BANNER_IMAGE } from "@ids";

export const ContentItemRowIconTextBanner = memo(
  ({
    bannerIcon,
    bannerType,
    markdown,
    styles,
    titleMarkdown,
    showCloseIcon,
    bannerButton,
    showIcon,
    containerActions,
  }: IContentItemRowIconTextBanner) => {
    const [visible, setVisible] = useState(true);
    const dispatch = useDispatch();
    const isLoading = useSelector(getSduiLoadingForKey(bannerButton?.id));

    const onClose = () => setVisible(false);

    const containerOnPress = useMemo(
      () =>
        containerActions
          ? () => {
              dispatch({
                type: containerActions.onPress.type,
                payload: {
                  id: containerActions.id,
                  serverPayload: containerActions.onPress.payload,
                },
              });
              if (containerActions.event) {
                try {
                  const payload = JSON.parse(containerActions.event.payload);

                  dispatch(
                    logMixpanelEventActionCreator(
                      payload.name || "button_pressed",
                      payload.props || defaultSduiActionProps
                    )
                  );
                } catch {}
              }
            }
          : null,
      [containerActions, dispatch]
    );

    const button = useMemo(
      () =>
        bannerButton
          ? {
              disabled: isLoading,
              isLoading,
              label: bannerButton.label,
              onPress: () => {
                dispatch({
                  type: bannerButton.onPress.type,
                  payload: {
                    id: bannerButton.id,
                    serverPayload: bannerButton.onPress.payload,
                  },
                });
                if (bannerButton.event) {
                  try {
                    const payload = JSON.parse(bannerButton.event.payload);

                    dispatch(
                      logMixpanelEventActionCreator(
                        payload.name || "button_pressed",
                        payload.props || defaultSduiActionProps
                      )
                    );
                  } catch {}
                }
              },
            }
          : null,
      [bannerButton, dispatch, isLoading]
    );

    if (!visible) {
      return null;
    }

    return (
      <View style={mapServerStyles(styles)} testID={YUGI_INFO_BANNER_IMAGE(bannerIcon.id)}>
        <InfoPanel
          markdown={markdown}
          type={bannerType}
          remoteImage={bannerIcon}
          titleMarkdown={titleMarkdown}
          button={button}
          showIcon={showIcon}
          onClose={showCloseIcon ? onClose : null}
          containerOnPress={containerOnPress}
        />
      </View>
    );
  }
);
