import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// TODO why isn't this mock working?
jest.mock("react-native-config", () => ({
    API_URL: "http://api-url.com",
    SIGNUP_URL: "http://signup-url.com"
}));
