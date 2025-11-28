import { ApolloCache, DefaultContext, FetchResult, MutationFunctionOptions } from "@apollo/client";
import { CollectAwardMutation, Exact } from "@graphql/__generated";
import { MODALS } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import Logger from "@services/logging/logger";
import { VoidFunction } from "@utils";
import { useDispatch } from "react-redux";

interface UseSubmitHandlerProps {
  streakAwardId: string;
  onPressCtaPrimary?: VoidFunction;
  setLoading: (isLoading: boolean) => void;
  collectAward: (
    options?: MutationFunctionOptions<
      CollectAwardMutation,
      Exact<{
        awardId: string;
      }>,
      DefaultContext,
      ApolloCache<any>
    >
  ) => Promise<FetchResult<CollectAwardMutation>>;
}

export function useSubmitHandler({
  streakAwardId,
  onPressCtaPrimary,
  setLoading,
  collectAward,
}: UseSubmitHandlerProps) {
  const dispatch = useDispatch();
  const submitHandler = buildSubmitHandler({ setLoading, streakAwardId, collectAward, dispatch, onPressCtaPrimary });

  return submitHandler;
}

type BuildSubmitHandlerProps = Pick<
  UseSubmitHandlerProps,
  "setLoading" | "collectAward" | "onPressCtaPrimary" | "streakAwardId"
> & {
  dispatch: ReturnType<typeof useDispatch>;
};

function buildSubmitHandler({
  setLoading,
  collectAward,
  streakAwardId,
  dispatch,
  onPressCtaPrimary,
}: BuildSubmitHandlerProps) {
  return async () => {
    try {
      if (streakAwardId) {
        setLoading(true);
        const result = await collectAward({
          variables: {
            awardId: streakAwardId,
          },
        });

        if (result?.data?.collectAward) {
          dispatch(
            getUserDataStart({
              types: [AppDataType.coinLedger, AppDataType.todayActivity, AppDataType.activeStreak],
            })
          );
        }
      }
    } catch (error) {
      Logger.error(error, { location: "streaks useSubmitHandler" });
    } finally {
      Navigation.dismissModal(MODALS.streaks);
      onPressCtaPrimary?.();
      setLoading(false);
    }
  };
}
