import { groupProductCards } from "./groupProductCards";

describe("groupProductCards", () => {
  it("should switch between groups of 1 and 2, if every item has body text", () => {
    const groups = groupProductCards([
      { body: "1" },
      { body: "2" },
      { body: "3" },
      { body: "4" },
      { body: "5" },
      { body: "6" },
      { body: "7" },
      { body: "8" },
      { body: "9" },
      { body: "10" },
    ]);

    expect(groups).toEqual([
      [{ body: "1" }],
      [{ body: "2" }, { body: "3" }],
      [{ body: "4" }],
      [{ body: "5" }, { body: "6" }],
      [{ body: "7" }],
      [{ body: "8" }, { body: "9" }],
      [{ body: "10" }],
    ]);
  });

  it("should fallback to only groups 2, for items without body text", () => {
    const groups = groupProductCards([
      { body: "" },
      { body: "" },
      { body: "" },
      { body: "" },
      { body: "" },
      { body: "" },
      { body: "" },
      { body: "" },
      { body: "" },
      { body: "" },
    ]);

    expect(groups).toEqual([
      [{ body: "" }, { body: "" }],
      [{ body: "" }, { body: "" }],
      [{ body: "" }, { body: "" }],
      [{ body: "" }, { body: "" }],
      [{ body: "" }, { body: "" }],
    ]);
  });

  it("should handle an odd number of items without body text, padding out a lone item without body text with null", () => {
    const groups = groupProductCards([{ body: "" }, { body: "" }, { body: "" }]);

    expect(groups).toEqual([
      [{ body: "" }, { body: "" }],
      [{ body: "" }, null],
    ]);
  });

  it("should handle a mixture of items with and without body text, attempting to alternate between groups of 1 and 2 as much as possible", () => {
    const groups = groupProductCards([
      { body: "" },
      { body: "2" },
      { body: "3" },
      { body: "" },
      { body: "5" },
      { body: "6" },
      { body: "" },
      { body: "" },
      { body: "" },
      { body: "10" },
    ]);

    expect(groups).toEqual([
      [{ body: "" }, { body: "2" }],
      [{ body: "3" }],
      [{ body: "" }, { body: "5" }],
      [{ body: "6" }],
      [{ body: "" }, { body: "" }],
      [{ body: "" }, { body: "10" }],
    ]);
  });

  it("should handle an empty array", () => {
    const groups = groupProductCards([]);

    expect(groups).toEqual([]);
  });

  it("should handle a single element", () => {
    const groups = groupProductCards([{ body: "a" }]);

    expect(groups).toEqual([[{ body: "a" }]]);
  });

  it("should create two solo groups for exactly two elements", () => {
    const groups = groupProductCards([{ body: "a" }, { body: "b" }]);

    expect(groups).toEqual([[{ body: "a" }], [{ body: "b" }]]);
  });

  it("should handle a final empty item by falling back to a solo group and merging appropriately", () => {
    const groups = groupProductCards([{ body: "a" }, { body: "" }]);

    expect(groups).toEqual([[{ body: "a" }], [{ body: "" }]]);
  });
});
