import { ComponentProps, memo, useCallback, useMemo } from "react";
import { useSduiOnChange } from "../_hooks/useSduiOnChange";
import { LikertScale } from "@components/molecules";
import { View } from "react-native";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { SduiStyle } from "@redux/user/user.types";
import { ContentItemWrapper } from "../contentItemWrapper/contentItemWrapper";
import { parseJSON } from "@utils";
import { Box } from "@atoms";
import { CONTENT_ITEM_SCALE } from "@ids";

type Props = {
  answerKey: string;
  styles: SduiStyle[];
  handle: string;
  contentItemScaleOptions: Array<{ label: string; value: string }>;
  labelUntippedColor?: string;
};

const ContentItemScale = (props: Props) => {
  const options = props.contentItemScaleOptions;
  const { value, onChange } = useSduiOnChange<Record<string, boolean>>(props.answerKey);

  const { data, isValid } = parseJSON<ComponentProps<typeof ContentItemWrapper>>(props.handle);

  const { width, imageHeight, totalHeight } = useMemo(() => {
    const styles = mapServerStyles(data.styles);
    const parsedWidth = parse(styles?.width as string | number | undefined) ?? 0;
    const parsedHeight = parse(styles?.height as string | number | undefined) ?? 0;
    const parsedMarginTop = parse(styles?.marginTop as string | number | undefined) ?? 0;

    return {
      width: parsedWidth,
      imageHeight: parsedHeight,
      totalHeight: parsedHeight + parsedMarginTop,
    };
  }, [data]);

  const handleSduiChange = useCallback(
    (
      /**
       * A natural number from 1 to n where n is the number of points on the scale
       */
      scaleScore: number
    ) => {
      if (!options?.length) {
        return;
      }

      const needle = options[scaleScore - 1];

      if (!needle?.value) {
        return;
      }

      onChange({ [needle.value]: true });
    },
    [onChange, options]
  );

  const calculatedValue = useMemo(() => {
    if (!options?.length || typeof value !== "object" || !value) {
      return null;
    }

    const valueIndex = options.findIndex((option) => value[option.value]);

    return valueIndex === -1 ? null : valueIndex + 1;
  }, [options, value]);

  if (!isValid) {
    return null;
  }

  return (
    <View style={mapServerStyles(props.styles)} testID={CONTENT_ITEM_SCALE}>
      <LikertScale
        onChange={handleSduiChange}
        value={calculatedValue}
        handleHeight={imageHeight}
        handleWidth={width}
        options={options}
        labelColor={props.labelUntippedColor}
      >
        <Box h={totalHeight} w={width} borderWidth={1} borderColor="transparent">
          <ContentItemWrapper {...data} />
        </Box>
      </LikertScale>
    </View>
  );
};

const parse = (val: string | number) => {
  if (typeof val === "number") {
    return val;
  }

  if (!val) {
    return undefined;
  }

  const parsedInt = parseInt(val, 10);

  return isNaN(parsedInt) ? undefined : parsedInt;
};

export default memo(ContentItemScale);
