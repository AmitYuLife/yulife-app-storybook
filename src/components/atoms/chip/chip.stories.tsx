import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import { withProvider } from "../../storybook/withProvider";
import Chip from "./chip";

const voidFunc: () => void = () => null;

const testIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
<rect width="24" height="24" fill="#C4C4C4"/>
</mask>
<g mask="url(#mask0)">
<path d="M17.6892 17.22C16.7952 18.3637 18.1898 22.2596 18.1898 22.2596H9.69668C9.69668 22.2596 9.5894 19.9185 8.24838 20.0078C6.90735 20.1151 5.35177 20.2044 5.65573 18.4173C5.72725 17.9527 5.74513 17.5595 5.70937 17.2557C5.69149 16.9698 5.63785 16.7375 5.56633 16.5766C5.42329 16.1835 5.24449 16.0405 5.24449 16.0405L5.17296 15.2899L5.1372 14.9861C5.1372 14.9861 5.08356 14.8253 4.85112 14.7002C4.70808 14.6287 4.36835 14.5036 4.06439 14.3785C3.18825 14.039 3.43858 13.4313 3.97498 12.788C4.63656 12.0017 5.88818 11.0009 4.79748 9.58909C4.79748 9.58909 3.65314 -0.239926 15.6687 2.10117C15.6687 2.10117 22.6063 3.35213 20.6573 11.8766C20.6752 11.8766 20.1388 14.2713 17.6892 17.22Z" stroke="dynamicColor" stroke-width="1.45342" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.769 22.0977L12.9465 22.0977C12.3055 17.3566 8.19548 16.948 5.74968 17.1627C5.73282 16.8765 5.69348 16.7751 5.62601 16.614C7.70072 16.292 9.65332 16.614 9.65332 16.614C8.20271 15.0933 6.35049 15.1153 5.33844 15.3121V15.1065C5.33844 15.1065 5.35209 14.8608 5.13281 14.7355C12.1328 11.7657 13.4991 19.4677 13.769 22.0977Z" fill="dynamicColor" stroke="dynamicColor" stroke-width="0.598467" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.8915 11.9249C13.0952 11.5703 13.7471 10.932 14.7251 11.2157C15.9474 11.5703 15.8838 14.5648 13.7464 14.9923" stroke="dynamicColor" stroke-width="1.45342" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
`;

storiesOf("Chip", module)
  .addDecorator(withKnobs)
  .addDecorator(withProvider)
  .addDecorator((g: () => React.ReactNode) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{g()}</View>
  ))
  .add("Single", () => {
    return (
      <View>
        <Chip id="test" label="Test testtesttest" active={true} icon={testIcon} iconType={"xml"} onPress={voidFunc} />
        <Chip id="test" label="Test" active={false} icon={testIcon} iconType={"xml"} onPress={voidFunc} />
        <Chip
          id="test"
          label="Test testtesttest"
          active={true}
          icon="ears_nose_throat"
          iconType={"image"}
          onPress={voidFunc}
        />
        <Chip id="test" label="Test" active={false} icon="ears_nose_throat" iconType={"image"} onPress={voidFunc} />
      </View>
    );
  });
