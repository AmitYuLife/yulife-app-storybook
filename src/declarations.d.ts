declare module "react-native-testfairy" {
    export default class TestFairy {
        static begin(appKey: string, options: any = {}): void;
        static setCorrelationId(correlationId: string): void;
        static identify(correlationId: string, traits: any = {}): void;
        static takeScreenshot(): void;
        static pause(): void;
        static resume(): void;
        static addEvent(eventName: string): void;
        static sendUserFeedback(feedback: string): void;
        static hideView(viewTag: any): void;
        static setServerEndpoint(url: string): void;
        static log(obj: any): void;
        static setScreenName(name: string): void;
        static stop(): void;
        static setUserId(userId: string): void;
        static setAttribute(key: string, value: string | number | boolean): void;
        static pushFeedbackController(): void;
        static hideWebViewElements(selector: any): void;
        static enableCrashHandler(): void;
        static disableCrashHandler(): void;
        static enableMetric(metric: "cpu" | "memory" | "logcat" | "battery" | "network-requests"): void;
        static disableMetric(metric: "cpu" | "memory" | "logcat" | "battery" | "network-requests"): void;
        static enableVideo(
            policy: "always" | "wifi" | "none",
            quality: "high" | "medium" | "low",
            framesPerSecond: number
        ): void;
        static disableVideo(): void;
        static enableFeedbackForm(method: "shake"): void;
        static disableFeedbackForm(): void;
        static setMaxSessionLength(seconds: number): void;
    }
}
