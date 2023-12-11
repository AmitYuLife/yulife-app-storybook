import React, { memo, useCallback, useMemo } from "react";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { View, ViewStyle } from "react-native";
import { Style } from "@styles";
import { useDispatch } from "react-redux";
import { Image, TextTemplate } from "@atoms";
import { ITextTemplateType } from "@atoms/text/text-template";
import { Source } from "react-native-fast-image";
import { SduiAction } from "@graphql/__generated";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";

interface ICustomIconImage {
  source: Source;
  width: number;
  height: number;
}

interface ICustomIconText {
  value: string;
  type: string;
  colour: string;
  x: number;
  y: number;
}

export interface ICustomIcon {
  name: string;
  x: number;
  y: number;
  image: ICustomIconImage;
  text: ICustomIconText;
  onPress?: SduiAction;
}

interface IProps {
  icon: ICustomIcon;
}

const CustomIcon = ({ icon }: IProps) => {
  const dispatch = useDispatch();
  const wrapperStyle = useMemo(
    () => ({ marginBottom: Style.adjust(14), top: Style.adjust(icon.y), left: Style.adjust(icon.x) }),
    [icon.y, icon.x]
  );
  const textWrapperStyle = useMemo(
    () =>
      ({
        position: "absolute",
        top: Style.adjust(icon.text.y),
        left: Style.adjust(icon.text.x),
        right: 0,
        alignItems: "center",
      } as ViewStyle),
    [icon.text.y, icon.text.x]
  );

  const onPress = useCallback(() => {
    if (!icon.onPress) {
      return null;
    }

    dispatch(icon.onPress);
    dispatch(logMixpanelEventActionCreator("button_pressed", { button_id: icon.name }));
  }, [icon.onPress, icon.name, dispatch]);

  return (
    <TouchableOpacityWithDelay style={wrapperStyle} onPress={onPress}>
      <Image
        source={icon.image?.source}
        width={Style.adjust(icon.image.width)}
        height={Style.adjust(icon.image.height)}
      />
      <View style={textWrapperStyle}>
        <TextTemplate type={icon.text.type as ITextTemplateType} color={icon.text.colour} textAlign="center">
          {icon.text.value}
        </TextTemplate>
      </View>
    </TouchableOpacityWithDelay>
  );
};

export default memo(CustomIcon);
