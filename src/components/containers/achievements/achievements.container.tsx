import { memo, useMemo, useState } from "react";
import { useQuery } from "@apollo/client";
import { AchievementsScreen } from "@components/screens";
import { gql } from "@graphql/__generated";

import { toCapitalLetter } from "@utils";

interface IProps {
  selectedSlot?: number;
}

const AchievementsContainer = ({ selectedSlot }: IProps) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { data, loading, refetch } = useQuery(gql("GetMobileGameUserAchievementsDocument"), {
    fetchPolicy: "network-only",
  });

  const allAchievements = useMemo(() => {
    const achievements = data?.getMobileGameUserAchievements?.achievements || [];
    const equippedAchievements = data?.getMobileGameUserAchievements?.equippedAchievements || [];
    const lockedAchievements = data?.getMobileGameUserAchievements?.lockedAchievements || [];

    return [...equippedAchievements, ...achievements, ...lockedAchievements];
  }, [data?.getMobileGameUserAchievements]);

  const achievementsCategories = useMemo(() => {
    const categories = data?.getMobileGameUserAchievements?.categories || [];

    return categories.map((category, index) => ({
      value: toCapitalLetter(category.name),
      isSelected: selectedCategory === category.key || (selectedCategory === null && index === 0),
      onPress: () => setSelectedCategory(index === 0 ? null : category.key),
    }));
  }, [data?.getMobileGameUserAchievements, selectedCategory]);

  const filteredAchievements = useMemo(() => {
    if (selectedCategory === null) {
      return allAchievements;
    }

    return allAchievements.filter((a) => a.type === selectedCategory.toLowerCase());
  }, [allAchievements, selectedCategory]);

  return (
    <AchievementsScreen
      achievementPoints={data?.getMobileGameUserAchievements?.achievementPoints}
      slotsTaken={data?.getMobileGameUserAchievements?.equippedAchievements.length}
      achievements={filteredAchievements}
      categories={achievementsCategories}
      selectedSlot={selectedSlot}
      isLoading={filteredAchievements.length === 0 || loading}
      onRefresh={refetch}
    />
  );
};

export default memo(AchievementsContainer);
