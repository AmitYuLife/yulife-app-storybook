import { Image, TextTemplate } from "@atoms";
import { ArrowIcon } from "@atoms/icon/arrow";
import { BoxOption } from "@components/molecules";
import { RemoteImage, SduiAction } from "@graphql/_core/schema";
import { Style, Colours } from "@styles";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";

interface Props {
  title: string;
  description: string;
  image: RemoteImage;
  onPress: SduiAction;
}

export const BoxOptionCard = ({ title, description, image, onPress }: Props) => {
  const dispatch = useDispatch();

  return (
    <BoxOption
      onPress={() => dispatch(onPress)}
      isSelected={false}
      wrapperStyle={styles.wrapper}
      innerHeight={Style.adjust(120)}
    >
      <View style={styles.innerWrapper}>
        {!image?.uri ? null : (
          <View style={styles.imageWrapper}>
            <Image height={Style.adjust(104)} width={Style.adjust(120)} source={{ uri: image.uri }} />
          </View>
        )}
        <View style={styles.contentWrapper}>
          <View style={styles.contentInnerWrapper}>
            {!title ? null : (
              <View style={styles.titleWrapper}>
                <TextTemplate numberOfLines={2} type="b2b">
                  {title}
                </TextTemplate>
              </View>
            )}
            {!description ? null : (
              <TextTemplate type="b2" numberOfLines={2}>
                {description}
              </TextTemplate>
            )}
          </View>
        </View>
        <View style={styles.arrowWrapper}>
          <ArrowIcon color={Colours.primary.p600} />
        </View>
      </View>
    </BoxOption>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Style.adjust(16),
  },
  innerWrapper: {
    width: "100%",
    padding: Style.adjust(8),
    flexDirection: "row",
  },
  imageWrapper: {
    borderRadius: Style.adjust(12),
    overflow: "hidden",
  },
  contentWrapper: {
    flex: 1,
    flexDirection: "column",
    marginLeft: Style.adjust(16),
  },
  contentInnerWrapper: {
    justifyContent: "center",
    height: "100%",
  },
  titleWrapper: {
    marginBottom: Style.adjust(8),
  },
  arrowWrapper: {
    alignSelf: "center",
    paddingLeft: Style.adjust(8),
  },
});
