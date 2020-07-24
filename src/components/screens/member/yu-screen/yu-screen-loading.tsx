import React from "react";
import { View, ScrollView, StyleSheet, ViewStyle } from "react-native";
import { Rect, Path } from "react-native-svg";
import { Style } from "@styles";
import NativeSvg from "@components/molecules/native-svg/native-svg";

export function YuScreenLoading() {
  return (
    <ScrollView>
      <View style={styles.loadingContainer}>
        <HeaderLoading />
        <AvatarSectionLoading />
        <BenefitsLoading />
      </View>
    </ScrollView>
  );
}

function HeaderLoading() {
  return (
    <View style={styles.headerLoadingCard}>
      <NativeSvg width="92" height="25" viewBox="0 0 92 25" fill="none">
        <Rect opacity="0.3" y="0.373138" width="92" height="24.6269" rx="12.3134" fill="#E7E7EB" />
      </NativeSvg>
    </View>
  );
}

function AvatarSectionLoading() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.avatarAndProductsWrapper}>
        <View style={styles.avatarWrapper}>
          <NativeSvg width="114" height="331" viewBox="0 0 114 331" fill="none">
            <Path
              d="M113.056 192.981L109.144 157.74C108.954 155.974 108.333 153.958 107.366 152.217L90.6069 113.339C89.4869 110.74 87.7046 109.062 85.7454 108.46C78.852 104.301 68.0748 103.856 68.0748 103.856C68.0748 103.856 67.7524 103.856 66.8889 103.852V92.8553C67.6657 92.574 68.0887 92.371 68.0887 92.371C81.574 86.4701 87.129 72.7952 89.4037 63.3047C89.9689 63.5112 90.5723 63.6287 91.2034 63.6287C94.1854 63.6287 96.6266 61.1217 96.6266 58.0591C96.6266 55.5164 94.9414 53.3619 92.6632 52.703C95.406 44.694 97.8715 32.7747 96.0371 26.4358C93.7208 16.2615 84.6982 13.441 84.6982 13.441C76.9101 3.24895 66.5006 -1.56933 46.4616 0.453421C41.5204 1.09443 23.7458 4.1891 18.5826 23.8895C15.7392 36.7098 18.2948 46.7772 20.7984 52.785C18.6485 53.5257 17.0916 55.6161 17.0916 58.0626C17.0916 61.1252 19.5327 63.6323 22.5148 63.6323C23.2395 63.6323 23.933 63.4827 24.5676 63.2121C26.8284 72.7062 32.3765 86.4523 45.9068 92.3746C45.9068 92.3746 46.2328 92.5313 46.8327 92.7556C46.8327 92.7841 46.8292 92.8126 46.8292 92.8375V103.842C46.7148 103.842 46.6038 103.842 46.4894 103.842C30.9375 103.842 25.9893 109.376 25.06 110.643C24.4185 111.384 23.8567 112.285 23.399 113.339L6.63344 152.217C5.66599 153.958 5.0453 155.977 4.85459 157.74L0.9432 192.981C0.724745 194.288 -1.02636 205.232 0.880785 207.404C2.28514 209.007 6.3491 209.609 8.7105 209.829C10.1703 209.965 11.6336 209.32 12.5456 208.042C13.0484 207.34 13.3293 206.528 12.8924 205.759C11.7827 203.8 13.0484 200.563 13.0484 200.563C13.0484 200.563 15.7635 207.889 17.7157 206.681C18.7906 205.631 17.6637 202.796 16.0548 197.518C15.2642 194.922 13.728 193.338 12.3722 192.397L17.9654 165.863C18.0625 164.969 19.3732 160.828 19.7754 157.462L29.9527 137.958C31.8876 153.691 32.8411 169.57 32.9452 172.918C32.9486 172.993 32.9486 173.064 32.9486 173.124C32.9486 173.139 32.9556 173.156 32.9556 173.171C30.9409 177.316 25.1363 191.365 25.6356 212.896C25.6321 212.988 25.6252 213.077 25.6217 213.17L27.2584 260.758L24.0024 276.477L23.9677 314.528C23.9642 314.567 23.9642 314.603 23.9642 314.642L23.1251 317.573C22.7194 318.987 22.2131 319.674 21.6028 321.056L18.6415 325.233C17.8301 326.376 17.7088 328.637 18.4266 329.845C18.8323 330.528 19.4425 331.027 20.2123 330.999L34.353 330.97C38.3303 331.002 38.3927 327.626 38.0078 325.92L37.1998 323.043C37.0265 322.274 37.0195 320.881 37.4495 320.165C38.3615 318.645 37.8656 317.587 37.0958 316.394L35.8198 314.596L43.5766 278.197L44.1696 262.87L53.7227 217.059C53.7643 216.827 53.8059 216.617 53.844 216.41L55.1791 209.79C55.6298 208.23 56.5314 207.408 57.8248 207.272C59.1147 207.408 59.9539 208.163 60.4046 209.723L61.6772 215.848C61.7396 216.172 61.809 216.524 61.8818 216.92L71.4349 262.731L72.0278 278.058L79.8021 314.539C79.8055 314.564 79.8125 314.589 79.8159 314.614L78.5572 316.394C77.7874 317.587 77.2916 318.645 78.2035 320.165C78.6335 320.885 78.6266 322.277 78.4532 323.043L77.6453 325.92C77.2604 327.623 77.3228 330.999 81.3001 330.97L95.4407 330.999C96.2105 331.031 96.8173 330.528 97.2265 329.845C97.9443 328.637 97.8229 326.376 97.0115 325.233L94.0502 321.056C93.4399 319.678 92.9302 318.99 92.528 317.573L91.6403 314.475C91.6368 314.446 91.6403 314.421 91.6368 314.393L91.6021 276.342L88.3461 260.622L89.851 216.816C91.1791 193.074 84.4833 177.54 82.2432 173.128C82.2398 172.957 82.2363 172.782 82.2328 172.604C82.1323 164.837 83.4361 151.732 84.9063 139.596L94.2271 157.459C94.6293 160.828 95.94 164.966 96.0371 165.86L101.63 192.394C100.274 193.334 98.7383 194.919 97.9477 197.515C96.3388 202.793 95.2118 205.627 96.2868 206.678C98.239 207.889 100.954 200.56 100.954 200.56C100.954 200.56 102.22 203.797 101.11 205.755C100.673 206.525 100.954 207.337 101.457 208.038C102.369 209.313 103.832 209.961 105.292 209.826C107.653 209.605 111.717 209.003 113.122 207.401C115.025 205.232 113.274 194.288 113.056 192.981Z"
              fill="#E8E7EB"
            />
          </NativeSvg>
        </View>
        <View style={styles.avatarItemsWrapper}>
          <View style={styles.productWrapper}>
            <NativeSvg width="136" height="18" viewBox="0 0 136 18" fill="none">
              <Rect width="136" height="18" rx="11" fill="#F8F8F9" />
            </NativeSvg>
          </View>
          <ProductLoading />
          <ProductLoading />
          <ProductLoading />
          <ProductLoading />
        </View>
      </View>
    </View>
  );
}

function ProductLoading() {
  return (
    <View style={styles.productWrapper}>
      <NativeSvg width="136" height="60" viewBox="0 0 136 60" fill="none">
        <Rect opacity="0.3" width="136" height="60" rx="11.87" fill="#E7E7EB" />
      </NativeSvg>
    </View>
  );
}

function BenefitsLoading() {
  return (
    <View style={styles.benefitsWrapper}>
      <View style={styles.benefitsHeading}>
        <NativeSvg width="148" height="22" viewBox="0 0 148 22" fill="none">
          <Rect width="148" height="22" rx="8" fill="#F8F8F9" />
        </NativeSvg>
      </View>
      <View style={{ flexDirection: "row" }}>
        <BenefitLoading />
        <BenefitLoading />
        <BenefitLoading />
      </View>
    </View>
  );
}

function BenefitLoading() {
  return (
    <View style={styles.benefit}>
      <NativeSvg width="82" height="70" viewBox="0 0 82 70" fill="none">
        <Rect opacity="0.3" width="82" height="70" rx="21.87" fill="#E7E7EB" />
      </NativeSvg>
      <View style={styles.benefitDescription}>
        <NativeSvg width="82" height="24" viewBox="0 0 82 24" fill="none">
          <Rect opacity="0.3" width="82" height="24" rx="12" fill="#E7E7EB" />
        </NativeSvg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    marginBottom: 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f8",
  },
  headerLoadingCard: {
    marginVertical: 8,
    width: "95%",
    backgroundColor: "white",
    height: 60,
    justifyContent: "space-around",
    borderRadius: 10,
    padding: 20,
  },
  productWrapper: {
    marginVertical: 10,
  },
  wrapper: {
    width: "95%",
    borderRadius: 10,
    backgroundColor: "white",
    marginVertical: 16,
  } as ViewStyle,
  benefitsWrapper: {
    width: "95%",
    height: 200,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "white",
    marginVertical: 8,
  },
  benefitsHeading: {
    paddingVertical: 24,
  },
  benefit: {
    paddingHorizontal: 18,
  },
  benefitDescription: {
    paddingTop: 12,
  },
  avatarWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
    marginHorizontal: 28,
  } as ViewStyle,
  avatarAndProductsWrapper: {
    flexDirection: "row",
    marginTop: Style.adjust(-10),
  } as ViewStyle,
  avatarItemsWrapper: {
    flex: 1,
    alignItems: "flex-start",
    marginHorizontal: 20,
    marginTop: Style.adjust(50),
  } as ViewStyle,
});
