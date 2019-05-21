import { reduceUserFeatures } from "../user.helpers";

describe("reduceUserFeatures helper", async () => {
    it("should work correctly", async () => {
        const currentUserFeatures = { first: true, second: true };
        const reducedUserFeature = { name: "second", value: false };
        const expectedUserFeatures = { ...currentUserFeatures, second: false };

        const userFeatures = reduceUserFeatures(currentUserFeatures, reducedUserFeature);

        expect(userFeatures).toEqual(expectedUserFeatures);
    });
});
