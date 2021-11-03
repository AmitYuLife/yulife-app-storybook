import React, { memo, useContext, useMemo } from "react";
import { ContentItemHeaderBar as GqlHeader } from "@graphql/_core/schema/ContentItemHeaderBar";
import { ContentItemHeaderBar } from "@components/sdui";
import { ProductStepContext } from "../product-step.context";
import { useSelector, useDispatch } from "react-redux";
import { getSduiLoadingForKey } from "@redux/server-driven-ui/sdui.selectors";
import { useBackHandler } from "@services/hooks/useBackHandler";

type Props = GqlHeader;

export const ProductStepContentItemHeader = memo(({ onLeftIconPress, onRightIconPress, ...otherProps }: Props) => {
  const { productId, stepId } = useContext(ProductStepContext);

  const dispatch = useDispatch();
  const disabled = useSelector(getSduiLoadingForKey("__disabled"));

  const dynamicLeftIconOnPress = useMemo(() => {
    if (onLeftIconPress) {
      if (disabled) {
        return {
          type: onLeftIconPress.type,
          payload: null,
        };
      }

      return {
        type: onLeftIconPress.type,
        payload: ({ productId, stepId, serverPayload: onLeftIconPress.payload } as unknown) as string,
      };
    }

    return null;
  }, [onLeftIconPress, productId, stepId, disabled]);

  const dynamicRightIconOnPress = useMemo(() => {
    if (onRightIconPress) {
      if (disabled) {
        return {
          type: onRightIconPress.type,
          payload: null,
        };
      }

      return {
        type: onRightIconPress.type,
        payload: ({ productId, stepId, serverPayload: onRightIconPress.payload } as unknown) as string,
      };
    }

    return null;
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
      {...otherProps}
      onLeftIconPress={dynamicLeftIconOnPress}
      onRightIconPress={dynamicRightIconOnPress}
    />
  );
});
