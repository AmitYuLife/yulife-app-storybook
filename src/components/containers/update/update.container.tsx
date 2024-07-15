import React, { memo } from "react";
import { UpdateScreen } from "@components/screens/update/update.screen";
import { openYulife } from "@services/app-link";

export interface IUpdateContainerProps {
  title: string;
  description: string;
  imageUrl: string;
}

const UpdateContainer = memo(({ title, description, imageUrl }: IUpdateContainerProps) => {
  return (
    <UpdateScreen
      title={title}
      description={description}
      buttonText="Update my app" // TODO: localise
      imageUrl={imageUrl}
      buttonAction={openYulife}
    />
  );
});

export default UpdateContainer;
