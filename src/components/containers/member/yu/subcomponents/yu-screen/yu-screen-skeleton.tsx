import React from "react";
import NameAndLevelSkeleton from "@components/molecules/name-and-level/name-and-level-skeleton";
import { CarouselSkeleton } from "../carousel/carousel-skeleton";
import { YumojiAndSlotsSkeleton } from "../yumoji-and-slots/yumoji-and-slots-skeleton";

export const YuScreenSkeleton = () => (
  <>
    <NameAndLevelSkeleton hideWorldIcon={true} />
    <YumojiAndSlotsSkeleton />
    <CarouselSkeleton />
  </>
);
