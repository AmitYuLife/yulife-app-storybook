import React, { FC, useCallback, useMemo, useRef, useState, memo } from "react";
import { TextTemplate } from "@atoms";
import { Image } from "@atoms/image/image";
import Markdown from "@components/molecules/markdown/markdown";
import { GenericHeadingAbsolute, ModuleContentItem } from "@organisms";
import { Style } from "@styles";
import { Animated, NativeScrollEvent, View } from "react-native";
import { Source } from "react-native-fast-image";
import style, { CONTENT_MARGIN_TOP, HEADER_HEIGHT, TITLE_HEIGHT } from "./styles";
import { CPD_COURSES_SCREEN } from "@ids";
import { GetInAppYuniversityCoursesQuery } from "@graphql/__generated";

export interface IHeaderProps {
  title: string;
  label: string;
  source: Source;
  backgroundColor: string;
  headerTextColor: string;
  onLeftIconPress: () => void;
}

type ICourse = GetInAppYuniversityCoursesQuery["getInAppYuniversityCourses"]["courses"];

interface IProps {
  category: string;
  categoryImageUri: string;
  courses: ICourse;
  headerProps: IHeaderProps;
  testID?: string;
  onModulePress: (courseSlug: string, moduleSlug: string) => void;
}

const YuniversityCoursesScreen: FC<IProps> = ({ headerProps, categoryImageUri, category, courses, onModulePress }) => {
  const {
    source: headerImageSource,
    backgroundColor,
    headerTextColor,
    onLeftIconPress,
    label,
    title,
  } = headerProps || {};
  const [showHeading, setHeadingVisibilty] = useState(true);
  const scrollY = useRef(new Animated.Value(0)).current;
  const statusBarCoverStyle = useMemo(() => ({ ...style.statusBarCover, backgroundColor }), [backgroundColor]);

  const onScroll = useCallback(
    Animated.event<NativeScrollEvent>([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
      useNativeDriver: true,
      listener: ({
        nativeEvent: {
          contentOffset: { y },
        },
      }) => {
        if (showHeading && y > CONTENT_MARGIN_TOP - TITLE_HEIGHT) {
          setHeadingVisibilty(false);
        }

        if (!showHeading && y < CONTENT_MARGIN_TOP - TITLE_HEIGHT) {
          setHeadingVisibilty(true);
        }
      },
    }),
    [scrollY, showHeading]
  );

  const headerImageContainerStyle = useMemo(() => {
    return {
      ...style.headerImageContainer,
      opacity: scrollY.interpolate({
        inputRange: [30, 60],
        outputRange: [1, 0],
        extrapolate: "clamp",
      }),
      transform: [{ translateY: Animated.multiply(-0.5, scrollY) }],
    };
  }, [scrollY]);

  const heading = useMemo(
    () => (
      <>
        {!label ? null : (
          <TextTemplate textAlign="center" numberOfLines={1} type="l2" color={headerTextColor}>
            {label}
          </TextTemplate>
        )}
        {!title ? null : (
          <TextTemplate textAlign="center" numberOfLines={1} type="b1b" color={headerTextColor}>
            {title}
          </TextTemplate>
        )}
      </>
    ),
    [headerTextColor]
  );

  return (
    <View testID={CPD_COURSES_SCREEN} style={[style.wrapper, { backgroundColor }]}>
      <View style={statusBarCoverStyle} />
      <Animated.View style={headerImageContainerStyle}>
        <Image
          suppressLoadingUi={true}
          style={style.headerImageWrapper}
          resizeMode="cover"
          source={headerImageSource}
          width={Style.DEVICE_WIDTH}
          height={HEADER_HEIGHT}
        />
      </Animated.View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        style={style.scrollView}
        onScroll={onScroll}
        scrollEventThrottle={32}
        contentInsetAdjustmentBehavior="never"
      >
        <View style={style.contentWrapper}>
          <View style={style.categoryHeaderWrapper}>
            <TextTemplate type={"h3"}>{category}</TextTemplate>
            {!categoryImageUri ? null : (
              <Image height={Style.adjust(89)} width={Style.adjust(84)} source={{ uri: categoryImageUri }} />
            )}
          </View>

          {courses.map(({ title: courseTitle, logoImageKey, description, modules, id: courseId }) => {
            return (
              <View key={courseId}>
                <View style={style.courseWrapper}>
                  <View>
                    <TextTemplate type={"b1b"}>{courseTitle}</TextTemplate>
                    <Markdown text={description} />
                  </View>
                  {!logoImageKey ? null : (
                    <View style={style.categoryHeaderWrapper}>
                      <Image height={Style.adjust(89)} width={Style.adjust(84)} source={{ uri: logoImageKey.uri }} />
                    </View>
                  )}
                </View>
                {modules.map(
                  ({ tags, imageTags, title: moduleTitle, id: moduleId, slug, image: moduleImage, status }) => {
                    return (
                      <ModuleContentItem
                        tags={tags}
                        title={moduleTitle}
                        onModulePress={onModulePress}
                        image={moduleImage}
                        status={status}
                        key={moduleId}
                        slug={slug}
                        courseSlug={courseId}
                        imageTags={imageTags}
                      />
                    );
                  }
                )}
              </View>
            );
          })}
        </View>
      </Animated.ScrollView>
      {!showHeading ? null : (
        <GenericHeadingAbsolute
          heading={heading}
          color={headerTextColor}
          onLeftIconPress={onLeftIconPress}
          backgroundColor="transparent"
        />
      )}
    </View>
  );
};

export default memo(YuniversityCoursesScreen);
