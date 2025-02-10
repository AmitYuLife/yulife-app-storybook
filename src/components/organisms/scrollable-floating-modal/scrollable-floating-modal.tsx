import { BottomShadow, TextTemplate } from "@atoms";
import { FloatingModal } from "@components/modals";
import { Pressable } from "@components/molecules";
import { t } from "@locale";
import { Style } from "@styles";
import { ImageSource } from "expo-image";
import { memo, ReactNode, useMemo } from "react";
import { Modal, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";

interface IScrollableModalProps {
  title?: string;
  subtitle?: string;
  footer: ReactNode;
  header?: ReactNode;
  children: ReactNode;
  onClose?: () => void;
  desiredHeight?: number;
  topIcon?: ImageSource;
  renderHeaderShadow?: boolean;
  closeIconColor?: string;
  showCloseIcon?: boolean;
}

const BOTTOM_BACKGROUND = "rgba(255,255,255,1)";
const GRADIENT_LOCATIONS = [0, 0.7, 1];
const GRADIENT_COLORS = [BOTTOM_BACKGROUND, BOTTOM_BACKGROUND, "rgba(255,255,255,0)"];

const ScrollableFloatingModal = ({
  title,
  footer,
  header,
  topIcon,
  onClose,
  subtitle,
  children,
  closeIconColor,
  showCloseIcon,
  desiredHeight = 660,
  renderHeaderShadow = true,
}: IScrollableModalProps) => {
  const contentStyle = useMemo(() => {
    return {
      height: Math.min(Style.DEVICE_HEIGHT * 0.8, Style.adjust(desiredHeight)),
    };
  }, [desiredHeight]);

  return (
    <Modal transparent={true}>
      <Animated.View style={styles.wrapper} entering={FadeIn.duration(200)}>
        <Pressable delay={1000} style={styles.overlay} onPress={onClose} accessibilityLabel={t("labels.cta.close")} />
        <Animated.View entering={FadeInDown.duration(400)}>
          <FloatingModal
            icon={topIcon}
            showButton={false}
            closeOverlay={onClose}
            showCloseIcon={showCloseIcon}
            closeIconColor={closeIconColor}
            paddingTop={Style.adjust(title ? 42 : 0)}
          >
            <>
              <View style={contentStyle}>
                {title ? (
                  <>
                    <View style={styles.headerWrapper}>
                      <View style={styles.titleContainer}>
                        <TextTemplate type="h2" textAlign="center">
                          {title}
                        </TextTemplate>
                      </View>
                      {subtitle ? (
                        <TextTemplate type="b2" textAlign="center">
                          {subtitle}
                        </TextTemplate>
                      ) : null}
                    </View>
                  </>
                ) : null}
                {header}
                <View style={styles.topContainer}>{renderHeaderShadow ? <BottomShadow /> : null}</View>
                {children}
              </View>
              {footer ? (
                <>
                  <LinearGradient
                    angle={0}
                    useAngle={true}
                    pointerEvents="box-none"
                    colors={GRADIENT_COLORS}
                    style={styles.bottomGradient}
                    locations={GRADIENT_LOCATIONS}
                  >
                    {footer}
                  </LinearGradient>
                </>
              ) : null}
            </>
          </FloatingModal>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,.64)",
  },
  overlay: {
    height: Style.DEVICE_HEIGHT,
    width: Style.DEVICE_WIDTH,
    position: "absolute",
  },
  headerWrapper: {
    marginBottom: Style.adjust(30),
    marginTop: Style.adjust(80),
    paddingHorizontal: Style.adjust(40),
  },
  topContainer: {
    width: "100%",
  },
  titleContainer: {
    marginBottom: Style.adjust(8),
  },
  bottomGradient: {
    bottom: 0,
    width: "100%",
    paddingTop: Style.adjust(40),
    position: "absolute",
  },
});

export default memo(ScrollableFloatingModal);
