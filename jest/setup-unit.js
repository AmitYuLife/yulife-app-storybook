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

jest.mock("react-native-device-info", () => ({
    getUniqueID: jest.fn(),
}));

jest.mock("react-native-mixpanel", () => ({
    sharedInstanceWithToken: jest.fn(),
    identify: jest.fn(),
    track: jest.fn(),
    trackChargeWithProperties: jest.fn(),
}));

jest.mock("bugsnag-react-native", () => ({
    Configuration: jest.fn(),
    Client: jest.fn(),
}));

jest.mock("../src/graphql/challenges/upsertStepsChallenge.gql", () => ({
    addDailyStepsGql: jest.fn(),
}));
