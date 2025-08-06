import { NetInfoStateType } from "@react-native-community/netinfo";
import { useState, useEffect } from "react";

interface IProps {
  source: string;
  videoSourceType: string;
  connectionType: NetInfoStateType;
  dataSaverModeEnabled: boolean;
}

const VIDEO_QUALITY_HD_BIT_RATE = 18000000;

export function useGetVideoAvailableQualities({
  source,
  videoSourceType,
  connectionType,
  dataSaverModeEnabled,
}: IProps) {
  const [loading, setLoading] = useState(true);
  const [qualities, setQualities] = useState({ bitRate: VIDEO_QUALITY_HD_BIT_RATE }); // default the bit rate to the highest quality

  useEffect(() => {
    const fetchQualities = async () => {
      if (
        !source ||
        videoSourceType !== "m3u8" ||
        connectionType === NetInfoStateType.unknown ||
        connectionType === NetInfoStateType.wifi ||
        !dataSaverModeEnabled
      ) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(source);

        if (!response.ok) {
          return;
        }

        const content = await response.text();

        if (!content) {
          return;
        }

        const lines = content.split("\n").map((line) => line.trim());
        const parsedQualities = [];

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];

          if (line.startsWith("#EXT-X-STREAM-INF:")) {
            const streamInfo = parseStreamInfo(line);
            const nextLine = lines[i + 1];

            if (streamInfo && nextLine && !nextLine.startsWith("#")) {
              parsedQualities.push({
                ...streamInfo,
              });
            }
          }
        }

        parsedQualities.sort((a, b) => a.bitRate - b.bitRate);
        if (parsedQualities.length > 0) {
          setQualities(parsedQualities[0]);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchQualities();
  }, [source, videoSourceType, connectionType, dataSaverModeEnabled]);

  return { qualities, loading };
}

function parseStreamInfo(line: string) {
  const bandwidthMatch = line.match(/BANDWIDTH=(\d+)/);
  const resolutionMatch = line.match(/RESOLUTION=(\d+)x(\d+)/);

  if (!bandwidthMatch || !resolutionMatch) {
    return null;
  }

  return {
    bitRate: parseInt(bandwidthMatch[1]),
  };
}
