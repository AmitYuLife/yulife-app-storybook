import { memo, useEffect, useMemo, useState } from "react";
import { useQuery } from "@apollo/client";
import { AchievementsScreen } from "@components/screens";
import { gql } from "@graphql/__generated";
import { toCapitalLetter } from "@utils";
import { showYuModal } from "@navigation/root";
import { MODALS } from "@navigation/constants";

interface IProps {
  currentViewedUserId?: string;
  isInspectingUser?: boolean;
}

const AchievementsContainer = ({ currentViewedUserId, isInspectingUser }: IProps) => {
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

  const unseenAchievements = useMemo(() => {
    return (data?.getMobileGameUserAchievements?.achievements || []).filter((achievement) => !achievement.viewed);
  }, [data?.getMobileGameUserAchievements?.achievements]);

  useEffect(() => {
    if (unseenAchievements.length > 0 && !isInspectingUser) {
      showYuModal({
        component: {
          id: MODALS.unlockedAchievementsModal,
          name: MODALS.unlockedAchievementsModal,
          passProps: { achievements: unseenAchievements },
        },
      });
    }
  }, [unseenAchievements, isInspectingUser]);

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
      achievements={filteredAchievements}
      categories={achievementsCategories}
      isLoading={filteredAchievements.length === 0 || loading}
      onRefresh={refetch}
      isInspectingUser={isInspectingUser}
    />
  );
};

export default memo(AchievementsContainer);
