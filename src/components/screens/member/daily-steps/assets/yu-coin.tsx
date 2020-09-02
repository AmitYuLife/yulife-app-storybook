import * as React from "react";
import { View } from "react-native";
import { Glow, Shine, Static, GiraffeAnimated, GiraffeStatic } from "./yu-coin-subcomponents";
import styles, { svgSpecs } from "./yu-coin.styles";
import { YUCOIN } from "@ids";
import Svg from "react-native-svg";
import {
  YuniversalBody,
  Clasps,
  Crown,
  Gems,
  CycleTwoOrnament,
  CycleThreeOrnament,
  CycleFourOrnament,
  CycleFiveOrnament,
} from "./yu-coin-subcomponents/newGamePlus";
import { connect } from "react-redux";
import { IReduxState } from "@redux/_core/reducers";
import { getUserFeatures } from "@redux/user/user.selectors";
import { getCurrentLevel } from "@redux/levels/levels.selectors";
import { getCurrentYuniverse, getCurrentWorld } from "@services/utils";

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface YuCoinProps {
  isGrayScale?: boolean;
  isLoading?: boolean;
  hasWhiteGlow?: boolean;
}

type Props = ConnectedState & YuCoinProps;

const YuCoin: React.FC<Props> = (props) => {
  const { isGrayScale, isLoading, hasWhiteGlow, newGamePlusEnabled, currentLevel } = props;

  if (!newGamePlusEnabled) {
    return (
      <View style={styles.wrapper} testID={YUCOIN}>
        {isGrayScale ? null : <Glow hasWhiteGlow={hasWhiteGlow} />}
        <View style={styles.innerWrapper}>
          <View style={styles.svgWrapper}>
            <Svg {...svgSpecs}>
              <Static isGrayScale={isGrayScale} />
              {isLoading && !isGrayScale ? <GiraffeAnimated /> : <GiraffeStatic isGrayScale={isGrayScale} />}
            </Svg>
            {isLoading || isGrayScale ? null : <Shine />}
          </View>
        </View>
      </View>
    );
  }

  const currentYuniverse = getCurrentYuniverse(currentLevel);

  return (
    <View style={styles.wrapper} testID={YUCOIN}>
      {isGrayScale ? null : <Glow hasWhiteGlow={hasWhiteGlow} />}
      <Svg style={styles.innerWrapper} width={200} height={200}>
        {currentYuniverse === 1 ? (
          <CycleTwoOrnament isGrayScale={isGrayScale} />
        ) : currentYuniverse === 2 ? (
          <CycleThreeOrnament isGrayScale={isGrayScale} />
        ) : currentYuniverse === 4 ? (
          <Crown isGrayScale={isGrayScale} />
        ) : null}
        <YuniversalBody isGrayScale={isGrayScale} />
        {currentYuniverse === 3 ? (
          <CycleFourOrnament isGrayScale={isGrayScale} />
        ) : currentYuniverse === 4 ? (
          <CycleFiveOrnament isGrayScale={isGrayScale} />
        ) : null}
        <Clasps isGrayScale={isGrayScale} />
        <Gems isGrayScale={isGrayScale} gemsToShow={getCurrentWorld(currentLevel)} />
      </Svg>
    </View>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  currentLevel: getCurrentLevel(state),
  newGamePlusEnabled: getUserFeatures(state).newGamePlus,
});

export default connect(mapStateToProps)(YuCoin);
