import { executeAll } from "./control";
import { manualTest } from "./manual";
import { IOnlyOrSkip, PromiseFunc } from "./types";

const getTestFn = (rootTestFn: any, { only, skip }: IOnlyOrSkip = {}) => {
    if (only) {
        return rootTestFn.only;
    }
    if (skip) {
        return rootTestFn.skip;
    }
    return rootTestFn;
};

const createPreStep = (prefix: string, modifiers?: IOnlyOrSkip) => (
    description: string,
    beforeHooks: PromiseFunc | PromiseFunc[],
    suiteBody: () => void
) => {
    const suiteFn = getTestFn(describe, modifiers);
    suiteFn(`${prefix} ${description}`, () => {
        if (Array.isArray(beforeHooks)) {
            before(() => executeAll(beforeHooks));
        } else if (typeof beforeHooks === "function") {
            before(beforeHooks);
        }
        suiteBody();
    });
};

const createPreStepWithoutHook = (prefix: string, modifiers?: IOnlyOrSkip) => (
    description: string,
    suiteBody: () => void
) => createPreStep(prefix, modifiers)(description, null, suiteBody);

const createAssertionStep = (description: string, testBody: () => void) => {
    it(`Then ${description}`, testBody);
};

const createManualAssertionStep = async (description: string) => {
    it(`Then ${description} (manual)`, manualTest(description));
};

export const Feature = createPreStepWithoutHook("Feature:");
export const FeatureOnly = createPreStepWithoutHook("Feature:", { only: true });

export const Scenario = createPreStep("Scenario:");
export const Given = createPreStep("Given");
export const When = createPreStep("When");
export const WhenOnce = createPreStep("When");
export const Then = createAssertionStep;
export const ThenManual = createManualAssertionStep;

export const ScenarioOnly = createPreStep("Scenario:", { only: true });
export const GivenOnly = createPreStep("Given", { only: true });
export const WhenOnly = createPreStep("When", { only: true });

export const ScenarioSkip = createPreStep("Scenario:", { skip: true });
export const GivenSkip = createPreStep("Given", { skip: true });
export const WhenSkip = createPreStep("When", { skip: true });
