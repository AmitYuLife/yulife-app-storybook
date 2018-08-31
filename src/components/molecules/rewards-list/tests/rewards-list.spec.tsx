import { shallow } from "enzyme";
import RewardsList from "../rewards-list";

const defaultProps = {
    data: [{}],
    onItemPress: jest.fn()
};

// TODO another test that mysteriously won't run

xdescribe("RewardsList", () => {

    it("should render with default props", () => {
        const actual = shallow(
            <RewardsList
                {...defaultProps}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
