import YuScreen from "@screens/member/yu-screen/yu-screen";
import React, { useCallback } from "react";
import { connect, useDispatch } from "react-redux";
import { IMainTabsProps } from "@navigation/root";
import { IReduxState } from "@redux/_core/reducers";
import { getCurrentLevel } from "@redux/levels/levels.selectors";
import { getUserName } from "@redux/user/user.selectors";
import { GQL_QUERY_GET_YULIFER } from "../../../../graphql/yuscreen/getYulifer.gql";
import {
  GetYulifer,
  GetYulifer_getYulifer_products,
  GetYulifer_getYulifer_products_employer,
  GetYulifer_getYulifer_products_personal,
} from "../../../../graphql/_core/schema/GetYulifer";
import { ProductType } from "./yu-screen-products.container";
import { getAvatarForYuscreen } from "@redux/avatar/avatar.selectors";
import { YuScreenIntro } from "../../../screens/member/yu-screen/intro-yuscreen/intro-yuscreen";
import { getShowYuscreenIntro } from "@redux/onboarding/onboarding.selectors";
import { setYuscreenIntroShown } from "@redux/onboarding/onboarding.actions";
import { YuScreenLayout } from "@components/screens/member/yu-screen/yu-screen-layout";
import { YuScreenLoading } from "@components/screens/member/yu-screen/yu-screen-loading";
import useCacheFirstAndNetworkOnAppearQuery from "@services/hooks/useCacheFirstAndNetworkOnAppearQuery";
import { getFIBState } from "@redux/product/product.selectors";
import { resetFIBUnderwritingJourney } from "@redux/product/product.actions";
import {
  navigateToProductScreen,
  navigateToAvatarCreationScreen,
  navigateToAvatarModal,
  navigateToEarnRateScreen,
} from "./yu-screen.helpers";

interface IProps {
  componentId: string;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;

type Props = IProps & IMainTabsProps & ConnectedState;

function YuScreenContainer({
  currentLevel,
  userName,
  componentId,
  onLeftMenuPress,
  showYuscreenIntro,
  fibState,
}: Props) {
  const dispatch = useDispatch();
  const { data } = useCacheFirstAndNetworkOnAppearQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, componentId);

  const resetFIBJourney = useCallback(() => {
    dispatch(resetFIBUnderwritingJourney());
  }, [dispatch]);

  const handleProductPress = useCallback(
    (
      product: GetYulifer_getYulifer_products_employer | GetYulifer_getYulifer_products_personal,
      productType: ProductType
    ) => () => {
      navigateToProductScreen({ componentId, productType, product, fibState, resetFIBJourney });
    },
    [componentId, fibState, resetFIBJourney]
  );

  const handleUnlockPress = useCallback(() => {
    navigateToAvatarCreationScreen(componentId, "Create your Yumoji");
  }, [componentId]);

  const handleEditPress = useCallback(() => {
    navigateToAvatarModal({
      componentId,
      heading: "Edit your Yumoji",
      subheading: "Do you want to edit your Yumoji?",
    });
  }, [componentId]);

  const handleEarnRatePress = useCallback(() => {
    navigateToEarnRateScreen(componentId);
  }, [componentId]);
  let avatarRemoteFile = null as string;
  let earnRate = 1;
  let products: GetYulifer_getYulifer_products = {
    employer: [],
    personal: [],
    charms: [],
  };

  const isAvatarCreated = !!data?.getYulifer?.isAvatarCreated;

  if (data && data.getYulifer) {
    avatarRemoteFile = data.getYulifer.avatarRemoteFiles?.pngFull;
    products = data.getYulifer.products;
    earnRate = data.getYulifer.earnRate ? data.getYulifer.earnRate : earnRate;
  }

  if (showYuscreenIntro) {
    return <YuScreenIntro setYuscreenIntroShown={() => dispatch(setYuscreenIntroShown())} />;
  }

  if (!data && !showYuscreenIntro) {
    return (
      <YuScreenLayout onLeftMenuPress={onLeftMenuPress}>
        <YuScreenLoading />
      </YuScreenLayout>
    );
  }

  return (
    <YuScreen
      level={currentLevel}
      userName={userName}
      isAvatarCreated={isAvatarCreated}
      avatarUrl={avatarRemoteFile}
      products={products}
      earnRate={earnRate}
      onProductPress={handleProductPress}
      onLeftMenuPress={onLeftMenuPress}
      onUnlockPress={handleUnlockPress}
      onEditPress={handleEditPress}
      onEarnRatePress={handleEarnRatePress}
    />
  );
}

const mapStateToProps = (state: IReduxState) => ({
  currentLevel: getCurrentLevel(state),
  userName: getUserName(state),
  avatarFromLocal: getAvatarForYuscreen(state),
  showYuscreenIntro: getShowYuscreenIntro(state),
  fibState: getFIBState(state),
});

export default connect<ConnectedState>(mapStateToProps)(YuScreenContainer);
