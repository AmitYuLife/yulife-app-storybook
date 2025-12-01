import { Colours } from "@styles";
import { Box, TextTemplate } from "@atoms";
import { memo, useState, useCallback, useEffect } from "react";
import { ChildrenUpdateTest } from "../tests/children-update-test";
import { InitialRenderTimeTest } from "../tests/initial-render-time-test";
import { PropUpdateTest } from "../tests/prop-update-test";
import { ScrollTest } from "../tests/scroll-test";
import { ResultsRow } from "./test-results-row";
import { Button } from "@components/molecules";
import {
  BENCHMARK_INITIAL_RENDER_COUNT,
  BENCHMARK_SCROLL_ITEM_COUNT,
  BENCHMARK_CHILDREN_UPDATE_ITERATIONS,
  BENCHMARK_PROP_UPDATE_ITERATIONS,
} from "../benchmark-config";

interface IComponentTestResults {
  totalInitialRenderTime?: number;
  averageInitialRenderTime?: number;
  totalScrollTime?: number;
  totalPropUpdateTime?: number;
  totalChildrenUpdateTime?: number;
  averageChildrenUpdateTime?: number;
  averagePropUpdateTime?: number;
}

enum TestStage {
  STAGING = "STAGING",
  RUNNING = "RUNNING",
  DONE = "DONE",
}

interface IComponentTesterProps {
  Component: any;
  name: string;
  itemHeight: number;
  getProps: (iteration: number) => any;
}

enum TestType {
  NONE = "NONE",
  INITIAL_RENDER_TEST = "INITIAL_RENDER_TEST",
  SCROLL_TEST = "SCROLL_TEST",
  PROP_UPDATE_TEST = "PROP_UPDATE_TEST",
  CHILDREN_UPDATE_TEST = "CHILDREN_UPDATE_TEST",
}

export const ComponentTester = memo(({ Component, itemHeight, name, getProps }: IComponentTesterProps) => {
  const [results, setResults] = useState<IComponentTestResults>({});
  const [stage, setStage] = useState<TestStage>(TestStage.STAGING);
  const [testType, setTestType] = useState<TestType>(TestType.NONE);

  const beginTest = useCallback(async () => {
    setStage(TestStage.RUNNING);
    setTestType(TestType.INITIAL_RENDER_TEST);
  }, []);

  useEffect(() => {
    setResults({});
    setTestType(TestType.NONE);
    setStage(TestStage.STAGING);
  }, [name]);

  return (
    <Box>
      <Box p={30} ml={10} gap={40}>
        <TextTemplate type="h2">
          {"<"}
          {name}
          {" />"} component test
        </TextTemplate>
        <Box flexDirection="row" gap={5} alignItems="center">
          <TextTemplate type="h3">Stage:</TextTemplate>
          <TextTemplate type="h3" color={stage === TestStage.RUNNING ? "red" : "green"}>
            {stage}
          </TextTemplate>
        </Box>
        {stage === TestStage.RUNNING ? <TextTemplate type="b2b">Test type: {testType}</TextTemplate> : null}
        {stage !== TestStage.RUNNING ? <Button testID="nope" onPress={beginTest} translatedLabel="Begin" /> : null}
      </Box>

      {testType === TestType.INITIAL_RENDER_TEST ? (
        <InitialRenderTimeTest
          name={name}
          props={getProps(0)}
          Component={Component}
          count={BENCHMARK_INITIAL_RENDER_COUNT}
          onFinish={({ totalTime, averageTime }) => {
            setResults((prev) => ({
              ...prev,
              totalInitialRenderTime: totalTime,
              averageInitialRenderTime: averageTime,
            }));

            setTestType(TestType.SCROLL_TEST);
          }}
        />
      ) : null}

      {testType === TestType.SCROLL_TEST ? (
        <ScrollTest
          Component={Component}
          onFinish={(time) => {
            console.log(`Total scroll time: ${time}ms`);
            setTestType(TestType.CHILDREN_UPDATE_TEST);
            setResults((prev) => ({ ...prev, totalScrollTime: time }));
          }}
          estimatedItemSize={itemHeight}
          props={getProps(0)}
          count={BENCHMARK_SCROLL_ITEM_COUNT}
        />
      ) : null}

      {testType === TestType.CHILDREN_UPDATE_TEST ? (
        <ChildrenUpdateTest
          iterations={BENCHMARK_CHILDREN_UPDATE_ITERATIONS}
          Component={Component}
          onFinish={({ totalTime, averageTime }) => {
            setResults((prev) => ({
              ...prev,
              totalChildrenUpdateTime: totalTime,
              averageChildrenUpdateTime: averageTime,
            }));
            setTestType(TestType.PROP_UPDATE_TEST);
          }}
          getProps={getProps}
        />
      ) : null}

      {testType === TestType.PROP_UPDATE_TEST ? (
        <PropUpdateTest
          iterations={BENCHMARK_PROP_UPDATE_ITERATIONS}
          Component={Component}
          onFinish={({ totalTime, averageTime }) => {
            console.log(`Total prop update time: ${totalTime}ms`);
            setResults((prev) => ({ ...prev, totalPropUpdateTime: totalTime, averagePropUpdateTime: averageTime }));
            setTestType(TestType.NONE);
            setStage(TestStage.DONE);
          }}
          getProps={getProps}
        />
      ) : null}

      {testType === TestType.NONE && stage === TestStage.DONE ? (
        <Box p={20}>
          <Box bg={Colours.debug.componentBg} p={24} center={true} gap={40}>
            <Box gap={10}>
              <ResultsRow label="Total initial render time" value={`${results.totalInitialRenderTime.toFixed(2)}ms`} />
              <ResultsRow
                label="Average initial render time"
                value={`${results.averageInitialRenderTime.toFixed(6)}ms`}
              />
              <ResultsRow label="Total scroll time" value={`${results.totalScrollTime.toFixed(2)}ms`} />
              <ResultsRow label="Total prop update time" value={`${results.totalPropUpdateTime.toFixed(2)}ms`} />
              <ResultsRow label="Average prop update time" value={`${results.averagePropUpdateTime.toFixed(4)}ms`} />
              <ResultsRow
                label="Total children update time"
                value={`${results.totalChildrenUpdateTime.toFixed(2)}ms`}
              />
              <ResultsRow
                label="Average children update time"
                value={`${results.averageChildrenUpdateTime.toFixed(4)}ms`}
              />
            </Box>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
});
