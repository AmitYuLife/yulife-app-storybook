import { Source } from "react-native-fast-image";
import { useQuery } from "@apollo/client";
import { GQL_QUERY_GET_YUMOJI_REMOTE_FITTING_ROOM, GQL_QUERY_GET_YUMOJI_REMOTE_PARTS } from "@graphql/yuscreen";
import {
  GetYumojiRemoteFittingRoom,
  GetYumojiRemoteFittingRoomVariables,
  GetYumojiRemoteParts,
} from "@graphql/_core/schema";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { Style } from "@styles";
import { cache } from "@services/image";

export const AVATAR_WIDTH = Style.adjust(160) * 0.73;
export const AVATAR_HEIGHT = Style.adjust(328) * 0.73;

type Args = {
  customerProductId: string;
  coverType: CoverType;
};

export function useYumojiFittingRoom({ customerProductId, coverType }: Args) {
  const yumoji = useQuery<GetYumojiRemoteParts>(GQL_QUERY_GET_YUMOJI_REMOTE_PARTS, {
    variables: { height: AVATAR_HEIGHT, width: AVATAR_WIDTH },
    fetchPolicy: "no-cache",
  });
  const tryOn = useQuery<GetYumojiRemoteFittingRoom, GetYumojiRemoteFittingRoomVariables>(
    GQL_QUERY_GET_YUMOJI_REMOTE_FITTING_ROOM,
    {
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
    }
  );

  return {
    yumoji: yumoji?.data?.avatar,
    fittingRoom:
      tryOn?.data?.getYumojiRemoteFittingRoom || ({} as GetYumojiRemoteFittingRoom["getYumojiRemoteFittingRoom"]),
  };
}
