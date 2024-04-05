import Logger from "@services/logging/logger";
import TrackPlayer, { Event, Capability, Track } from "react-native-track-player";

const PROGRESS_UPDATE_INTERVAL_SECONDS = 1;

class AudioPlayerInstance {
  private initialised = false;

  public init = async () => {
    if (!this.initialised) {
      try {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.updateOptions({
          capabilities: [Capability.Play, Capability.Pause],
          compactCapabilities: [Capability.Play, Capability.Pause],
          progressUpdateEventInterval: PROGRESS_UPDATE_INTERVAL_SECONDS,
        });
        this.initialised = true;
      } catch (error) {
        Logger.error(error, { location: "AudioPlayer.init" });
      }
    }
  };

  public registerAudioPlayerListeners = async () => {
    TrackPlayer.addEventListener(Event.RemotePlay, async () => await TrackPlayer.play());
    TrackPlayer.addEventListener(Event.RemotePause, async () => await TrackPlayer.pause());
  };

  public loadTrack = async (track: Track) => {
    try {
      await TrackPlayer.load(track);
    } catch (error) {
      Logger.error(error, { location: "AudioPlayer.loadTrack" });
    }
  };

  public addTrack = async (track: Track) => {
    try {
      await TrackPlayer.add(track);
    } catch (error) {
      Logger.error(error, { location: "AudioPlayer.add" });
    }
  };

  public playTrack = async () => {
    try {
      await TrackPlayer.play();
    } catch (error) {
      Logger.error(error, { location: "AudioPlayer.play" });
    }
  };

  public pauseTrack = async () => {
    try {
      await TrackPlayer.pause();
    } catch (error) {
      Logger.error(error, { location: "AudioPlayer.pause" });
    }
  };

  public resetPlayer = async () => {
    try {
      await TrackPlayer.reset();
    } catch (error) {
      Logger.error(error, { location: "AudioPlayer.reset" });
    }
  };
}

const AudioPlayerServiceInstance = new AudioPlayerInstance();

export default AudioPlayerServiceInstance;
