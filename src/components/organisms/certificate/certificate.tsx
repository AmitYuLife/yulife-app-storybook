import React, { ComponentProps, FC, memo } from "react";
import { ImageStyle } from "react-native";
import { Style } from "@styles";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { Image, ProductColorTheme } from "@atoms";
import { CertificateLayout } from "./certificate-layout";
import { ContentKeyValues } from "./content-key-values";
import { ContentBody } from "./content-body";
import { ContentHead } from "./content-head";

interface Pair {
  label: string;
  value: string;
}

interface CertificateProps {
  coverType: CoverType;
  keyValuePairs: Pair[];
  content: ComponentProps<typeof ContentBody>["items"];
  title: string;
  subtitle?: string;
  imageUri?: string;
}

const Certificate: FC<CertificateProps> = (props) => {
  const { coverType = CoverType.common, keyValuePairs = [], content = [], title = "", subtitle, imageUri } = props;

  return (
    <CertificateLayout coverType={coverType}>
      <ContentHead title={title} subtitle={subtitle} coverType={coverType} />
      <ProductColorTheme.Separator coverType={coverType} />
      <ContentBody items={content} />
      <ProductColorTheme.Separator coverType={coverType} />
      <ContentKeyValues pairs={keyValuePairs} />
      {!imageUri ? null : (
        <Image style={imageStyle} height={Style.adjust(135)} width={Style.adjust(127)} source={{ uri: imageUri }} />
      )}
    </CertificateLayout>
  );
};

const imageStyle: ImageStyle = {
  marginTop: Style.adjust(-40),
  marginBottom: Style.adjust(80),
};

export default memo(Certificate);
