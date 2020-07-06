import YuScreen from "@screens/member/yu-screen/yu-screen";
import * as React from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { ROUTES, MODALS } from "@navigation/constants";
import { IMainTabsProps } from "@navigation/root";
import { IReduxState } from "@redux/_core/reducers";
import { getCurrentLevel, getHasNotification } from "@redux/levels/levels.selectors";
import { getUserName } from "@redux/user/user.selectors";
import { useQuery } from "@apollo/react-hooks";
import { transformAvatar } from "../../../screens/member/yu-screen/avatar-builder/avatar-builder.helper";
import { IBodyItem } from "@redux/avatar/avatar.reducer";
import { GQL_QUERY_GET_YULIFER } from "../../../../graphql/yuscreen/getYulifer.gql";
import { saveAvatar } from "@redux/avatar/avatar.actions";
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

interface IProps {
  componentId: string;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = IProps & IMainTabsProps & ConnectedState & ConnectedDispatch;

function YuScreenContainer({
  currentLevel,
  userName,
  hasNotification,
  componentId,
  saveAvatar: dispatchSaveAvatar,
  totalCoins,
  avatarFromLocal,
  onLeftMenuPress,
  showYuscreenIntro,
  setYuscreenIntroShown,
}: Props) {
  const { data, loading, refetch } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER);
  let avatarFromServer: {
    head: IBodyItem;
    eyes: IBodyItem;
    hair: IBodyItem;
    body: IBodyItem;
    pants: IBodyItem;
    boots: IBodyItem;
    chest: IBodyItem;
    gloves: IBodyItem;
    facialHair: IBodyItem;
    glasses: IBodyItem;
  };
  let earnRate = 1;
  let products: GetYulifer_getYulifer_products = {
    employer: [],
    personal: [],
    charms: [],
  };

  const isAvatarCreated = !!data?.getYulifer?.isAvatarCreated;

  if (data && data.getYulifer) {
    const avatarData = data.getYulifer.avatar;

    if (!!avatarData) {
      avatarFromServer = transformAvatar(avatarData);
    }

    products = data.getYulifer.products;
    earnRate = data.getYulifer.earnRate ? data.getYulifer.earnRate : earnRate;
  }

  const [activeProducts, totalEarnRate] = getActiveProductsAndEarnRate(products, earnRate);

  return showYuscreenIntro ? (
    <YuScreenIntro setYuscreenIntroShown={setYuscreenIntroShown} />
  ) : (
    <YuScreen
      level={currentLevel}
      userName={userName}
      hasNotification={hasNotification}
      isAvatarCreated={isAvatarCreated}
      avatar={avatarFromServer}
      avatarFromLocal={avatarFromLocal}
      products={products}
      loading={loading}
      earnRate={totalEarnRate}
      onProductPress={(
        product: GetYulifer_getYulifer_products_employer | GetYulifer_getYulifer_products_personal,
        productType: ProductType
      ) => () => {
        navigateToProductScreen(componentId, productType, product);
      }}
      totalCoins={totalCoins}
      onLeftMenuPress={onLeftMenuPress}
      onUnlockPress={() => {
        navigateToAvatarCreationScreen(refetch, componentId, "Create your avatar");
      }}
      onEditPress={() => {
        dispatchSaveAvatar(avatarFromServer);
        navigateToAvatarModal({
          refetch,
          componentId,
          heading: "Edit your avatar",
          subheading: "Do you want to edit your avatar?",
        });
      }}
      onEarnRatePress={() => {
        navigateToEarnRateScreen(componentId, activeProducts, totalEarnRate);
      }}
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

const mapDispatchToProps = {
  saveAvatar,
  setYuscreenIntroShown,
};

export default connect<ConnectedState, ConnectedDispatch>(mapStateToProps, mapDispatchToProps)(YuScreenContainer);

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

function navigateToAvatarCreationScreen(refetch: () => void, componentId: string, heading: AvatarBuilderHeading) {
  Navigation.push(componentId, {
    component: {
      id: ROUTES.avatarCreation,
      name: ROUTES.avatarCreation,
      passProps: {
        refetch,
        heading,
      },
    },
  });
}

function navigateToEarnRateScreen(componentId: string, products: GetYulifer_getYulifer_products, earnRate: number) {
  Navigation.push(componentId, {
    component: {
      id: ROUTES.yuScreenEarnRate,
      name: ROUTES.yuScreenEarnRate,
      passProps: {
        products,
        earnRate,
      },
    },
  });
}

interface INavigateToAvatarModal {
  refetch: () => void;
  componentId: string;
  heading: AvatarBuilderHeading;
  subheading: string;
}
function navigateToAvatarModal({ refetch, componentId, heading, subheading }: INavigateToAvatarModal) {
  Navigation.showModal({
    component: {
      id: MODALS.generic,
      name: MODALS.generic,
      passProps: {
        onPress: () => {
          Navigation.dismissModal(MODALS.generic);
          navigateToAvatarCreationScreen(refetch, componentId, heading);
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

function getActiveProductsAndEarnRate(
  products: GetYulifer_getYulifer_products,
  earnRate: number
): [GetYulifer_getYulifer_products, number] {
  const activeProducts: GetYulifer_getYulifer_products = {
    employer: [],
    charms: [],
    personal: [],
  };
  let totalEarnRate = 0;

  Object.keys(activeProducts).forEach((productType: keyof GetYulifer_getYulifer_products) => {
    products[productType].forEach((product) => {
      if (product.active) {
        activeProducts[productType].push(product);
        if (productType !== "charms") {
          totalEarnRate += product.earnRate || 0;
        }
      }
    });
  });

  return [activeProducts, totalEarnRate || earnRate];
}
