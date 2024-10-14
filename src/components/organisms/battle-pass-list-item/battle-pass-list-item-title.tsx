import { TextTemplate } from "@atoms";
import { BATTLE_PASS_LIST_ITEM_CTA } from "@ids";
import { Style, TemplateTextType } from "@styles";
import { memo, useCallback, useMemo, useState } from "react";
import { LayoutChangeEvent, View, ViewStyle } from "react-native";

type Props = {
  titleColour: string;
  style: ViewStyle;
  id: string;
  title: string;
};

const MAX_NUMBER_OF_LINES = 2;
const SIZES: TemplateTextType[] = ["l1b", "b2b"];
const LINE_HEIGHT = Style.adjust(20);
const MAX_HEIGHT = LINE_HEIGHT * MAX_NUMBER_OF_LINES;

export const BattlePassListItemTitle = memo(({ titleColour, style, id, title }: Props) => {
  const [sizeIndex, setSizeIndex] = useState(SIZES.length - 1);
  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    const layoutHeight = event.nativeEvent.layout.height;

    if (layoutHeight > MAX_HEIGHT) {
      setSizeIndex((prevStateSizeIndex) => Math.max(prevStateSizeIndex - 1, 0));
    }
  }, []);

  const calculated = useMemo(
    () => ({
      size: SIZES[sizeIndex],
      numberOfLines: sizeIndex > 0 ? MAX_NUMBER_OF_LINES + 1 : MAX_NUMBER_OF_LINES,
    }),
    [sizeIndex]
  );

  return (
    <View onLayout={handleLayout} style={style} testID={BATTLE_PASS_LIST_ITEM_CTA(id)}>
      <TextTemplate
        numberOfLines={calculated.numberOfLines}
        type={calculated.size}
        lineHeight={LINE_HEIGHT}
        color={titleColour}
      >
        {title}
      </TextTemplate>
    </View>
  );
});
