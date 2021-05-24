import React, { memo, useRef, useEffect, useCallback, ComponentProps, useState } from "react";
import { ScrollView, View, Keyboard } from "react-native";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";
import FibTitle from "@atoms/fib/title/title";
import Footer from "./subcomponents/footer/footer";
import { FibUnderwritingJourneyLayout } from "../layouts/fib.underwriting-journey-layout";
import {
  UnderwritingJourneyScreen,
  UnderwritingJourneyChild,
} from "@components/containers/products/fib/data/underwriting-journey-data";
import { MedicalHistoryItem, IMedicalHistoryItemProps } from "@atoms/fib/medical-history-item/medical-history-item";
import MarkdownFib from "@atoms/fib/markdown/markdown";
import { IMarkdownFibProps } from "@atoms/fib/markdown/markdown";
import { FibInputBirth } from "@components/organisms/fib/input/birth/fib-input-birth";
import { FibInputHeight } from "@components/organisms/fib/input/height/fib-input-height";
import { FibInputName } from "@components/organisms/fib/input/name/fib-input-name";
import { FibInputWeight } from "@components/organisms/fib/input/weight/fib-input-weight";
import { FibInputSalary } from "@components/organisms/fib/input/salary";
import { getCustomComponent } from "./getCustomComponent";
import MedicalChipList from "./subcomponents/medical-chip-list/medical-chip-list";
import { CopyBirthday } from "@organisms/fib/copy/birthday";
import { CopyFullName } from "@organisms/fib/copy/full-name";
import RadioInput from "../feedback-form/radio-input";
import { FibInputAlcohol } from "@organisms/fib/input/alcohol/fib-input-alcohol";
import { styles, getChildWrapperStyle } from "./fib.underwriting-journey.styles";
import { CopyIntro } from "@organisms/fib/copy/intro";
import { UNDERWRITING_JOURNEY_SCREEN } from "@ids";
import GenderQuestion from "./subcomponents/gender/gender-question";
import { ProgressBar } from "@components/molecules";
import { HandshakeHeartIcon } from "@atoms/icon/handshake-heart-icon";
import { NotVisibleEyeIcon } from "@atoms/icon/not-visible-eye-icon";
import { YuCoinPileIcon } from "@atoms/icon/yucoin-pile-icon";
import { useSelector } from "react-redux";
import { getFullName } from "@redux/product/product.selectors";
import { Style, TOP_BAR } from "@styles";

const CONTENT_VISIBILITY_THRESHOLD = 0;
const VIEWABLE_AREA = Style.DEVICE_HEIGHT - TOP_BAR.TOP_BAR_WITH_PAD;

export interface IFibUnderwritingJourneyScreenProps {
  onNavigateBack: () => void;
  data: UnderwritingJourneyScreen;
  onFirstButtonPressed: () => void;
  onSecondButtonPressed?: () => void;
  onLinkButtonPressed?: () => void;
  onPreviousButtonPressed?: () => void;
  disableFirstButton?: boolean;
  inputFirstName?: string;
  inputLastName?: string;
  setInputFirstName?: (text: string) => void;
  setInputLastName?: (text: string) => void;
  disableSecondButton?: boolean;
  radioInputValue?: string;
  setRadioInputValue?: (text: string) => void;
  progressBarHideType: ComponentProps<typeof ProgressBar>["hideType"];
  salary?: number;
  setInputSalary?: (salary: number) => void;
  isFooterInList?: boolean;
}

const _FibUnderwritingJourneyScreen = memo(function (props: IFibUnderwritingJourneyScreenProps) {
  const {
    onNavigateBack,
    data,
    onFirstButtonPressed,
    onSecondButtonPressed,
    onPreviousButtonPressed,
    onLinkButtonPressed,
    disableFirstButton,
    inputFirstName,
    inputLastName,
    setInputFirstName,
    setInputLastName,
    disableSecondButton,
    radioInputValue,
    setRadioInputValue,
    progressBarHideType,
    salary,
    setInputSalary,
    isFooterInList,
  } = props;
  const scrollViewRef = useRef(null as ScrollView);
  const timer = useRef(null as ReturnType<typeof setTimeout>);
  const [footerInList, setFooterInList] = useState(isFooterInList);
  const contentSizeChanged = useRef(data.id);

  function handleResetScroll() {
    if (scrollViewRef?.current?.scrollTo) {
      timer.current = setTimeout(() => {
        scrollViewRef.current.scrollTo({ y: 0 });
      }, 0);
    }
  }

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
      timer.current = null;
    };
  }, []);

  const handleScrollToKeyboardOffset = useCallback(() => {
    if (scrollViewRef?.current) {
      scrollViewRef.current.scrollTo({ y: 200 });
    }
  }, [scrollViewRef]);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", handleScrollToKeyboardOffset);
    return () => {
      Keyboard.removeListener("keyboardDidShow", handleScrollToKeyboardOffset);
    };
  }, [handleScrollToKeyboardOffset]);

  const backHandler = React.useCallback(() => {
    onPreviousButtonPressed();
    handleResetScroll();
    return true;
  }, [onPreviousButtonPressed]);

  useBackHandler(backHandler);

  const firstButton = {
    action: () => {
      onFirstButtonPressed();
      handleResetScroll();
    },
    label: data.firstButton.label,
    disabled: disableFirstButton,
  };

  const secondButton = !onSecondButtonPressed
    ? null
    : { action: onSecondButtonPressed, label: data.secondButton.label, disabled: disableSecondButton };

  const linkButton = !onLinkButtonPressed ? null : { action: onLinkButtonPressed, label: data.linkButton.label };
  const CustomComponent = getCustomComponent(data.id);

  if (CustomComponent) {
    return <CustomComponent {...props} />;
  }

  return (
    <FibUnderwritingJourneyLayout
      centreLogo="yulife"
      onClose={onNavigateBack}
      progressBarHideType={progressBarHideType}
      onPreviousQuestion={onPreviousButtonPressed}
    >
      <ScrollView
        scrollEventThrottle={16}
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        testID={UNDERWRITING_JOURNEY_SCREEN}
        onContentSizeChange={(_, contentHeight) => {
          if (contentSizeChanged.current !== data.id) {
            contentSizeChanged.current = data.id;
            const isContentVisible = contentHeight - VIEWABLE_AREA < CONTENT_VISIBILITY_THRESHOLD;
            setFooterInList(isFooterInList || !isContentVisible);
          }
        }}
      >
        <View style={styles.topPad} />
        {!data?.question ? null : <FibTitle title={data.question} />}
        {data.children?.map((child: UnderwritingJourneyChild, i) => {
          const key = data.id + i;
          return (
            <View style={getChildWrapperStyle(child.type)} key={key}>
              {renderChildren(child, {
                inputFirstName,
                inputLastName,
                setInputFirstName,
                setInputLastName,
                radioInputValue,
                setRadioInputValue,
                salary,
                setInputSalary,
              })}
            </View>
          );
        })}
        {!footerInList ? (
          <View style={{ height: Footer.HEIGHT }} />
        ) : (
          <Footer
            id={data.id}
            isInList={true}
            firstButton={firstButton}
            secondButton={secondButton}
            linkButton={linkButton}
          />
        )}
      </ScrollView>
      {footerInList ? null : (
        <Footer id={data.id} firstButton={firstButton} secondButton={secondButton} linkButton={linkButton} />
      )}
    </FibUnderwritingJourneyLayout>
  );
});

export const FibUnderwritingJourneyScreen = memo(_FibUnderwritingJourneyScreen);

const copyIntroCards = [
  {
    icon: <HandshakeHeartIcon />,
    description: "In order to get you covered, we’ll need to know a bit about you.",
  },
  {
    icon: <NotVisibleEyeIcon />,
    description: "Your answers will **not** be seen by your employer.",
  },
  {
    icon: <YuCoinPileIcon />,
    description: "You’ll get 200 YuCoin for completing the questions.",
  },
];

interface RenderChildrenExtraProps {
  inputFirstName?: string;
  inputLastName?: string;
  setInputFirstName?: (text: string) => void;
  setInputLastName?: (text: string) => void;
  radioInputValue?: string;
  setRadioInputValue?: (value: string) => void;
  salary?: number;
  setInputSalary?: (salary: number) => void;
}

const Intro = () => {
  const fullName = useSelector(getFullName);
  return <CopyIntro title={`Let's get personal, ${fullName}.`} cards={copyIntroCards} />;
};

function renderChildren(child: UnderwritingJourneyChild, extraProps: RenderChildrenExtraProps) {
  const FIELDS: Record<string, React.ReactNode> = {
    medicalHistory: <MedicalHistoryItem {...(child as IMedicalHistoryItemProps)} />,
    markdown: <MarkdownFib {...(child as IMarkdownFibProps)} />,
    inputBirth: <FibInputBirth />,
    inputHeight: <FibInputHeight />,
    inputWeight: <FibInputWeight />,
    inputSalary: <FibInputSalary setInputSalary={extraProps.setInputSalary} salary={extraProps.salary} />,
    inputFullName: (
      <FibInputName
        setInputFirstName={extraProps.setInputFirstName}
        inputFirstName={extraProps.inputFirstName}
        setInputLastName={extraProps.setInputLastName}
        inputLastName={extraProps.inputLastName}
      />
    ),
    chiplist: <MedicalChipList items={child.chips} columns={2} />,
    inputAlcohol: <FibInputAlcohol />,
    copyBirthday: <CopyBirthday />,
    copyFullName: <CopyFullName />,
    copyIntro: <Intro />,
    radioInput: (
      <RadioInput
        options={child.radioInputOptions}
        selectedValue={extraProps.radioInputValue}
        onChange={extraProps.setRadioInputValue}
        styles={styles.radioInputStyles}
        extraVerticalPadding={4}
      />
    ),
    gender: <GenderQuestion />,
  };
  return FIELDS[child.type] || null;
}
