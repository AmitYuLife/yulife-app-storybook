import * as React from "react";
import { Image as RNImage, ImageRequireSource, ScrollView, View } from "react-native";
import { connect } from "react-redux";
import { IReduxState } from "@redux/_core/reducers";
import { getCurrentLevel } from "@redux/levels/levels.selectors";
import { useDebouncedQuery } from "@services/hooks/useDebouncedQuery";
import { GetReferralBackground, GetReferralBackground_getReferralBackground } from "@graphql/_core/schema";
import { GQL_QUERY_GET_REFERRAL_BACKGROUND } from "@graphql/referrals";
import { MENU_ITEM, MENU_SCREEN } from "@ids";
import { Button, CloseSvg, Image, Pad } from "@atoms";
import Logo from "@atoms/logo";
import { TextTemplate } from "@atoms/text/text-template";
import { TouchableOpacityWithDelay } from "@molecules";
import { Colours, Style } from "@styles";
import styles, { SCROLL_PADDING } from "./menu.screen.styles";

export interface IMenuLink {
  condition?: boolean;
  label: string;
  onPress: () => void;
  source?: ImageRequireSource;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface IProps extends ConnectedState {
  links: IMenuLink[];
  onPressClose: () => void;
  onDebugPress: (() => void) | null;
  onInvitePress: (() => void) | null;
  version: string;
  showReferralButton: boolean;
}

const HIT_SLOP = { left: 8, right: 8 };

const MenuScreen = ({
  currentLevel,
  onDebugPress,
  onInvitePress,
  onPressClose,
  links,
  version,
  showReferralButton,
}: IProps) => {
  const [getReferralBackground, { data, loading }] = useDebouncedQuery<
    GetReferralBackground,
    GetReferralBackground_getReferralBackground
  >(GQL_QUERY_GET_REFERRAL_BACKGROUND, {
    fetchPolicy: "cache-and-network",
  });

  React.useEffect(() => {
    if (showReferralButton) {
      getReferralBackground();
    }
  }, [showReferralButton, currentLevel]);

  return (
    <>
      <View style={styles.wrapper} testID={MENU_SCREEN}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContentContainer}
        >
          <Pad height={SCROLL_PADDING} />
          <Logo scale={0.37} type="full" />
          <DebugAndVersion onDebugPress={onDebugPress} version={version} />
          <Links links={links} />
          <View style={styles.bottomPadding} />
        </ScrollView>
      </View>
      <TouchableOpacityWithDelay onPress={onPressClose} style={styles.closeWrapper}>
        <CloseSvg />
      </TouchableOpacityWithDelay>
      {!showReferralButton ? null : (
        <ReferralButton loading={loading} uri={data?.getReferralBackground.uri} onInvitePress={onInvitePress} />
      )}
    </>
  );
};

interface ReferralButtonProps {
  loading: boolean;
  uri: string;
  onInvitePress: () => void;
}

const ReferralButton = ({ loading, uri, onInvitePress }: ReferralButtonProps) => (
  <View pointerEvents="box-none" style={styles.referralSection}>
    <View style={styles.referralBackgroundWrapper}>
      {loading || !uri ? null : (
        <Image
          width={Style.DEVICE_WIDTH}
          source={{
            uri,
          }}
        />
      )}
    </View>
    <View style={styles.referralButtonWrapper}>
      <Button label="Invite a colleague" size="Fill" onPress={onInvitePress} />
    </View>
  </View>
);

const Links = ({ links }: { links: IProps["links"] }) => (
  <>
    {!links
      ? null
      : links.map(({ source, onPress, label, condition }, index) =>
          !condition ? null : (
            <View key={`menu-${index}`}>
              <TouchableOpacityWithDelay
                style={styles.itemWrapper}
                onPress={onPress}
                testID={MENU_ITEM(label)}
                hitSlop={HIT_SLOP}
              >
                {!source ? null : (
                  <View style={styles.iconWrapper}>
                    <RNImage source={source} />
                  </View>
                )}
                <TextTemplate type="l1">{label}</TextTemplate>
              </TouchableOpacityWithDelay>
            </View>
          )
        )}
  </>
);

const DebugAndVersion = ({ onDebugPress, version }: Pick<IProps, "onDebugPress" | "version">) => (
  <TouchableOpacityWithDelay
    style={styles.debugVersionWrapper}
    onPress={onDebugPress}
    activeOpacity={onDebugPress ? 0.7 : 1}
    hitSlop={HIT_SLOP}
  >
    <TextTemplate color={Colours.neutral.n400} type="l3">{`Version ${version}${
      onDebugPress ? " | " : ""
    }`}</TextTemplate>
    {!onDebugPress ? null : (
      <TextTemplate color={Colours.neutral.n400} type="l3" underline={true}>
        Debug menu
      </TextTemplate>
    )}
  </TouchableOpacityWithDelay>
);

const mapStateToProps = (state: IReduxState) => ({
  currentLevel: getCurrentLevel(state),
});

export default connect(mapStateToProps)(MenuScreen);
