import { DecayingCoin } from "@components/molecules";
import EnterpriseRecentTransactionBar from "@organisms/enterprise-reward-progress-bar/subcomponents/enterprise-recent-transaction-bar";
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
}

const BattlePassAnimationManager = ({ children, step }: IBattlePassAnimationManagerProps) => {
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

      <EnterpriseRecentTransactionBar step={step} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    elevation: 10,
  },
});

export default memo(BattlePassAnimationManager);
