import React from "react";
import { View } from "react-native";

export const CastButton = (props) => <View {...props} />;
export const useCastState = () => "noDevicesAvailable";
export const useRemoteMediaClient = () => null;
export const useCastSession = () => null;
export const useCastDevice = () => null;
export const useMediaStatus = () => null;
export const useStreamPosition = () => 0;

export default {
  CastButton,
  useCastState,
  useRemoteMediaClient,
  useCastSession,
  useCastDevice,
  useMediaStatus,
  useStreamPosition,
};
