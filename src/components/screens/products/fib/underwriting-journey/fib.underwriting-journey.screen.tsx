import React, { memo } from "react";
import { StyleSheet, ScrollView, ViewStyle } from "react-native";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";
import TitleWithIcon from "@atoms/fib/title-with-icon/title-with-icon";
import FibTitle from "@atoms/fib/title/title";
import Footer from "./subcomponents/footer/footer";
import { FibUnderwritingJourneyLayout } from "../layouts/fib.underwriting-journey-layout";
import {
  UnderwritingJourneyScreen,
  UnderwritingJourneyChild,
} from "@components/containers/products/fib/data/underwriting-journey-data";
import {
  MedicalHistoryItem,
  IMedicalHistoryItemProps,
} from "../../../../atoms/fib/medical-history-item/medical-history-item";
import MarkdownFib from "../../../../atoms/fib/markdown/markdown";
import { IMarkdownFibProps } from "../../../../atoms/fib/markdown/markdown";
import { FibInputBirth } from "@components/organisms/fib/input/birth/fib-input-birth";
import { FibInputHeight } from "@components/organisms/fib/input/height/fib-input-height";
import { FibInputName } from "@components/organisms/fib/input/name/fib-input-name";
import { FibInputWeight } from "@components/organisms/fib/input/weight/fib-input-weight";
import { getCustomComponent } from "./getCustomComponent";

export interface IFibUnderwritingJourneyScreenProps {
  onNavigateBack: () => void;
  data: UnderwritingJourneyScreen;
  onFirstButtonPressed: () => void;
  onSecondButtonPressed?: () => void;
  onPreviousButtonPressed?: () => void;
  progressBar?: {
    maxLength: number;
    currentPosition: number;
  };
}

export const FibUnderwritingJourneyScreen = memo(function (props: IFibUnderwritingJourneyScreenProps) {
  const {
    onNavigateBack,
    data,
    onFirstButtonPressed,
    onSecondButtonPressed,
    onPreviousButtonPressed,
    progressBar,
  } = props;

  const backHandler = React.useCallback(() => {
    onNavigateBack();
    return true;
  }, [onNavigateBack]);

  useBackHandler(backHandler);

  const firstButton = { action: onFirstButtonPressed, label: data.firstButton.label };

  const secondButton = !onSecondButtonPressed
    ? null
    : { action: onSecondButtonPressed, label: data.secondButton.label };

  const CustomComponent = getCustomComponent(data.id);

  if (CustomComponent) {
    return <CustomComponent {...props} />;
  }

  return (
    <FibUnderwritingJourneyLayout heading={data.heading} onNavigateBack={onNavigateBack} progressBar={progressBar}>
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.scrollViewContentStyle}>
        <TitleWithIcon icon={data.icon} title={data.title} />
        <FibTitle title={data.question} />
        {data.children?.map((child: UnderwritingJourneyChild) => {
          return renderChildren(child);
        })}
      </ScrollView>
      <Footer firstButton={firstButton} secondButton={secondButton} onPreviousButtonPressed={onPreviousButtonPressed} />
    </FibUnderwritingJourneyLayout>
  );
});

function renderChildren(child: UnderwritingJourneyChild) {
  const FIELDS: Record<string, React.ReactNode> = {
    medicalHistory: <MedicalHistoryItem {...(child as IMedicalHistoryItemProps)} />,
    markdown: <MarkdownFib {...(child as IMarkdownFibProps)} />,
    inputBirth: <FibInputBirth />,
    inputHeight: <FibInputHeight />,
    inputWeight: <FibInputWeight />,
    inputFullName: <FibInputName />,
  };
  return FIELDS[child.type] || null;
}

const styles = StyleSheet.create({
  scrollViewContentStyle: {
    paddingBottom: 130,
    paddingHorizontal: 32,
  } as ViewStyle,
});
