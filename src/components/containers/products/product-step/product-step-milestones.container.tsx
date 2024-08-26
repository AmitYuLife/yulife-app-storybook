import React, { memo, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import SduiStatic from "@components/containers/sdui-static/sdui-static.container";
import { NavBar } from "@organisms";
import { updateCurrentRoute } from "@redux/app/app.actions";
import { useDispatch } from "react-redux";

const ProductStepMilestonesContainer = () => {
  const { data } = useQuery(gql("GetMobileRewardsGoalProductMilestonesDocument"));
  const goalProductAction = data?.getMobileRewardsGoalProductMilestones?.goalProductMilestones?.sduiAction;
  const payloadObject = JSON.parse(goalProductAction?.payload || "{}");
  const dispatch = useDispatch();

  useEffect(() => {
    if (payloadObject?.props?.stepId) {
      dispatch(updateCurrentRoute({ route: payloadObject?.props?.stepId }));
    }
  }, [dispatch, payloadObject?.props?.stepId]);

  return (
    <>
      <SduiStatic
        componentId={payloadObject?.props?.stepId}
        stepId={payloadObject?.props?.stepId}
        dynamicId={payloadObject?.props?.dynamicId}
      />
      <NavBar activeIndex={4} />
    </>
  );
};

export default memo(ProductStepMilestonesContainer);
