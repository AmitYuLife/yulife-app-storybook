import { memo, useMemo, useState } from "react";
import { useQuery } from "@apollo/client";
import { AchievementsScreen } from "@components/screens";
import { gql } from "@graphql/__generated";
import { toCapitalLetter } from "@utils";

interface IProps {
  selectedSlot?: number;
  currentViewedUserId?: string;
  isInspectingUser?: boolean;
}

const AchievementsContainer = ({ selectedSlot, currentViewedUserId, isInspectingUser }: IProps) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { data, loading, refetch } = useQuery(gql("GetMobileGameUserAchievementsDocument"), {
    fetchPolicy: "network-only",
    ...(currentViewedUserId ? { variables: { userId: currentViewedUserId } } : {}),
  });

  const allAchievements = useMemo(() => {
    const equippedAchievements = data?.getMobileGameUserAchievements?.equippedAchievements || [];
    const achievements = data?.getMobileGameUserAchievements?.achievements || [];
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

  const slotsAvailable = useMemo(() => {
    const numberOfSlots = data?.getMobileGameUserAchievements?.numberOfSlots || 0;
    const available = [];
    for (let i = 1; i <= numberOfSlots; i++) {
      const slotTaken = data?.getMobileGameUserAchievements?.equippedAchievements?.find((a) => a.slot === i);
      if (!slotTaken) {
        available.push(i);
      }
    }

    return available;
  }, [data?.getMobileGameUserAchievements?.numberOfSlots, data?.getMobileGameUserAchievements?.equippedAchievements]);

  return (
    <AchievementsScreen
      achievementPoints={data?.getMobileGameUserAchievements?.achievementPoints}
      slotsAvailable={slotsAvailable}
      selectedSlot={selectedSlot}
      achievements={filteredAchievements}
      categories={achievementsCategories}
      isLoading={filteredAchievements.length === 0 || loading}
      onRefresh={refetch}
      isInspectingUser={isInspectingUser}
    />
  );
};

export default memo(AchievementsContainer);
