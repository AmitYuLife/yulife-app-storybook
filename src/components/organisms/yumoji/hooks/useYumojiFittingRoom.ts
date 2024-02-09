import { Source } from "react-native-fast-image";
import { useQuery } from "@apollo/client";
import { Style } from "@styles";
import { cache } from "@services/image";
import { CoverType, gql, GetYumojiRemoteFittingRoomQuery } from "@graphql/__generated";

export const AVATAR_WIDTH = Style.adjust(160) * 0.73;
export const AVATAR_HEIGHT = Style.adjust(328) * 0.73;

type Args = {
  customerProductId: string;
  coverType: CoverType;
};

export function useYumojiFittingRoom({ customerProductId, coverType }: Args) {
  const yumoji = useQuery(gql("GetYumojiRemotePartsDocument"), {
    fetchPolicy: "no-cache",
  });
  const tryOn = useQuery(gql("GetYumojiRemoteFittingRoomDocument"), {
    variables: { customerProductId, coverType },
    fetchPolicy: "no-cache",
    onCompleted: (data) => {
      cache(
        data.getYumojiRemoteFittingRoom.yuWorlds
          .map((world) => world.yumojiParts)
          .reduce((allImages, worldImages) => {
            allImages.push(
              ...worldImages.filter((img) => img?.remoteUrl?.uri).map((img) => ({ uri: img.remoteUrl.uri }))
            );
            return allImages;
          }, [] as Source[])
      );
    },
  });

  return {
    yumoji: yumoji?.data?.avatar,
    fittingRoom:
      tryOn?.data?.getYumojiRemoteFittingRoom || ({} as GetYumojiRemoteFittingRoomQuery["getYumojiRemoteFittingRoom"]),
  };
}
