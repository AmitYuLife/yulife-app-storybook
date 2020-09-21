import { renderHook, act } from "@testing-library/react-hooks";
import { useLocalNavigation } from "../useLocalNavigation";

type TestRoute = "Route1" | "Route2" | "Route3";

test("useLocalNavigation", () => {
  let timesPopToMain = 0;
  const { result } = renderHook(() =>
    useLocalNavigation<TestRoute>({
      initialRoute: "Route1",
      defaultRoute: "Route3",
      popToMain: () => {
        // Main route doesn't have to be equals to Route1
        timesPopToMain += 1;
      },
    })
  );

  // assert initial state
  expect(result.current.history).toEqual([{ route: "Route1", passProps: {} }]);
  expect(result.current.length).toEqual(1);
  expect(result.current.currentRoute.route).toEqual("Route1");
  expect(result.current.currentRoute.passProps).toEqual({});

  // push a new route without props
  act(() => {
    result.current.push("Route2");
  });

  // assert state after push without props
  expect(result.current.history).toEqual([
    { route: "Route1", passProps: {}, offset: { x: 0, y: 0 } },
    { route: "Route2", passProps: {} },
  ]);
  expect(result.current.length).toEqual(2);
  expect(result.current.currentRoute.route).toEqual("Route2");
  expect(result.current.currentRoute.passProps).toEqual({});

  // pop to previous route
  act(result.current.pop);

  // assert state after pop
  expect(result.current.history).toEqual([{ route: "Route1", passProps: {}, offset: { x: 0, y: 0 } }]);
  expect(result.current.length).toEqual(1);
  expect(result.current.currentRoute.route).toEqual("Route1");
  expect(result.current.currentRoute.passProps).toEqual({});

  // push a new route with props
  act(() => {
    result.current.push("Route3", { a: 1, b: 2 });
  });

  // assert state on push with props
  expect(result.current.history).toEqual([
    { route: "Route1", passProps: {}, offset: { x: 0, y: 0 } },
    { route: "Route3", passProps: { a: 1, b: 2 } },
  ]);
  expect(result.current.length).toEqual(2);
  expect(result.current.currentRoute.route).toEqual("Route3");
  expect(result.current.currentRoute.passProps).toEqual({ a: 1, b: 2 });

  // replace route3 with route2
  act(() => {
    result.current.replace("Route2", { c: 3 });
  });

  // assert replaced state
  expect(result.current.history).toEqual([
    { route: "Route1", passProps: {}, offset: { x: 0, y: 0 } },
    { route: "Route2", passProps: { c: 3 } },
  ]);
  expect(result.current.length).toEqual(2);
  expect(result.current.currentRoute.route).toEqual("Route2");
  expect(result.current.currentRoute.passProps).toEqual({ c: 3 });

  // pop 2 times to main
  act(result.current.pop);
  act(result.current.pop);

  // check that it didn't popToMain
  expect(timesPopToMain).toEqual(0);

  // pop 1 more time to popToMain
  act(result.current.pop);

  // check that it did popToMain
  expect(timesPopToMain).toEqual(1);

  // check if popToMain works directly
  act(result.current.popToMain);

  // check that it did popToMain
  expect(timesPopToMain).toEqual(2);
});
