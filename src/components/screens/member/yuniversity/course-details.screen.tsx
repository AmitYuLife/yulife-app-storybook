import React, { memo, useCallback } from "react";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import { Navigation } from "react-native-navigation";
import { MODALS, ROUTES } from "@navigation/constants";
import { Colours, Style } from "@styles";
import { Image, TextTemplate } from "@atoms";
import { Module, YuniversityModuleReward } from "@molecules";
import { ChapterContentItem, GenericHeadingAbsolute, GenericHeadingPad, ModuleNotes } from "@organisms";
import Markdown from "@molecules/markdown/markdown";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import {
  GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails as IGqlCourseModuleDetails,
  GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_chapters_videoMedia as IGqlMedia,
} from "@graphql/_core/schema/GetInAppYuniversityCourseModuleDetails";

export interface ICourseModuleDetailsProps {
  onClose: () => void;
  moduleDetails: IGqlCourseModuleDetails;
  onChapterPress: (video: IGqlMedia, chapterId: string) => void;
  startQuiz: () => void;
}

const CourseDetailsScreen = ({
  onClose,
  onChapterPress,
  startQuiz,
  moduleDetails: {
    image,
    title,
    tags,
    markdown,
    chapters,
    moduleQuiz,
    moduleNotes,
    moduleCertificate,
    moduleCertificateDetails,
  },
}: ICourseModuleDetailsProps) => {
  const openCertificate = useCallback(() => {
    const { subtitle, description, values } = moduleCertificateDetails;
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
  }, [moduleCertificateDetails]);

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.containerStyle}>
        <View style={styles.box}>
          <Image
            style={styles.courseImage}
            height={Style.adjust(39)}
            width={Style.adjust(61)}
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
        <ModuleNotes {...moduleNotes} />
        <Module {...moduleQuiz} onPress={startQuiz}>
          <YuniversityModuleReward coin={moduleQuiz.yucoin} />
        </Module>
        <Module {...moduleCertificate} onPress={openCertificate} />
      </ScrollView>
      <GenericHeadingAbsolute logo="yulife" onRightIconPress={onClose} />
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
