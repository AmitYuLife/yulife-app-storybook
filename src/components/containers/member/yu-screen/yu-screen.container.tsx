import YuScreen from "@screens/member/yu-screen/yu-screen";
import * as React from "react";
import { Navigation } from "react-native-navigation";
import { connect, useDispatch } from "react-redux";
import { ROUTES, MODALS } from "@navigation/constants";
import { IMainTabsProps } from "@navigation/root";
import { IReduxState } from "@redux/_core/reducers";
import { getCurrentLevel, getHasNotification } from "@redux/levels/levels.selectors";
import { getUserName } from "@redux/user/user.selectors";
import { GQL_QUERY_GET_YULIFER } from "../../../../graphql/yuscreen/getYulifer.gql";
import {
  GetYulifer,
  GetYulifer_getYulifer_products,
  GetYulifer_getYulifer_products_employer,
  GetYulifer_getYulifer_products_personal,
} from "../../../../graphql/_core/schema/GetYulifer";
import { ProductType } from "./yu-screen-products.container";
import { getTotalCoins } from "../../../../redux/coins/coins.selectors";
import { getAvatarForYuscreen } from "../../../../redux/avatar/avatar.selectors";
import { AvatarBuilderHeading } from "@screens/member/yu-screen/avatar-builder/avatar.types";
import { YuScreenIntro } from "../../../screens/member/yu-screen/intro-yuscreen/intro-yuscreen";
import { getShowYuscreenIntro } from "../../../../redux/onboarding/onboarding.selectors";
import { setYuscreenIntroShown } from "../../../../redux/onboarding/onboarding.actions";
import { YuScreenLayout } from "@components/screens/member/yu-screen/yu-screen-layout";
import { YuScreenLoading } from "@components/screens/member/yu-screen/yu-screen-loading";
import useCacheFirstAndNetworkOnAppearQuery from "@services/hooks/useCacheFirstAndNetworkOnAppearQuery";

interface IProps {
  componentId: string;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;

type Props = IProps & IMainTabsProps & ConnectedState;

function YuScreenContainer({
  currentLevel,
  userName,
  componentId,
  totalCoins,
  onLeftMenuPress,
  showYuscreenIntro,
}: Props) {
  const dispatch = useDispatch();
  const { data } = useCacheFirstAndNetworkOnAppearQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, componentId);

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
      <YuScreenLayout onLeftMenuPress={onLeftMenuPress} totalCoins={totalCoins}>
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
      onProductPress={(
        product: GetYulifer_getYulifer_products_employer | GetYulifer_getYulifer_products_personal,
        productType: ProductType
      ) => () => {
        navigateToProductScreen(componentId, productType, product);
      }}
      totalCoins={totalCoins}
      onLeftMenuPress={onLeftMenuPress}
      onUnlockPress={() => {
        navigateToAvatarCreationScreen(componentId, "Create your Yumoji");
      }}
      onEditPress={() => {
        navigateToAvatarModal({
          componentId,
          heading: "Edit your Yumoji",
          subheading: "Do you want to edit your Yumoji?",
        });
      }}
      onEarnRatePress={() => navigateToEarnRateScreen(componentId)}
    />
  );
}

const mapStateToProps = (state: IReduxState) => ({
  currentLevel: getCurrentLevel(state),
  userName: getUserName(state),
  hasNotification: getHasNotification(state),
  totalCoins: getTotalCoins(state),
  avatarFromLocal: getAvatarForYuscreen(state),
  showYuscreenIntro: getShowYuscreenIntro(state),
});

export default connect<ConnectedState>(mapStateToProps)(YuScreenContainer);

function navigateToProductScreen(
  componentId: string,
  productType: ProductType,
  product: GetYulifer_getYulifer_products_employer | GetYulifer_getYulifer_products_personal
) {
  if (productType === "personal" && product.active) {
    return Navigation.push(componentId, {
      component: {
        id: ROUTES.fib,
        name: ROUTES.fib,
      },
    });
  }

  return Navigation.push(componentId, {
    component: {
      id: ROUTES.yuScreenProducts,
      name: ROUTES.yuScreenProducts,
      passProps: {
        product,
        productType,
      },
    },
  });
}

function navigateToAvatarCreationScreen(componentId: string, heading: AvatarBuilderHeading) {
  Navigation.push(componentId, {
    component: {
      id: ROUTES.avatarCreation,
      name: ROUTES.avatarCreation,
      passProps: {
        heading,
      },
    },
  });
}

function navigateToEarnRateScreen(componentId: string) {
  Navigation.push(componentId, {
    component: {
      id: ROUTES.yuScreenEarnRate,
      name: ROUTES.yuScreenEarnRate,
    },
  });
}

interface INavigateToAvatarModal {
  componentId: string;
  heading: AvatarBuilderHeading;
  subheading: string;
}
function navigateToAvatarModal({ componentId, heading, subheading }: INavigateToAvatarModal) {
  Navigation.showModal({
    component: {
      id: MODALS.generic,
      name: MODALS.generic,
      passProps: {
        onPress: () => {
          Navigation.dismissModal(MODALS.generic);
          navigateToAvatarCreationScreen(componentId, heading);
        },
        onPressSecondary: () => {
          Navigation.dismissModal(MODALS.generic);
        },
        heading,
        subheading,
        ctaLabel: "Yes Please",
        ctaLabelSecondary: "No Thanks",
      },
    },
  });
}
