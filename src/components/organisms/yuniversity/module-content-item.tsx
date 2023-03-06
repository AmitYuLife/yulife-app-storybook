import React, { memo, useCallback } from "react";
import { CourseContentItem } from "@components/molecules";
import { ICourseItem } from "@components/molecules/yuniversity/course-content-item";

type IModuleContentItem = ICourseItem & {
  slug: string;
  courseSlug: string;
  onModulePress: (courseSlug: string, moduleSlug: string) => void;
};

const ModuleContentItem = ({
  slug,
  courseSlug,
  onModulePress,
  tags,
  imageTags,
  title,
  image,
  status,
}: IModuleContentItem) => {
  const onPress = useCallback(() => {
    onModulePress(courseSlug, slug);
  }, [courseSlug, slug]);

  return (
    <CourseContentItem
      tags={tags}
      title={title}
      onPress={onPress}
      image={image}
      status={status}
      imageTags={imageTags}
    />
  );
};

export default memo(ModuleContentItem);
