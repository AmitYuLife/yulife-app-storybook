import getMobileCopy from "@graphql/copy/getMobileCopy.gql";
import { call, put, select } from "redux-saga/effects";
import { updateCopy } from "../copy.actions";
import copyData from "../copy.data";
import { getCopyVersion } from "../copy.selectors";
import updateCopySaga from "../sagas/updateCopy.saga";

const fakeData = {
    data: {
        getMobileCopy: {
            version: "1",
            screens: copyData
        }
    }
};

describe("Copy Saga", () => {
    it("should call updateCopySaga correctly", () => {
        const testSaga = updateCopySaga();
        let actual: any = testSaga.next();
        let expected: any = call(getMobileCopy);

        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next(fakeData);
        expected = select(getCopyVersion);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expected = put(updateCopy(fakeData.data));
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });

    it("should call updateCopySaga without updateCopy", () => {
        const testSaga = updateCopySaga();
        let actual: any = testSaga.next();
        const expected: any = call(getMobileCopy);

        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next({});
        expect(actual.done).toEqual(true);
    });
});
