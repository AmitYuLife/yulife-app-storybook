import { countSources, groupDatesByMonth } from "../activity-history.helpers";

describe("groupDatesByMonth", () => {
    it("should return an array of objects grouped by month", () => {
        const dates = [
            {
                id: "1",
                dayOfMonth: "13",
                dayOfWeek: "SAT",
                monthAndYear: "January 2019",
                level: 4,
                steps: 4098,
                sources: {},
                yucoin: 3,
                challenges: [
                    {
                        earned: 1,
                        milestones: 1,
                        name: "long walk",
                        score: "8000 steps"
                    },
                    {
                        earned: 3,
                        milestones: 2,
                        name: "meditation",
                        score: "08m 00s"
                    },
                    {
                        earned: 1,
                        milestones: 3,
                        name: "short stroll",
                        score: "1299 steps"
                    }
                ]
            },
            {
                id: "2",
                dayOfMonth: "21",
                dayOfWeek: "FRI",
                monthAndYear: "December 2018",
                level: 3,
                steps: 2098,
                sources: {},
                yucoin: 3,
                challenges: []
            }
        ];

        const actual = groupDatesByMonth(dates);

        expect(actual[0]).toHaveProperty("title", "January 2019");
        expect(actual[1]).toHaveProperty("title", "December 2018");
        expect(actual[0].items[0]).toHaveProperty("id", "1");
    });
});

describe("countSources", () => {
    it("should return correct count of the sources", () => {
        const sources = {
            device: 1234
        };

        const sourcesWithGarmin = {
            device: 1234,
            garmin: 5000
        };

        const actual = countSources(sources);
        const actualWithGarmin = countSources(sourcesWithGarmin);

        expect(actual).toBe(0);
        expect(actualWithGarmin).toBe(2);
    });
});
