import addHistoricalSteps from "@graphql/challenges/addHistoricalSteps.gql";
import { queryHistoricalData } from "@services/fitkit/fitkit.helpers";
import moment from "moment";
import { call, put } from "redux-saga/effects";
import { SET_HISTORICAL_DATA_COLLECTED } from "../../onboarding.actions";
import sendHistoricalData from "../sendHistoricalData.helper";

describe("Onboarding Saga helper: sendHistoricalData", () => {
    it("catches the error", () => {
        const date = moment();
        const saga = sendHistoricalData(date);
        const mockData = {};

        expect(saga.next().value).toEqual(call(queryHistoricalData, date));
        expect(saga.next(mockData).done).toEqual(false);
        expect(saga.next().done).toEqual(true);
    });

    it("calls the api and updates the reducers", () => {
        const date = moment();
        const saga = sendHistoricalData(date);
        const mockData = { results: [{}] };

        expect(saga.next().value).toEqual(call(queryHistoricalData, date));
        expect(saga.next(mockData).value).toEqual(call(addHistoricalSteps, [{}], false));
        expect(saga.next().value).toEqual(put({ type: SET_HISTORICAL_DATA_COLLECTED }));
        expect(saga.next().done).toEqual(true);
    });
});
