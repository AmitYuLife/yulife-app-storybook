import { ComponentProps, memo, useMemo } from "react";
import { useSduiOnChange } from "../_hooks/useSduiOnChange";
import { LikertScale } from "@components/molecules";
import { View } from "react-native";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { SduiStyle } from "@redux/user/user.types";
import { ContentItemWrapper } from "../contentItemWrapper/contentItemWrapper";
import { parseJSON } from "@utils";
import { Box } from "@atoms";

type Props = {
  answerKey: string;
  styles: SduiStyle[];
  labelMin: string;
  labelMax: string;
  handleWidth: number;
  handleHeight: number;
  handle: string;
};

const ContentItemScale = (props: Props) => {
  const { value, onChange } = useSduiOnChange<number>(props.answerKey);

  const { data, isValid } = parseJSON<ComponentProps<typeof ContentItemWrapper>>(props.handle);

  const { width, imageHeight, totalHeight } = useMemo(() => {
    const styles = mapServerStyles(data.styles);
    const parsedWidth = parse(styles?.width) ?? 0;
    const parsedHeight = parse(styles?.height) ?? 0;
    const parsedMarginTop = parse(styles?.marginTop) ?? 0;

    return {
      width: parsedWidth,
      imageHeight: parsedHeight,
      totalHeight: parsedHeight + parsedMarginTop,
    };
  }, [data]);

  if (!isValid) {
    return null;
  }

  return (
    <View style={mapServerStyles(props.styles)}>
      <LikertScale
        onChange={onChange}
        value={value}
        handleHeight={imageHeight}
        handleWidth={width}
        labelMax={props.labelMax}
        labelMin={props.labelMin}
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
