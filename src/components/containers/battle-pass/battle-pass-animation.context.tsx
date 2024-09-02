import { DecayingCoin } from "@components/molecules";
import BattlePassRecentTransactionBar from "@organisms/battle-pass-progress-bar/subcomponents/battle-pass-recent-transaction-bar";
import { createContext, memo, ReactNode, useCallback, useContext, useMemo, useState } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

export interface IBattlePassAnimationCanvas {
  addVelocityCoin: ({ x, y }: { x: number; y: number }) => void;
}

export const BattlePassAnimationContext = createContext<IBattlePassAnimationCanvas>({
  addVelocityCoin: () => {
    // empty
  },
});

export interface Vector {
  x: number;
  y: number;
}

export const useBattlePassAnimationContext = () => useContext(BattlePassAnimationContext);

interface IBattlePassAnimationManagerProps {
  children: ReactNode;
  step: number;
  showCoinAnimation: boolean;
}

const BattlePassAnimationManager = ({ children, step, showCoinAnimation }: IBattlePassAnimationManagerProps) => {
  const [coins, setCoins] = useState([]);

  const addVelocityCoin = useCallback(({ x, y }: { x: number; y: number }) => {
    const id = `${Math.random()}`;
    setCoins((prev) => [...prev, { id, x, y }]);
  }, []);

  const removeVelocityCoin = useCallback((id: string) => {
    setCoins((prev) => prev.filter((coin) => coin.id !== id));
  }, []);

  const animationContextValue = useMemo(() => {
    return {
      addVelocityCoin,
    };
  }, [addVelocityCoin]);

  return (
    <>
      <BattlePassAnimationContext.Provider value={animationContextValue}>
        {children}
      </BattlePassAnimationContext.Provider>

      <View pointerEvents="none" style={styles.container}>
        {coins.map(({ id, x, y }) => {
          const style: ViewStyle = { position: "absolute", left: x, top: y };

          return (
            <View key={id} style={style}>
              <DecayingCoin id={id} onFinish={removeVelocityCoin} />
            </View>
          );
        })}
      </View>

      <BattlePassRecentTransactionBar step={step} showCoinAnimation={showCoinAnimation} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

export default memo(BattlePassAnimationManager);
