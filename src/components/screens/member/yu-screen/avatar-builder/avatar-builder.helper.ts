import {
  GetYuliferWithAvatar_getYulifer_avatar as FullAvatar,
  GetYuliferWithAvatar_getYulifer_avatar_head_part as AvatarPart,
  Avatar_listAvatarParts,
} from "@graphql/_core/schema";
import { IAvatarStore, IBodyItem } from "@redux/avatar/avatar.reducer";
import { IAvatar } from "./avatar.types";

export const loadingColorData = Array(12)
  .fill(0)
  .map((_) => ({ colorScheme: { main: "#F3F3F3" } }));

export const loadingItemData = Array(12)
  .fill(0)
  .map((_, index) => ({ bodyElements: null, parts: [{ partId: `loading_item_${index}` }] }));

export function parseBodyParts(bodyPartsList: Avatar_listAvatarParts[]) {
  return bodyPartsList.map((part) => {
    return ({
      ...part,
      bodyElements: part.elements.map((element) => {
        return {
          ...element,
          attributes: element.attributes.reduce(
            (acc, current) => ({
              ...acc,
              [current.name]: current.value,
            }),
            {} as { [name: string]: string }
          ),
        };
      }),
    } as unknown) as IBodyItem;
  });
}

export function parseBodyPart(part: AvatarPart) {
  return {
    ...part,
    elements: part?.elements.map((element) => {
      return {
        ...element,
        attributes: element.attributes.reduce(
          (acc, current) => ({
            ...acc,
            [current.name]: current.value,
          }),
          {} as { [name: string]: string }
        ),
      };
    }),
  };
}

export function addExtraData(arrayData: any[]) {
  // FIXME: Workaround to align elements to the left
  if (arrayData.length % 3 === 2) {
    arrayData.push({
      partId: "extra_1",
      extra: true,
    });
  } else if (arrayData.length % 3 === 1) {
    arrayData.push(
      {
        partId: "extra_1",
        extra: true,
      },
      {
        partId: "extra_2",
        extra: true,
      }
    );
  }
}

export function transformAvatar(avatarData: FullAvatar): IAvatar {
  const avatar: IAvatarStore["avatarForYuscreen"] = {} as any;
  const keys: (keyof Omit<FullAvatar, "id">)[] = [
    "head",
    "eyes",
    "hair",
    "body",
    "pants",
    "boots",
    "chest",
    "gloves",
    "facialHair",
    "glasses",
  ];

  for (const key of keys) {
    if (avatarData && avatarData[key]) {
      avatar[key] = {
        colors: avatarData[key]?.color,
        bodyElements: parseBodyPart(avatarData[key].part)?.elements || [],
        partId: avatarData[key]?.part?.partId,
      };
    }
  }

  return avatar;
}
