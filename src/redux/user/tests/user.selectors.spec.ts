import { initialState } from "../../_core/reducers";
import {
    getAcceptedLeaderboards,
    getAllLeaderboards,
    getConsentedLeaderboards,
    getIsUserArchived,
    getUserConnections,
    getUserConsent,
    getUserFeatures
} from "../user.selectors";

describe("User Selectors", () => {
    describe("getIsUserArchived selector", () => {
        it("returns the user's archived state", () => {
            const expected = initialState.user.archived;
            const actual = getIsUserArchived(initialState);

            expect(actual).toEqual(expected);
        });
    });

    describe("getUserConnections selector", () => {
        it("returns the user's connections state", () => {
            const expected = initialState.user.connections;
            const actual = getUserConnections(initialState);

            expect(actual).toEqual(expected);
        });
    });

    describe("getUserConsent selector", () => {
        it("returns the user's consent state", () => {
            const expected = initialState.user.consent;
            const actual = getUserConsent(initialState);

            expect(actual).toEqual(expected);
        });
    });

    describe("getUserFeatures selector", () => {
        it("returns the user's features state", () => {
            const expected = initialState.user.features;
            const actual = getUserFeatures(initialState);

            expect(actual).toEqual(expected);
        });
    });

    describe("getAllLeaderboards selector", () => {
        it("returns the user's leaderboards state", () => {
            const expected = initialState.user.leaderboards;
            const actual = getAllLeaderboards(initialState);

            expect(actual).toEqual(expected);
        });
    });

    describe("getAcceptedLeaderboards selector", () => {
        it("returns the user's accepted leaderboards state", () => {
            const expected = initialState.user.leaderboards.filter((l) => l.hasAccepted);
            const actual = getAcceptedLeaderboards(initialState);

            expect(actual).toEqual(expected);
        });
    });

    describe("getConsentedLeaderboards selector", () => {
        it("returns the user's consented leaderboards state", () => {
            const expected = initialState.user.leaderboards.reduce((prev, curr) => {
                // company leaderboard has 32 chars (and it should be first), custom leaderboards have 38
                if (curr.leaderboardId.length === 32) {
                    return [curr, ...prev];
                } else if (curr.consent) {
                    return [...prev, curr];
                }
                return prev;
            }, []);
            const actual = getConsentedLeaderboards(initialState);

            expect(actual).toEqual(expected);
        });
    });
});
