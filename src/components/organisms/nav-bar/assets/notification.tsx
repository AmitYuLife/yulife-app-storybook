// tslint:disable:max-line-length
import * as React from "react";
import { Circle } from "react-native-svg";
import { Colours } from "../../../../styles";

interface IProps {
  isVisible: boolean;
}

const Notification = ({ isVisible }: IProps) => {
  return !isVisible ? null : (
    <>
      <Circle fill={Colours.navNotification.border} cx="236.1" cy="48.8" r="14" />
      <Circle fill={Colours.navNotification.body} cx="235.8" cy="48.8" r="11" />
    </>
  );
};

export default Notification;
