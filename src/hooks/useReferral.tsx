import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { UserReferral } from "@organisms";
import { getModalState, getRouteState } from "@redux/app/app.selectors";
import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";

export const useReferral = (referralAmount: number) => {
  const activeModal = useSelector(getModalState);
  const activeRoute = useSelector(getRouteState);

  const goToReferralInformation = useCallback(async () => {
    if (activeModal) {
      await Navigation.dismissModal(activeModal);
    }

    await Navigation.push(activeRoute, {
      component: {
        id: ROUTES.referralInformation,
        name: ROUTES.referralInformation,
      },
    });
  }, [activeModal, activeRoute]);

  const referralComponent = useMemo(
    () => <UserReferral onReferralsButtonPress={goToReferralInformation} referralAmount={referralAmount} />,
    [goToReferralInformation, referralAmount]
  );

  return {
    referralComponent,
    goToReferralInformation,
  };
};
