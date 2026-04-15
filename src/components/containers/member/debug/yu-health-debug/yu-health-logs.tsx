import { Box, TextTemplate } from "@atoms";
import { Button } from "@components/molecules";
import colours from "@styles/colours";
import {
  YuHealthEvent,
  addListener,
  aggregateQuery,
  HealthDataType,
  BucketSize,
} from "@yu-life/react-native-yu-health";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";

interface LogEntry {
  timestamp: string;
  message: string;
}

const YuHealthLogs = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    const subscription = addListener(YuHealthEvent.logEvent, (event) => {
      setLogs((prev) => [...prev, { timestamp: new Date().toLocaleTimeString(), message: event.message }]);
    });

    return () => subscription.remove();
  }, []);

  const triggerTestQuery = useCallback(async () => {
    setLogs((prev) => [
      ...prev,
      { timestamp: new Date().toLocaleTimeString(), message: "[JS] Triggering test aggregate query..." },
    ]);

    try {
      const now = new Date();
      const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

      const result = await aggregateQuery({
        dataType: HealthDataType.steps,
        startTime: thirtyDaysAgo,
        endTime: now,
        bucketConfig: { value: 1, unit: BucketSize.day },
        queryOptions: { blacklistApps: [], disableUserEntries: false },
      });

      const nonZero = result.result.filter((r) => r.value > 0);
      setLogs((prev) => [
        ...prev,
        {
          timestamp: new Date().toLocaleTimeString(),
          message: `[JS] Query returned ${result.result.length} buckets (${nonZero.length} non-zero)`,
        },
      ]);
    } catch (e) {
      setLogs((prev) => [
        ...prev,
        { timestamp: new Date().toLocaleTimeString(), message: `[JS] Error: ${e?.message}` },
      ]);
    }
  }, []);

  const clearLogs = useCallback(() => setLogs([]), []);

  return (
    <Box p={12} flex={1}>
      <Box flexDirection="row" gap={10} mb={12}>
        <Box flex={1}>
          <Button testID="yu-health-test-query" translatedLabel="Test Query" onPress={triggerTestQuery} />
        </Box>
        <Box flex={1}>
          <Button testID="yu-health-clear-logs" translatedLabel="Clear" onPress={clearLogs} />
        </Box>
      </Box>
      <TextTemplate type="b2b">Native Log Events ({logs.length})</TextTemplate>
      <ScrollView
        ref={scrollRef}
        style={{ marginTop: 8, maxHeight: 400 }}
        onContentSizeChange={() => scrollRef.current?.scrollToEnd()}
      >
        {logs.length === 0 ? (
          <TextTemplate type="b2" color={colours.debug.orangeText}>
            No events yet. Tap &ldquo;Test Query&rdquo; or pull-to-refresh activity history.
          </TextTemplate>
        ) : null}
        {logs.map((log, i) => (
          <Box key={i} py={4} borderBottomWidth={1}>
            <TextTemplate type="l2" color={colours.debug.orangeText}>
              {log.timestamp}
            </TextTemplate>
            <TextTemplate type="b2">{log.message}</TextTemplate>
          </Box>
        ))}
      </ScrollView>
    </Box>
  );
};

export default memo(YuHealthLogs);
