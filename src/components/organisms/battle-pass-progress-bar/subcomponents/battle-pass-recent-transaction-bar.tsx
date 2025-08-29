import { DecayingRewardText } from "@components/molecules";
import { Style, StyleSheet } from "@styles";
import { memo, useCallback, useEffect, useState } from "react";
import { LayoutChangeEvent, View } from "react-native";

interface IBattlePassRecentTransactionBarProps {
  step: number;
  showCoinAnimation: boolean;
}

const POSITION_PADDING = 0.25;

const BattlePassRecentTransactionBar = ({ step, showCoinAnimation }: IBattlePassRecentTransactionBarProps) => {
  const [recentTransactions, setRecentTransactions] = useState<{ id: string; amount: number }[]>([]);
  const [dimensions, setDimensions] = useState({ minX: 0, maxX: 0 });
  const [lastStep, setLastStep] = useState(step);

  useEffect(() => {
    if (step <= lastStep) {
      setLastStep(step);
      return;
    }

    if (!showCoinAnimation) {
      return;
    }

    const id = `${Math.random()}`;
    setRecentTransactions((prev) => [...prev, { id, amount: step - lastStep }]);
    setLastStep(step);
  }, [lastStep, step, showCoinAnimation]);

  const removeRecentTransaction = useCallback((id: string) => {
    setRecentTransactions((prev) => prev.filter((coin) => coin.id !== id));
  }, []);

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    setDimensions({
      minX: event.nativeEvent.layout.x,
      maxX: event.nativeEvent.layout.x + event.nativeEvent.layout.width,
    });
  }, []);

  return (
    <View style={styles.rewardTextContainer}>
      <View style={styles.fullDimensions} onLayout={onLayout}>
        {recentTransactions.map(({ id, amount }) => (
          <DecayingRewardText
            minX={dimensions.minX + Style.DEVICE_WIDTH * POSITION_PADDING}
            maxX={dimensions.maxX - dimensions.minX - Style.DEVICE_WIDTH * POSITION_PADDING}
            amount={amount}
            key={id}
            id={id}
            onFinish={removeRecentTransaction}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rewardTextContainer: {
    width: "100%",
    top: Style.adjust(355),
    height: Style.adjust(1),
    position: "absolute",
  },

  fullDimensions: {
    width: "100%",
    height: "100%",
  },
});

export default memo(BattlePassRecentTransactionBar);
