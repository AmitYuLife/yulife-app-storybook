export function useProgress(updateInterval = 1000) {
  return {
    duration: 10000,
    position: 500,
  };
}

export const Event = {
  PlayerError: "player-error",
  PlaybackState: "playback-state",
  PlaybackError: "playback-error",
  PlaybackQueueEnded: "playback-queue-ended",
  PlaybackTrackChanged: "playback-track-changed",
  PlaybackActiveTrackChanged: "playback-active-track-changed",
  PlaybackMetadataReceived: "playback-metadata-received",
  PlaybackPlayWhenReadyChanged: "playback-play-when-ready-changed",
  PlaybackProgressUpdated: "playback-progress-updated",
  RemotePlay: "remote-play",
  RemotePause: "remote-pause",
  RemoteStop: "remote-stop",
  RemoteNext: "remote-next",
  RemotePrevious: "remote-previous",
  RemoteJumpForward: "remote-jump-forward",
  RemoteJumpBackward: "remote-jump-backward",
  RemoteSeek: "remote-seek",
  RemoteSetRating: "remote-set-rating",
  RemoteDuck: "remote-duck",
  RemoteLike: "remote-like",
  RemoteDislike: "remote-dislike",
  RemoteBookmark: "remote-bookmark",
  RemotePlayId: "remote-play-id",
  RemotePlaySearch: "remote-play-search",
  RemoteSkip: "remote-skip",
  MetadataChapterReceived: "metadata-chapter-received",
  MetadataTimedReceived: "metadata-timed-received",
  MetadataCommonReceived: "metadata-common-received",
};
