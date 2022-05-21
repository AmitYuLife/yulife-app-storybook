import React, { ComponentProps, memo, useContext, useMemo } from "react";
import { ContentItemHeaderBar as GqlHeader } from "@graphql/_core/schema/ContentItemHeaderBar";
import { ContentItemHeaderBar } from "@components/sdui";
import { ProductStepContext } from "../product-step.context";
import { useSelector, useDispatch } from "react-redux";
import { getSduiLoadingForKey } from "@redux/server-driven-ui/sdui.selectors";
import { useBackHandler } from "@hooks";
import { ProductStepAction } from "@redux/server-driven-ui/sdui.types";

type Props = GqlHeader;

export const ProductStepContentItemHeader = memo(
  ({ onLeftIconPress, onRightIconPress, leftIcon, rightIcon, logo, heading }: Props) => {
    const { productId, stepId, isLoading } = useContext(ProductStepContext);

    const dispatch = useDispatch();
    const disabled = useSelector(getSduiLoadingForKey("__disabled")) || isLoading;

    const dynamicLeftIconOnPress = useMemo(() => {
      if (disabled || !onLeftIconPress) {
        return null;
      }

      return {
        type: onLeftIconPress.type,
        payload: { productId, stepId, serverPayload: onLeftIconPress.payload },
      } as ProductStepAction;
    }, [onLeftIconPress, productId, stepId, disabled]);

    const dynamicRightIconOnPress = useMemo(() => {
      if (disabled || !onRightIconPress) {
        return null;
      }

      return {
        type: onRightIconPress.type,
        payload: { productId, stepId, serverPayload: onRightIconPress.payload },
      } as ProductStepAction;
    }, [onRightIconPress, productId, stepId, disabled]);

    useBackHandler(() => {
      // go back
      if (dynamicLeftIconOnPress) {
        dispatch(dynamicLeftIconOnPress);
        return true;
      }

      // if can't go back, close
      if (dynamicRightIconOnPress) {
        dispatch(dynamicRightIconOnPress);
      }

      // if neither - :pepe-f:
      return true;
    });

    return (
      <ContentItemHeaderBar
        heading={heading}
        logo={logo as "yulife"}
        leftIcon={leftIcon as ComponentProps<typeof ContentItemHeaderBar>["leftIcon"]}
        rightIcon={rightIcon as ComponentProps<typeof ContentItemHeaderBar>["rightIcon"]}
        onLeftIconPress={dynamicLeftIconOnPress}
        onRightIconPress={dynamicRightIconOnPress}
      />
    );
  }
);
