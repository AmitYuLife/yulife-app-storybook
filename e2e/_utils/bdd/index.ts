import { manualTest } from "./manual";
import { executeAll } from "./control";
import { PromiseFunc, OnlyOrSkip } from "./types";

const getTestFn = (rootTestFn, { only, skip }: OnlyOrSkip = {}) => {
    if (only) {
        return rootTestFn.only;
    }
    if (skip) {
        return rootTestFn.skip;
    }
    return rootTestFn;
};

const createPreStep = (prefix: string, modifiers?: OnlyOrSkip) => (
    description: string,
    beforeHooks: PromiseFunc | PromiseFunc[],
    suiteBody: () => void,
) => {
    const suiteFn = getTestFn(describe, modifiers);
    suiteFn(`${prefix} ${description}`, () => {
        if (Array.isArray(beforeHooks)) {
            before(() => executeAll(beforeHooks))
        } else if (typeof beforeHooks === "function") {
            before(beforeHooks);
        }
        suiteBody();
    });
};

const createPreStepWithoutHook = (prefix: string, modifiers?: OnlyOrSkip) => (
    description: string,
    suiteBody: () => void,
) => createPreStep(prefix, modifiers)(description, null, suiteBody);

const createAssertionStep = (description, testBody) => {
    it(`Then ${description}`, testBody);
};

const createManualAssertionStep = async (description: string) => {
    it(`Then ${description} (manual)`, manualTest(description));
}

export const Feature = createPreStepWithoutHook("Feature:");
export const FeatureOnly = createPreStepWithoutHook("Feature:", { only: true });
export const FeatureSkip = createPreStepWithoutHook("Feature:", { skip: true });

export const Scenario = createPreStep("Scenario:");
export const Given = createPreStep("Given");
export const When = createPreStep("When");
export const WhenOnce = createPreStep("When");
export const Then = createAssertionStep;
export const And = createAssertionStep;
export const ThenManual = createManualAssertionStep;

export const ScenarioOnly = createPreStep("Scenario:", { only: true });
export const GivenOnly = createPreStep("Given", { only: true });
export const WhenOnly = createPreStep("When", { only: true });

export const ScenarioSkip = createPreStep("Scenario:", { skip: true });
export const GivenSkip = createPreStep("Given", { skip: true });
export const WhenSkip = createPreStep("When", { skip: true });

export const ThenIOS = (description: string, fn: VoidFunction) => () => {
    if (device.getPlatform() === "ios") {
        return Then(description, fn);
    } else {
        return ThenManual(description);
    }
}