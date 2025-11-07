import { memo, useMemo } from "react";
import { Platform, View } from "react-native";
import { TextTemplate } from "@atoms";
import { Colours, TemplateTextType } from "@styles";
import { addCommasToNumber } from "@utils";
import Plus from "./assets/plus";
import styles from "./plus-points.styles";
import { t } from "@locale";

interface IProps {
  coins: number;
  testID?: string;
  textType?: TemplateTextType;
}

const getScaleForTextType = (textType: TemplateTextType): number => {
  const scaleMap: Record<string, number> = {
    h1: 0.8,
    h2: 0.7,
    h3: 0.5,
  };
  return scaleMap[textType] ?? 0.8;
};

const PlusPoints = ({ coins, testID, textType = "h1" }: IProps) => {
  const scale = useMemo(() => getScaleForTextType(textType), [textType]);

  return (
    <View
      style={styles.textWrapper}
      accessibilityLabel={t("molecules.coin_confetti.accessibility_label", { coins: addCommasToNumber(coins) })}
      accessible={Platform.select({ ios: true, android: false })}
      importantForAccessibility={"no"}
    >
      <View style={styles.plusWrapper}>
        <Plus scale={scale} />
      </View>
      <TextTemplate type={textType} textAlign="center" color={Colours.darkHotPink} testID={testID} accessible={false}>
        {`${addCommasToNumber(coins)}`}
      </TextTemplate>
    </View>
  );
};

export default memo(PlusPoints);
