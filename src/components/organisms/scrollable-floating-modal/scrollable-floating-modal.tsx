import { BottomShadow, Box, TextTemplate } from "@atoms";
import { FloatingModal } from "@components/modals";
import { Pressable } from "@components/molecules";
import { t } from "@locale";
import { Style, StyleSheet, Colours } from "@styles";
import { ImageSource } from "expo-image";
import { memo, ReactNode, useMemo } from "react";
import { Modal, View } from "react-native";
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
  gradientHeight?: number;
}
const BOTTOM_BACKGROUND = Colours.overlay.whiteSolid;
const GRADIENT_LOCATIONS = [0, 0.9, 1];
const GRADIENT_COLORS = [BOTTOM_BACKGROUND, BOTTOM_BACKGROUND, Colours.overlay.whiteTransparent];

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
  gradientHeight,
}: IScrollableModalProps) => {
  const contentStyle = useMemo(() => {
    return {
      height: Math.min(Style.DEVICE_HEIGHT * 0.8, Style.adjust(desiredHeight)),
    };
  }, [desiredHeight]);

  const gradientHeightStyle = useMemo(() => {
    return {
      ...styles.bottomGradient,
      height: gradientHeight ? Style.adjust(gradientHeight) : Style.adjust(40),
    };
  }, [gradientHeight]);

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
            <ContentFragment>
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
                    style={gradientHeightStyle}
                    locations={GRADIENT_LOCATIONS}
                  />
                  <Box bottom={0} w="100%" position="absolute">
                    {footer}
                  </Box>
                </>
              ) : null}
            </ContentFragment>
          </FloatingModal>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
};

// Fixing a warning where we cloneElement the children in FloatingModal with a closeOverlay argument
const ContentFragment = ({ children }: { children: ReactNode; closeActiveOverlay?: () => void }) => {
  return <>{children}</>;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: Colours.overlay.black64,
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
    position: "absolute",
    width: "100%",
  },
});

export default memo(ScrollableFloatingModal);
