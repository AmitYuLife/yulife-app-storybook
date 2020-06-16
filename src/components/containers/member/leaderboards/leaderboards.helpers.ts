// used for debugging!

import { GetLeaderboard } from "@graphql/_core/schema";

interface GetItems {
  data: GetLeaderboard;
  forcedIndex: number;
}

export function getItems({ data, forcedIndex }: GetItems) {
  if (data?.getLeaderboard) {
    const setIndexMap = data.getLeaderboard.map((item, index) => ({
      ...item,
      index: item.id === `lead_${data?.getCurrentUser?.id}` ? forcedIndex : index,
    }));
    return setIndexMap.sort((a, b) => {
      if (a.index < b.index) {
        return -1;
      }
      if (a.index > b.index) {
        return 1;
      }
      return 0;
    });
  }
  return data?.getLeaderboard || [];
}
