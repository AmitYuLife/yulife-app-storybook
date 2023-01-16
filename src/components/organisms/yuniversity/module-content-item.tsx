import React, { memo, useCallback } from "react";
import { CourseContentItem } from "@components/molecules";
import { ICourseItem } from "@components/molecules/yuniversity/course-content-item";

type IModuleContentItem = ICourseItem & {
  slug: string;
  onModulePress: (moduleSlug: string) => void;
};

const ModuleContentItem = ({ slug, onModulePress, tags, imageTags, title, image, status }: IModuleContentItem) => {
  const onPress = useCallback(() => {
    onModulePress(slug);
  }, [slug]);

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
