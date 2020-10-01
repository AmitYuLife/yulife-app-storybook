import * as React from "react";
import { View } from "react-native";
import styles from "./yu-coin.styles";
import { YUCOIN } from "@ids";
import Svg from "react-native-svg";
import {
  Glow,
  Body,
  GenericYucoin,
  Clasps,
  Crown,
  Gems,
  CycleTwoOrnament,
  CycleThreeOrnament,
  CycleFourOrnament,
  CycleFiveOrnament,
} from "./yu-coin-subcomponents";
import { connect } from "react-redux";
import { IReduxState } from "@redux/_core/reducers";
import { getCurrentLevel } from "@redux/levels/levels.selectors";
import { getCurrentYuniverse, getCurrentWorld } from "@services/utils";

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface YuCoinProps {
  isGeneric?: boolean;
  isGrayScale?: boolean;
  hasWhiteGlow?: boolean;
  level?: number;
  gems?: number;
}

type Props = ConnectedState & YuCoinProps;

const YuCoin: React.FC<Props> = (props) => {
  const { isGeneric, isGrayScale, hasWhiteGlow, level, gems, currentLevel } = props;

  if (isGeneric) {
    return <GenericYucoin isGrayScale={isGrayScale} />;
  }

  const currentYuniverse = getCurrentYuniverse(level || currentLevel);

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
        <Body isGrayScale={isGrayScale} />
        {currentYuniverse === 3 ? (
          <CycleFourOrnament isGrayScale={isGrayScale} />
        ) : currentYuniverse === 4 ? (
          <CycleFiveOrnament isGrayScale={isGrayScale} />
        ) : null}
        <Clasps isGrayScale={isGrayScale} />
        <Gems isGrayScale={isGrayScale} gemsToShow={gems || getCurrentWorld(level || currentLevel)} />
      </Svg>
    </View>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  currentLevel: getCurrentLevel(state),
});

export default connect(mapStateToProps)(YuCoin);
