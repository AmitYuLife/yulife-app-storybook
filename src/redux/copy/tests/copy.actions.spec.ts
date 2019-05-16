import { UPDATE_COPY, updateCopy } from "../copy.actions";
import copyData from "../copy.data";

const getMobilCopyFixture = {
    getMobileCopy: {
        version: "1.1",
        screens: copyData
    }
};

describe("Copy actions", async () => {
    it("updateCopy action", async () => {
        const actual = updateCopy(getMobilCopyFixture);
        const expected = UPDATE_COPY;

        expect(actual.type).toEqual(expected);
    });
});
