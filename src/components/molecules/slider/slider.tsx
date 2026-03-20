import { Box, Image, TextTemplate } from "@atoms";
import { P2P_SLIDER, P2P_SLIDER_ITEM } from "@ids";
import { Style, StyleSheet } from "@styles";
import { isRTL } from "@locale";
import { useRef, useEffect } from "react";
import { Pressable, ScrollView } from "react-native";
import { useTheme } from "@app/modules/themes/hooks/useTheme";
import Icon from "@atoms/icon";

type BaseItem = {
  id?: string;
  previewImage?: {
    uri?: string;
  };
};

type Props<T> = {
  title?: string;
  textColor?: string;
  items: T[];
  selectedItem?: T;
  selectItem: (key: T) => void;
};

export const Slider = <T extends BaseItem>({ title, textColor, items, selectedItem, selectItem }: Props<T>) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const index = items.findIndex((item) => item?.id === selectedItem?.id) || 0;
    // for rtl, we need to reverse the scroll direction
    const scrollX = (isRTL() ? items.length - 1 - index : index) * Style.adjust(56);

    scrollViewRef?.current?.scrollTo({ x: scrollX });
  }, [items, selectedItem]);

  return (
    <Box position="absolute" bottom={105} left={0} right={0} testID={P2P_SLIDER}>
      {!title ? null : (
        <>
          <TextTemplate type="l2b" textAlign="center" color={textColor}>
            {title}
          </TextTemplate>
          <Box h={16} />
        </>
      )}
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        centerContent={true}
        showsHorizontalScrollIndicator={false}
        snapToInterval={Style.adjust(56)}
        decelerationRate="fast"
        contentContainerStyle={styles.scrollView}
      >
        {items.map((item) => (
          <Pressable key={item.id} onPress={() => selectItem(item)}>
            <Box mh={4} br={4} overflow="hidden" testID={P2P_SLIDER_ITEM(item.id)}>
              <Image source={item.previewImage} width={Style.adjust(48)} height={Style.adjust(48)} />
              {selectedItem?.id !== item.id ? null : (
                <Box
                  position="absolute"
                  width={48}
                  height={48}
                  borderTopRadius={4}
                  borderBottomRadius={4}
                  borderWidth={1}
                  borderColor={theme.colors.primary.p600}
                  bg={`${theme.colors.primary.p600}24`}
                  center={true}
                >
                  <Icon.RadioIcon
                    width={Style.adjust(16)}
                    height={Style.adjust(16)}
                    checked={true}
                    checkedColour={theme.colors.primary.p600}
                  />
                </Box>
              )}
            </Box>
          </Pressable>
        ))}
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: Style.DEVICE_WIDTH / 2 - Style.adjust(26),
  },
});
