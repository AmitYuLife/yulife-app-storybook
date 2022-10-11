import React, { memo, useCallback } from "react";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Colours, Style } from "@styles";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import { Image, TextTemplate } from "@atoms";
import Markdown from "@components/molecules/markdown/markdown";
import { CourseContentItem, Module } from "@components/molecules";

interface IGqlModule {
  icon: { id: string; uri: string };
  iconHeight: number;
  iconWidth: number;
  title: string;
  description: string;
  ctaLabel: string;
  ctaEnabled: boolean;
  downloadLink?: string;
}

interface IChapter {
  id: string;
  completed: boolean;
  tags: string;
  title: string;
  image: { id: string; uri: string };
  status: { icon: { id: string; uri: string }; text: string };
}

export interface IGqlCourse {
  image: { id: string; uri: string };
  title: string;
  tags: string;
  markdown: string;
  chapters: IChapter[];
  moduleQuiz: IGqlModule;
  moduleNotes: IGqlModule;
  moduleCertificate: IGqlModule;
  completed: boolean;
}

export interface ICourseProps {
  onClose: () => void;
  course: IGqlCourse;
}

const CourseDetailsScreen = ({
  onClose,
  course: { image, title, tags, markdown, chapters, moduleQuiz, moduleNotes, moduleCertificate },
}: ICourseProps) => {
  const onChapterPress = useCallback(() => {
    /*do something*/
  }, []);
  const downloadNotes = useCallback(() => {
    /*do something*/
  }, []);
  const startQuiz = useCallback(() => {
    /*do something*/
  }, []);
  const openCertificate = useCallback(() => {
    /*do something*/
  }, []);

  const quizChildren = (
    <View style={styles.quizRewardWrapper}>
      <TextTemplate textAlign="center" type={"b2"}>
        Earn
      </TextTemplate>
      <View style={styles.quizRewardAmountWrapper}>
        <TextTemplate textAlign="center" type={"b2b"}>
          200
        </TextTemplate>
        <Image
          style={styles.quizReward}
          height={Style.adjust(20)}
          width={Style.adjust(20)}
          source={require("@assets/icons/yucoin.png")}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.containerStyle}>
        <View style={styles.box}>
          <Image
            style={styles.courseImage}
            height={Style.adjust(39)}
            width={Style.adjust(60)}
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
        {chapters.map(({ tags: chapterTags, title: chapterTitle, id, image: chapterImage, status }) => (
          <CourseContentItem
            tags={chapterTags}
            title={chapterTitle}
            onPress={onChapterPress}
            image={chapterImage}
            status={status}
            key={id}
          />
        ))}
        <Module {...moduleNotes} onPress={downloadNotes} />
        <Module {...moduleQuiz} onPress={startQuiz}>
          {quizChildren}
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
