import * as React from "react";
import { SFC } from "react";
import { View } from "react-native";
import { Text, Button } from "../../atoms";
import { Instruction } from "../../molecules";
import styles from "./reward-item-content.styles";
import LinkGroup from "../link-group/link-group";

interface IProps {
    description?: string;
    instructions?: string[];
    labelCtaPrimary: string;
    labelCtaSecondary?: string;
    labelCtaTertiary?: string;
    onPressCtaPrimary: () => void;
    onPressCtaSecondary?: () => void;
    onPressCtaTertiary?: () => void;
    onPressTerms?: () => void;
    onPressPolicy?: () => void;
}

const RewardItemContent: SFC<IProps> = ({
    description = "",
    instructions = [],
    onPressCtaPrimary,
    onPressCtaSecondary,
    onPressCtaTertiary,
    labelCtaPrimary,
    labelCtaSecondary,
    labelCtaTertiary,
    onPressTerms,
    onPressPolicy,
}) => (
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
        <Button
            wrapperStyle={styles.primaryWrapper}
            type={Button.Types.PRIMARY}
            onPress={onPressCtaPrimary}
            label={labelCtaPrimary}
        />
        {!onPressCtaSecondary ? null : (
            <Button
                wrapperStyle={styles.secondaryWrapper}
                type={Button.Types.SECONDARY}
                onPress={onPressCtaSecondary}
                label={labelCtaSecondary}
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
                        label: "Reward policy",
                        onPress: onPressPolicy,
                    },
                ]}
            />
        ) : (
            <Button
                wrapperStyle={styles.tertiaryWrapper}
                type={Button.Types.LINK}
                onPress={onPressCtaTertiary}
                label={labelCtaTertiary}
            />
        )}
    </View>
);

export default RewardItemContent;
