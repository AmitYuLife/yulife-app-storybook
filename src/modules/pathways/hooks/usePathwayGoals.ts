import { useCallback, useMemo, useState } from "react";
import moment from "moment";
import { useMutation, useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { IGoalCompletionBannerEvent } from "../types/pathway-goal.types";

const pickBannerMessageKey = (newCompletedCount: number, total: number): IGoalCompletionBannerEvent["messageKey"] => {
  if (newCompletedCount === 1) {
    return "screens.pathways.goals.banner.first_completed";
  }

  if (newCompletedCount === total) {
    return "screens.pathways.goals.banner.default";
  }

  return "screens.pathways.goals.banner.halfway";
};

export const usePathwayGoals = () => {
  const { data } = useQuery(gql("GetUserPathwayGoalsSectionDocument"), {
    fetchPolicy: "cache-and-network",
  });

  const [markGoalCompleted, { loading: isCompletingGoal }] = useMutation(gql("MarkPathwayGoalCompletedDocument"));

  const [bannerEvent, setBannerEvent] = useState<IGoalCompletionBannerEvent | null>(null);

  const section = data?.getUserPathwayGoalsSection;
  const goals = useMemo(() => section?.goals ?? [], [section?.goals]);

  const daysLeft = useMemo(() => {
    if (!section?.cycleEndsAt) {
      return 0;
    }

    return Math.max(moment(section.cycleEndsAt).startOf("day").diff(moment().startOf("day"), "days"), 0);
  }, [section?.cycleEndsAt]);

  const completeGoal = useCallback(
    (goalId: string) => {
      const target = goals.find((g) => g.id === goalId);
      if (!target || target.isCompleted) {
        return;
      }

      const total = goals.length;
      const newCompleted = goals.filter((g) => g.isCompleted).length + 1;

      setBannerEvent({
        id: `${goalId}-${Date.now()}`,
        messageKey: pickBannerMessageKey(newCompleted, total),
      });

      markGoalCompleted({
        variables: { goalId },
        optimisticResponse: {
          markPathwayGoalCompleted: {
            __typename: "MarkPathwayGoalCompletedResponse",
            success: true,
            goal: {
              __typename: "PathwayGoal",
              id: target.id,
              title: target.title,
              type: target.type,
              isCompleted: true,
              icon: target.icon ? { __typename: "RemoteImage", id: target.icon.id, uri: target.icon.uri } : null,
            },
          },
        },
        update: (cache) => {
          cache.modify({
            id: cache.identify({ __typename: "PathwayGoal", id: goalId }),
            fields: { isCompleted: () => true },
          });
        },
      }).catch(() => {});
    },
    [goals, markGoalCompleted]
  );

  const dismissBannerEvent = useCallback((eventId: string) => {
    setBannerEvent((current) => (current?.id === eventId ? null : current));
  }, []);

  return {
    goals,
    daysLeft,
    hasData: !!section,
    completeGoal,
    isCompletingGoal,
    bannerEvent,
    dismissBannerEvent,
  };
};
