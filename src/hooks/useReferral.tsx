import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { UserReferral } from "@organisms";
import { getRouteState } from "@redux/app/app.selectors";
import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";

export const useReferral = (referralAmount: number) => {
  const activeRoute = useSelector(getRouteState);

  const goToReferralInformation = useCallback(async () => {
    await Navigation.push(activeRoute, {
      component: {
        id: ROUTES.referralInformation,
        name: ROUTES.referralInformation,
      },
    });
  }, [activeRoute]);

  const referralComponent = useMemo(
    () => <UserReferral onReferralsButtonPress={goToReferralInformation} referralAmount={referralAmount} />,
    [goToReferralInformation, referralAmount]
  );

  return {
    referralComponent,
    goToReferralInformation,
  };
};
