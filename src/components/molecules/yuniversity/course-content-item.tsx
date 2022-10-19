import React, { memo } from "react";
import { TextTemplate } from "@atoms";
import { ArrowIcon } from "@atoms/icon/arrow";
import { Image } from "@atoms/image/image";
import { BoxOption } from "@molecules";
import { Colours, Style } from "@styles";
import { StyleSheet, View } from "react-native";

interface IStatus {
  icon: { uri: string; id: string };
  text: string;
}

export interface ICourseItem {
  tags: string;
  title: string;
  image: { uri: string; id: string };
  status?: IStatus;
}

type Props = ICourseItem & { onPress: () => void };

export const CourseContentItem = ({ tags, title, onPress, image, status }: Props) => (
  <BoxOption
    onPress={onPress}
    isSelected={false}
    selectedStyle={{}}
    wrapperStyle={styles.wrapper}
    innerHeight={Style.adjust(120)}
  >
    <View style={styles.main}>
      <View style={styles.imageWrapper}>
        <Image height={Style.adjust(104)} width={Style.adjust(120)} source={{ uri: image.uri }} />
      </View>
      <View style={styles.detailWrapper}>
        <View>
          <TextTemplate type="l1b">{title}</TextTemplate>
          <View style={styles.separator8} />
          <TextTemplate type="l2" numberOfLines={3}>
            {tags}
          </TextTemplate>
        </View>
        {!status ? null : (
          <View style={styles.statusWrapper}>
            <View style={styles.statusIconWrapper}>
              <Image height={Style.adjust(14)} width={Style.adjust(14)} source={{ uri: status.icon.uri }} />
            </View>
            <TextTemplate type={"l2"}>{status.text}</TextTemplate>
          </View>
        )}
      </View>
      <View style={styles.arrowWrapper}>
        <ArrowIcon color={Colours.primary.p600} />
      </View>
    </View>
  </BoxOption>
);

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Style.adjust(16),
  },
  statusWrapper: {
    flexDirection: "row",
    marginBottom: Style.adjust(4),
  },
  statusIconWrapper: {
    marginRight: Style.adjust(6),
  },
  arrowWrapper: {
    alignSelf: "center",
  },
  separator8: {
    height: Style.adjust(8),
  },
  main: {
    width: "100%",
    padding: Style.adjust(8),
    justifyContent: "space-between",
    flexDirection: "row",
  },
  imageWrapper: {
    borderRadius: Style.adjust(12),
    overflow: "hidden",
  },
  detailWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: Style.adjust(16),
  },
});

export default memo(CourseContentItem);
