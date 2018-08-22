import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// TODO why isn't this mock working?
jest.mock("react-native-config", () => ({
    API_URL: "http://api-url.com",
    SIGNUP_URL: "http://signup-url.com"
}));

jest.mock("react-native-intercom", () => {}, { virtual: true });

jest.mock("react-native-dual-pedometer", () => {
    Pedometer: {}
});

jest.mock("../src/graphql/member/addDailySteps.gql", () => ({
    addDailyStepsGql: jest.fn(),
}));
