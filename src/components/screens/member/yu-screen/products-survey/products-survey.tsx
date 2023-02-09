import { Loading, TextTemplate } from "@atoms";
import { Button } from "@molecules";
import React, { useState, useRef, useEffect, useCallback } from "react";
import ReactNative, {
  Keyboard,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "./products-survey.styles";
import Logger from "@services/logging/logger";
import ProductsSurveyGreetings from "./products-survey-greetings";
import { Colours } from "@styles";
import { SURVEY_SCREEN, SURVEY_TEXT_BOX } from "@ids";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { CheckBox } from "@molecules";
import { useQuery } from "@apollo/client";
import { GQL_QUERY_GET_YU_SCREEN_PRODUCT_SURVEY } from "@graphql/yuscreen";
import { GetYuScreenProductSurvey } from "@graphql/_core/schema";

const textAreaPlaceHolder = "Describe anything else you would like to see here...";

interface IProps {
  onExitConfirmed: () => void;
}

function ProductsSurvey({ onExitConfirmed }: IProps) {
  const [productState, setProductState] = useState<string[]>([]);
  const [textAreaValue, setTextArea] = useState("");
  const [textAreaStyle, setTextAreaStyles] = useState(styles.textArea);
  const [screenGreetings, setScreenGreetings] = useState(false);
  const [scrollDone, setScrollDone] = useState(false);
  const [viewHeight, setViewHeight] = useState(0);

  const { data, loading } = useQuery<GetYuScreenProductSurvey>(GQL_QUERY_GET_YU_SCREEN_PRODUCT_SURVEY);

  // Handle keyboard
  const scrollViewRef = useRef<ScrollView | null>(null);

  useEffect(() => {
    const onKeyboardShow = (event: ReactNative.KeyboardEvent) => {
      const isRefDefined = scrollViewRef?.current?.scrollTo;
      const value = event.endCoordinates.height;

      if (!scrollDone && value && isRefDefined) {
        scrollViewRef.current.scrollTo({ y: viewHeight + event.endCoordinates.height });
        setScrollDone(true);
      }
    };

    const onKeyboardHide = () => {
      setScrollDone(false);
    };

    const keyboardDidShow = Keyboard.addListener("keyboardDidShow", onKeyboardShow);
    const keyboardDidHide = Keyboard.addListener("keyboardDidHide", onKeyboardHide);

    return () => {
      keyboardDidShow.remove();
      keyboardDidHide.remove();
    };
  }, [scrollDone, viewHeight]);

  const onScrollViewLayout = useCallback((event: ReactNative.LayoutChangeEvent) => {
    if (event.nativeEvent.layout.height && event.nativeEvent.layout.height > viewHeight) {
      setViewHeight(event.nativeEvent.layout.height);
    }
  }, []);

  const onBackButton = useCallback(() => {
    Keyboard.dismiss();
    return onExitConfirmed();
  }, [onExitConfirmed]);

  const disableButton = productState.length < 1 && textAreaValue?.length < 1;

  const updateProductState = useCallback((value: string) => {
    setProductState((state) => {
      const indexOfValue = state.indexOf(value);

      if (indexOfValue !== -1) {
        return state.filter((productValue) => productValue !== value);
      }

      return [...state, value];
    });
  }, []);

  const onSubmitButton = useCallback(() => {
    const event = productState.reduce((acc, value) => {
      acc[value] = true;
      return acc;
    }, {} as Record<string, boolean | string>);

    if (textAreaValue) {
      event.free_form_text = textAreaValue;
    }

    console.log("event: ", event);
    Logger.logEvent("app_product_survey", event);
    setScreenGreetings(true);
  }, [productState, textAreaValue]);

  const onFocus = useCallback(() => {
    setTextAreaStyles(StyleSheet.flatten([styles.textArea, styles.textAreaFocus]));
  }, []);

  const onBlur = useCallback(() => {
    setTextAreaStyles(styles.textArea);
    Keyboard.dismiss();
  }, []);

  const products = data?.getYuScreenProductSurvey?.options || [];
  const title = data?.getYuScreenProductSurvey?.title || "";
  const description = data?.getYuScreenProductSurvey?.description || "";
  const postSubmissionMessage = data?.getYuScreenProductSurvey?.postSubmissionMessage || "";

  if (screenGreetings) {
    return (
      <ProductsSurveyGreetings
        title={title}
        postSubmissionMessage={postSubmissionMessage}
        onExitConfirmed={onExitConfirmed}
      />
    );
  }

  if (loading) {
    <View style={styles.greetingsWrapper}>
      <GenericHeadingPad />
      <Loading />
      <GenericHeadingAbsolute heading="" onLeftIconPress={onBackButton} />
    </View>;
  }

  return (
    <View style={styles.greetingsWrapper}>
      <GenericHeadingPad />
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
        <ScrollView
          testID={SURVEY_SCREEN}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          ref={scrollViewRef}
          onLayout={onScrollViewLayout}
        >
          <View style={styles.viewWrapper}>
            <View style={styles.headerTextWrapper}>
              <TextTemplate type="b2">{description}</TextTemplate>
            </View>
            <View style={styles.checkboxWrapper}>
              {products.map((item) => {
                return (
                  <CheckBox
                    checked={productState.includes(item.id)}
                    value={item.id}
                    key={item.id}
                    label={item.label}
                    onChange={updateProductState}
                  />
                );
              })}
            </View>
            <View style={styles.footerWrapper}>
              <TextInput
                key="textArea"
                placeholder={textAreaPlaceHolder}
                placeholderTextColor={Colours.lightGray}
                value={textAreaValue}
                multiline={true}
                onChangeText={setTextArea}
                numberOfLines={4}
                onFocus={onFocus}
                onBlur={onBlur}
                style={textAreaStyle}
                textAlignVertical="top"
                testID={SURVEY_TEXT_BOX}
              />
              <Button
                onPress={onSubmitButton}
                size="Large"
                label="Submit"
                disabled={disableButton}
                wrapperStyle={styles.submitButton}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <GenericHeadingAbsolute heading={title} onLeftIconPress={onBackButton} />
    </View>
  );
}

export default ProductsSurvey;
