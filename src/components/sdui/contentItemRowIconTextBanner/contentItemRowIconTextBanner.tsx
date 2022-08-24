import React, { memo, useContext, useMemo, useState } from "react";
import { View } from "react-native";
import { ContentItemRowIconTextBanner as Props } from "@graphql/_core/schema";
import { mapServerStyles } from "@components/sdui";
import InfoPanel from "@components/molecules/info-panel/info-panel";
import { useDispatch, useSelector } from "react-redux";
import { ProductStepContext } from "@components/containers/products/product-step/product-step.context";
import { getSduiLoadingForKey } from "@redux/server-driven-ui/sdui.selectors";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { defaultSduiActionProps } from "@components/containers/products/product-step/utils/sduiEventActionCreator";

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
  }: Props) => {
    const [visible, setVisible] = useState(true);
    const dispatch = useDispatch();
    const { productId, stepId, dynamicData, isLoading: isInLoadingContext } = useContext(ProductStepContext);
    const isLoading = useSelector(getSduiLoadingForKey(bannerButton?.id)) || isInLoadingContext;

    const onClose = () => setVisible(false);

    const containerOnPress = useMemo(
      () =>
        containerActions
          ? () => {
              dispatch({
                type: containerActions.onPress.type,
                payload: {
                  id: containerActions.id,
                  productId,
                  stepId,
                  dynamicData,
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
                } catch (e) {}
              }
            }
          : null,
      [containerActions, dispatch, dynamicData, productId, stepId]
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
                    productId,
                    stepId,
                    dynamicData,
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
                  } catch (e) {}
                }
              },
            }
          : null,
      [bannerButton, dispatch, dynamicData, isLoading, productId, stepId]
    );

    if (!visible) {
      return null;
    }

    return (
      <View style={mapServerStyles(styles)}>
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
