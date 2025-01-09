import { Box, Image, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { useRef, useEffect } from "react";
import { Pressable, ScrollView, StyleSheet } from "react-native";

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

  useEffect(() => {
    const index = items.findIndex((item) => item?.id === selectedItem?.id) || 0;
    scrollViewRef?.current?.scrollTo({ x: index * Style.adjust(56) });
  }, [items, selectedItem]);

  return (
    <Box position="absolute" bottom={105} left={0} right={0}>
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
            <Box mh={4} br={4} overflow="hidden">
              <Image source={item.previewImage} width={Style.adjust(48)} height={Style.adjust(48)} />
              {selectedItem?.id !== item.id ? null : (
                <Box
                  position="absolute"
                  width={48}
                  height={48}
                  borderTopRadius={4}
                  borderBottomRadius={4}
                  borderWidth={1}
                  borderColor={Colours.primary.p600}
                  bg="rgba(227, 13, 118, 0.24)"
                  center={true}
                >
                  <Image
                    source={require("@assets/icons/check.png")}
                    width={Style.adjust(16)}
                    height={Style.adjust(16)}
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
