import { GetLeaderboard } from "@graphql/_core/schema";

interface GetItems {
  data?: GetLeaderboard;
  forcedIndex: number;
  userId: string;
}

export function debug_getItems({ data, forcedIndex, userId }: GetItems) {
  if (!data || !data.getLeaderboard?.length) {
    return [];
  }

  const setIndexMap = data.getLeaderboard.map((item, index) => ({
    ...item,
    index: item.id === `lead_${userId}` ? forcedIndex : index,
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
