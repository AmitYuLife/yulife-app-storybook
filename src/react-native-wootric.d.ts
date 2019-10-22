// no typings are available in npm
declare module "@wootric/react-native-wootric" {
    interface Wootric {
        configureWithClientID: (clientId: string, secret: string) => void;
        setEndUserEmail: (email: string) => void;
        setSurveyImmediately: (isImmediately: boolean) => void;
        setEndUserCreatedAt: (createdAt: number) => void;
        setEndUserExternalId: (externalId: string) => void;
        setEndUserPhoneNumber: (phoneNr: string) => void;
        setEndUserProperties: (props: any) => void;
        showOptOut: (optOut: boolean) => void;
        setFirstSurveyAfter: (someNumber: number) => void;
        setCustomLanguage: (lang: string) => void;
        setCustomProductName: (productName: string) => void;
        setCustomAudience: (name: string) => void;
        showSurvey: () => void;
    }

    export default {
        configureWithClientID,
        setEndUserEmail,
        setSurveyImmediately,
        setEndUserCreatedAt,
        setEndUserExternalId,
        setEndUserPhoneNumber,
        setEndUserProperties,
        showOptOut,
        setFirstSurveyAfter,
        setCustomLanguage,
        setCustomProductName,
        setCustomAudience,
        showSurvey
    } as Wootric;
}
