import React, { memo, useCallback } from "react";
import { CourseContentItem } from "@components/molecules";
import { ICourseItem } from "@components/molecules/yuniversity/course-content-item";
import { GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_chapters_videoMedia as IGqlMedia } from "@graphql/_core/schema/GetInAppYuniversityCourseModuleDetails";

type IChapterContentItem = ICourseItem & {
  slug: string;
  video: IGqlMedia;
  onChapterPress: (video: IGqlMedia, chapterId: string) => void;
};

const ChapterContentItem = ({ slug, video, onChapterPress, tags, title, image, status }: IChapterContentItem) => {
  const onPress = useCallback(() => {
    onChapterPress(video, slug);
  }, [video, slug]);

  return <CourseContentItem tags={tags} title={title} onPress={onPress} image={image} status={status} />;
};

export default memo(ChapterContentItem);
