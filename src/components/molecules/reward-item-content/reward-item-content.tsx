import { Button, Text, Pad, LinkButton, SecondaryButton } from "@atoms/index";
import { Instruction, Picker } from "@molecules/index";
import * as React from "react";
import { View } from "react-native";
import LinkGroup from "../link-group/link-group";
import styles from "./reward-item-content.styles";

interface IProps {
  rewardValue?: number;
  description?: string;
  instructions?: string[];
  labelCtaPrimary: string;
  labelCtaSecondary?: string;
  labelCtaTertiary?: string;
  isLoadingPrimary?: boolean;
  isLoadingSecondary?: boolean;
  onPressPicker?: () => void | null;
  onPressCtaPrimary: () => void;
  onPressCtaSecondary?: () => void;
  onPressCtaTertiary?: () => void;
  onPressTerms?: () => void;
  onPressPolicy?: () => void;
}

const RewardItemContent = ({
  rewardValue,
  description = "",
  instructions = [],
  onPressCtaPrimary,
  onPressCtaSecondary,
  onPressCtaTertiary,
  labelCtaPrimary,
  labelCtaSecondary,
  labelCtaTertiary,
  onPressPicker,
  onPressTerms,
  onPressPolicy,
  isLoadingPrimary,
  isLoadingSecondary,
}: IProps) => {
  return (
    <View style={styles.wrapper}>
      {!description ? null : (
        <View>
          <View style={styles.descriptionHeadingWrapper}>
            <Text style={styles.heading} bold={true}>
              Description
            </Text>
          </View>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.paragraph}>{description}</Text>
          </View>
        </View>
      )}
      {!!instructions.length && (
        <>
          <View style={styles.instructionsHeadingWrapper}>
            <Text style={styles.heading} bold={true}>
              How to redeem
            </Text>
          </View>
          <View style={styles.instructionsWrapper}>
            {instructions.map((instruction, index) => (
              <Instruction key={index} bullet={index + 1} instruction={instruction} />
            ))}
          </View>
        </>
      )}
      {!onPressPicker ? null : (
        <View style={styles.pickerWrapper}>
          <Picker
            placeholder="amount"
            label={`£${rewardValue.toFixed(2)}`}
            onPress={onPressPicker}
            icon={Picker.Icons.COINS}
          />
        </View>
      )}
      <Pad height={30} />
      <Button
        type="Primary"
        isLoading={isLoadingPrimary}
        disabled={isLoadingPrimary}
        onPress={onPressCtaPrimary}
        label={labelCtaPrimary}
      />
      {!onPressCtaSecondary ? null : (
        <SecondaryButton
          onPress={onPressCtaSecondary}
          label={labelCtaSecondary}
          isLoading={isLoadingSecondary}
          disabled={isLoadingSecondary}
        />
      )}
      {!onPressCtaTertiary ? (
        <LinkGroup
          data={[
            {
              label: "T&Cs",
              onPress: onPressTerms,
            },
            {
              label: "Rewards policy",
              onPress: onPressPolicy,
            },
          ]}
        />
      ) : (
        <LinkButton onPress={onPressCtaTertiary} label={labelCtaTertiary} />
      )}
    </View>
  );
};

export default RewardItemContent;
