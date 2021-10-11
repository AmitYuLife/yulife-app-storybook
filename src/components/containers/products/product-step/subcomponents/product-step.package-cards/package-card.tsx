import React, { memo, useCallback, useContext, useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Colours, Style } from "@styles";
import { ContentItemPackageCards_packageCards, GetProductSlotItemBackgroundUrls } from "@graphql/_core/schema";
import { CoverType, YuWorld } from "@graphql/_core/schema/globalTypes";
import { showEarnRateOverlay } from "@components/containers/member/yu/navigation/showEarnRateOverlay";
import { PackageCardPerks } from "@molecules";
import PackageCardHeader from "./package-card-header";
import YuCoinPowerMini from "./yucoin-power-mini";
import { SlotIcon } from "../product-step.slot-icon";
import { ProductStepContext } from "../../product-step.context";
import { LOCAL_ANSWER_KEY } from "../../utils/localAnswerKeys";
import { useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_PRODUCT_SLOT_ITEM_BACKGROUND_URLS } from "@graphql/yuscreen/getProductSlotItemBackgroundUrls.gql";

interface OwnProps {
  width: number;
}

type Props = ContentItemPackageCards_packageCards & OwnProps;

export const PackageCard = memo((props: Partial<Props>) => {
  const borderColor = useMemo(() => ({ borderColor: getBorderColor(props.coverType) }), [props.coverType]);
  const { dynamicData, customerProductId } = useContext(ProductStepContext);
  const { data: productSlotItemBackgroundUrls } = useQuery<GetProductSlotItemBackgroundUrls>(
    GQL_QUERY_GET_PRODUCT_SLOT_ITEM_BACKGROUND_URLS
  );

  const handlePressYuCoinPower = useCallback(() => {
    if (!productSlotItemBackgroundUrls?.getProductSlotItemBackgroundUrls?.length) {
      return;
    }

    const backgroundUrl = productSlotItemBackgroundUrls.getProductSlotItemBackgroundUrls.find(
      ({ coverType }) => coverType === dynamicData[LOCAL_ANSWER_KEY.CoverType]
    )?.image?.uri;

    const coverType = dynamicData[LOCAL_ANSWER_KEY.CoverType] as CoverType;
    const worldId = dynamicData[LOCAL_ANSWER_KEY.WorldId] as YuWorld;
    showEarnRateOverlay({
      slotIcon: (
        <SlotIcon
          coverType={coverType}
          worldId={worldId}
          backgroundUrl={backgroundUrl}
          size={Style.adjust(40)}
          customerProductId={customerProductId}
        />
      ),
      customerProductId,
      coverType: dynamicData[LOCAL_ANSWER_KEY.CoverType] as CoverType,
    });
  }, [dynamicData, productSlotItemBackgroundUrls]);

  return (
    <View style={[styles.centerContent, { width: props.width }]}>
      <View style={[styles.wrapper, borderColor]}>
        <View style={styles.bgWhite} />
        <PackageCardHeader width={props.width} coverType={props.coverType} header={props.header} />
        <View style={styles.container}>
          <View style={styles.yucoin}>
            <YuCoinPowerMini coinValue={props.bonusEarnRate} onPress={handlePressYuCoinPower} />
          </View>
          <Perks powers={props.powers} />
        </View>
      </View>
    </View>
  );
});

const BORDER_RADIUS = Style.adjust(16);

const styles = StyleSheet.create({
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Style.adjust(4),
  },
  wrapper: {
    borderRadius: BORDER_RADIUS,
    width: "100%",
  },
  container: {
    paddingHorizontal: Style.adjust(24),
    paddingTop: Style.adjust(24),
    paddingBottom: Style.adjust(16),
  },
  bgWhite: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: BORDER_RADIUS,
    backgroundColor: Colours.neutral.white,
  } as ViewStyle,
  yucoin: {
    marginBottom: Style.adjust(16),
    justifyContent: "center",
    alignItems: "center",
  },
});

const Perks = ({ powers }: { powers: ContentItemPackageCards_packageCards["powers"] }) => {
  return (
    <View>
      {powers.map((perk, index: number) => (
        <PackageCardPerks key={index} {...perk} />
      ))}
    </View>
  );
};

const getBorderColor = (coverType: CoverType) => {
  if (coverType === CoverType.epic) {
    return Colours.products.fib.epic;
  }

  if (coverType === CoverType.rare) {
    return Colours.products.fib.rare;
  }

  return Colours.products.fib.common;
};
