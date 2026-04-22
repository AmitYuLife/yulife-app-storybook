import React from "react";
import { View } from "react-native";

export const CastButton = (props) => React.createElement(View, props);
export const useCastState = () => "noDevicesAvailable";
export const useRemoteMediaClient = () => null;
export const useCastSession = () => null;
export const useCastDevice = () => null;
export const useMediaStatus = () => null;
export const useStreamPosition = () => 0;
export const MediaPlayerState = {
  UNKNOWN: 0,
  IDLE: 1,
  PLAYING: 2,
  PAUSED: 3,
  BUFFERING: 4,
  LOADING: 5,
};
export default { CastButton, useCastState, useRemoteMediaClient, useCastSession, useCastDevice, useMediaStatus, useStreamPosition, MediaPlayerState };
