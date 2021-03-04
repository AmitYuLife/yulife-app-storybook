import React from "react";
import { storiesOf } from "@storybook/react-native";
import ProductColorTheme from "./index";
import { ScrollView, View } from "react-native";
import { CoverType } from "@graphql/_core/schema/globalTypes";

storiesOf("ProductColorTheme", module)
  .addDecorator((getStory: any) => (
    <ScrollView
      style={{ backgroundColor: "white" }}
      contentContainerStyle={{ paddingHorizontal: 24, justifyContent: "center" }}
    >
      <View style={{ height: 20 }} />
      {getStory()}
      <View style={{ height: 20 }} />
    </ScrollView>
  ))
  .add("all", () => {
    return (
      <>
        {[CoverType.common, CoverType.rare, CoverType.epic, null].map((coverType) => (
          <View key={coverType} style={{ marginTop: 8 }}>
            <ProductColorTheme.CardWrapper coverType={coverType}>
              <View style={{ backgroundColor: "white" }}>
                <View style={{ height: 164 }}>
                  <ProductColorTheme.GradientBackground coverType={coverType} />
                </View>
                <View style={{ height: 216, padding: 24 }}>
                  <ProductColorTheme.FlatBackground coverType={coverType} />
                </View>
              </View>
            </ProductColorTheme.CardWrapper>
            <View style={{ height: 8 }} />
            <View style={{ maxWidth: 269 }}>
              <ProductColorTheme.CardWrapper showShadow={true} coverType={coverType}>
                <View style={{ height: 164 }}>
                  <ProductColorTheme.GradientBackground coverType={coverType} />
                </View>
                <View style={{ height: 216, padding: 24 }}>
                  <ProductColorTheme.FlatBackground coverType={coverType} />
                  <ProductColorTheme.Separator coverType={coverType} />
                </View>
              </ProductColorTheme.CardWrapper>
            </View>
          </View>
        ))}
      </>
    );
  })
  .add(CoverType.common, () => {
    return (
      <View>
        <ProductColorTheme.CardWrapper coverType={CoverType.common}>
          <View style={{ height: 164 }}>
            <ProductColorTheme.GradientBackground coverType={CoverType.common} />
          </View>
          <View style={{ height: 216, padding: 24 }}>
            <ProductColorTheme.FlatBackground coverType={CoverType.common} />
          </View>
        </ProductColorTheme.CardWrapper>
        <View style={{ height: 8 }} />
        <View style={{ maxWidth: 269 }}>
          <ProductColorTheme.CardWrapper showShadow={true} coverType={CoverType.common}>
            <View style={{ height: 164 }}>
              <ProductColorTheme.GradientBackground coverType={CoverType.common} />
            </View>
            <View style={{ height: 216, padding: 24 }}>
              <ProductColorTheme.FlatBackground coverType={CoverType.common} />
              <ProductColorTheme.Separator coverType={CoverType.common} />
            </View>
          </ProductColorTheme.CardWrapper>
        </View>
      </View>
    );
  })
  .add(CoverType.rare, () => {
    return (
      <View>
        <ProductColorTheme.CardWrapper coverType={CoverType.rare}>
          <View style={{ height: 164 }}>
            <ProductColorTheme.GradientBackground coverType={CoverType.rare} />
          </View>
          <View style={{ height: 216, padding: 24 }}>
            <ProductColorTheme.FlatBackground coverType={CoverType.rare} />
          </View>
        </ProductColorTheme.CardWrapper>
        <View style={{ height: 8 }} />
        <View style={{ maxWidth: 269 }}>
          <ProductColorTheme.CardWrapper showShadow={true} coverType={CoverType.rare}>
            <View style={{ height: 164 }}>
              <ProductColorTheme.GradientBackground coverType={CoverType.rare} />
            </View>
            <View style={{ height: 216, padding: 24 }}>
              <ProductColorTheme.FlatBackground coverType={CoverType.rare} />
              <ProductColorTheme.Separator coverType={CoverType.rare} />
            </View>
          </ProductColorTheme.CardWrapper>
        </View>
      </View>
    );
  })
  .add(CoverType.epic, () => {
    return (
      <View>
        <ProductColorTheme.CardWrapper coverType={CoverType.epic}>
          <View style={{ height: 164 }}>
            <ProductColorTheme.GradientBackground coverType={CoverType.epic} />
          </View>
          <View style={{ height: 216, padding: 24 }}>
            <ProductColorTheme.FlatBackground coverType={CoverType.epic} />
          </View>
        </ProductColorTheme.CardWrapper>
        <View style={{ height: 8 }} />
        <View style={{ maxWidth: 269 }}>
          <ProductColorTheme.CardWrapper showShadow={true} coverType={CoverType.epic}>
            <View style={{ height: 164 }}>
              <ProductColorTheme.GradientBackground coverType={CoverType.epic} />
            </View>
            <View style={{ height: 216, padding: 24 }}>
              <ProductColorTheme.FlatBackground coverType={CoverType.epic} />
              <ProductColorTheme.Separator coverType={CoverType.epic} />
            </View>
          </ProductColorTheme.CardWrapper>
        </View>
      </View>
    );
  })
  .add("null", () => {
    return (
      <View>
        <ProductColorTheme.CardWrapper>
          <View style={{ height: 164 }}>
            <ProductColorTheme.GradientBackground />
          </View>
          <View style={{ height: 216, padding: 24 }}>
            <ProductColorTheme.FlatBackground />
          </View>
        </ProductColorTheme.CardWrapper>
        <View style={{ height: 8 }} />
        <View style={{ maxWidth: 269 }}>
          <View style={{ backgroundColor: "white" }}>
            <ProductColorTheme.CardWrapper showShadow={true}>
              <View style={{ height: 164 }}>
                <ProductColorTheme.GradientBackground />
              </View>
              <View style={{ height: 216, padding: 24 }}>
                <ProductColorTheme.FlatBackground />
                <ProductColorTheme.Separator />
              </View>
            </ProductColorTheme.CardWrapper>
          </View>
        </View>
      </View>
    );
  });
