import React, { memo, useCallback, useMemo } from "react";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import { Navigation } from "@navigation/main";
import { MODALS, ROUTES } from "@navigation/constants";
import { Colours, Style } from "@styles";
import { Image, TextTemplate } from "@atoms";
import { Module, YuniversityModuleReward } from "@molecules";
import { ChapterContentItem, GenericHeadingAbsolute, GenericHeadingPad, ModuleNotes } from "@organisms";
import Markdown from "@molecules/markdown/markdown";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import TagsWithImage from "@components/molecules/yuniversity/tags-with-image";
import { CPD_COURSE_DETAIL_SCREEN, CPD_COURSE_SCROLL_VIEW } from "@ids";
import { useDispatch, useSelector } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { getCurrentLevel } from "@redux/levels/levels.selectors";
import { GetInAppYuniversityCourseModuleDetailsQuery } from "@graphql/__generated";

type IGqlMedia =
  GetInAppYuniversityCourseModuleDetailsQuery["getInAppYuniversityCourseModuleDetails"]["chapters"]["0"]["videoMedia"];
export interface ICourseModuleDetailsProps {
  onBackPress: () => void;
  onClose: () => void;
  moduleDetails: GetInAppYuniversityCourseModuleDetailsQuery["getInAppYuniversityCourseModuleDetails"];
  courseId: string;
  onChapterPress: (video: IGqlMedia, chapterId: string, chapterTitle: string) => void;
  startQuiz: () => void;
}

const CourseDetailsScreen = ({
  onBackPress,
  onClose,
  onChapterPress,
  startQuiz,
  courseId,
  moduleDetails: {
    id: moduleId,
    image,
    title,
    tags,
    markdown,
    chapters,
    completed,
    imageTags,
    moduleQuiz,
    moduleNotes,
    moduleCertificate,
    moduleCertificateDetails,
  },
}: ICourseModuleDetailsProps) => {
  const dispatch = useDispatch();
  const userLevel = useSelector(getCurrentLevel);

  const onStartQuiz = useCallback(() => {
    dispatch(
      logMixpanelEventActionCreator("item_button_pressed", {
        topic: "CPD",
        detail_1: courseId,
        detail_2: moduleId,
        location: "module_details",
        section: "module_quiz",
        label: moduleQuiz.ctaLabel,
        title: title,
        levelId: userLevel,
      })
    );
    startQuiz();
  }, [courseId, moduleId, moduleQuiz, title, userLevel, startQuiz, dispatch]);

  const openCertificate = useCallback(() => {
    const { subtitle, description, values } = moduleCertificateDetails;
    dispatch(
      logMixpanelEventActionCreator("item_button_pressed", {
        topic: "CPD",
        detail_1: courseId,
        detail_2: moduleId,
        location: "module_details",
        section: "certificate",
        label: moduleCertificate.ctaLabel,
        title: title,
        levelId: userLevel,
      })
    );

    Navigation.push(ROUTES.courseDetails, {
      component: {
        id: MODALS.yuniversityCertificate,
        name: MODALS.yuniversityCertificate,
        passProps: {
          coverType: CoverType.rare,
          keyValuePairs: values,
          content: [
            {
              type: "body",
              content: description,
            },
          ],
          title: moduleCertificateDetails.title,
          subtitle,
          imageUri: moduleCertificateDetails.image.uri,
        },
      },
    });
  }, [courseId, moduleId, moduleCertificateDetails, moduleCertificate, title, userLevel, dispatch]);

  const trackModuleNotesPressed = useCallback(() => {
    dispatch(
      logMixpanelEventActionCreator("item_button_pressed", {
        topic: "CPD",
        detail_1: courseId,
        detail_2: moduleId,
        location: "module_details",
        section: "module_notes",
        label: moduleNotes.ctaLabel,
        title: title,
        levelId: userLevel,
      })
    );
  }, [courseId, moduleId, moduleNotes, title, userLevel, dispatch]);

  const completedModuleQuizStyle = useMemo(() => (completed ? styles.moduleQuizCompletedStyle : {}), [completed]);
  return (
    <View testID={CPD_COURSE_DETAIL_SCREEN} style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView
        testID={CPD_COURSE_SCROLL_VIEW}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.containerStyle}
      >
        <View style={styles.box}>
          <Image
            style={styles.courseImage}
            height={Style.adjust(90)}
            width={Style.DEVICE_WIDTH}
            resizeMode="contain"
            source={{ uri: image.uri }}
          />
          <View style={styles.titleWrapper}>
            <TextTemplate type={"b1b"} textAlign="center">
              {title}
            </TextTemplate>
            <View style={styles.tagsWrapper}>
              <TextTemplate type={"l2b"} textAlign="center">
                {tags}
              </TextTemplate>
            </View>
            {!imageTags.length ? null : (
              <View style={styles.imageTagsWrapper}>
                <TagsWithImage tags={imageTags} />
              </View>
            )}
            <Markdown text={markdown} />
          </View>
        </View>
        {chapters.map(({ tags: chapterTags, title: chapterTitle, id, image: chapterImage, status, videoMedia }) => (
          <ChapterContentItem
            tags={chapterTags}
            title={chapterTitle}
            onChapterPress={onChapterPress}
            image={chapterImage}
            status={status}
            slug={id}
            video={videoMedia}
            key={id}
          />
        ))}
        <ModuleNotes {...moduleNotes} trackEvent={trackModuleNotesPressed} />
        <Module {...moduleQuiz} onPress={onStartQuiz} wrapperStyle={completedModuleQuizStyle}>
          <YuniversityModuleReward coin={moduleQuiz.yucoin} message={moduleQuiz.rewardDescription} />
        </Module>
        <Module {...moduleCertificate} onPress={openCertificate} />
      </ScrollView>
      <GenericHeadingAbsolute logo="yulife" onRightIconPress={onClose} onLeftIconPress={onBackPress} />
    </View>
  );
};

export default memo(CourseDetailsScreen);

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: Style.adjust(24),
    height: Style.DEVICE_HEIGHT,
    backgroundColor: Colours.neutral.n50,
  },
  moduleQuizCompletedStyle: {
    borderColor: Colours.status.su400,
    borderWidth: Style.adjust(1),
    backgroundColor: "#EFFBF7",
  },
  imageTagsWrapper: {
    marginLeft: Style.adjust(16),
    marginBottom: Style.adjust(16),
  },
  containerStyle: {
    paddingBottom: Style.adjust(Platform.select({ ios: 20, android: 50 })),
    paddingTop: Style.adjust(16),
  },
  box: {
    backgroundColor: Colours.neutral.white,
    padding: Style.adjust(21),
    borderRadius: Style.adjust(8),
    marginBottom: Style.adjust(16),
  },
  courseImage: {
    alignSelf: "center",
    marginBottom: Style.adjust(16),
  },
  titleWrapper: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  tagsWrapper: {
    marginVertical: Style.adjust(16),
  },
  quizReward: {
    alignSelf: "center",
    marginLeft: Style.adjust(4),
  },
  quizRewardWrapper: {
    alignItems: "center",
    marginBottom: Style.adjust(16),
    justifyContent: "space-between",
    flexDirection: "row",
  },
  quizRewardAmountWrapper: {
    flexDirection: "row",
  },
});
