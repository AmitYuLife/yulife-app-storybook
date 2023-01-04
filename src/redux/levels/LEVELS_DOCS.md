# Challenge tracking flow

This graph explains the flow of a challenge and how user steps/meditation is kept in sync when doing a challenge.

```mermaid
graph TD
    createChallenge[createChallenge] --> authorizeFitkit(authorizeFitkit)
    authorizeFitkit --> getChallengeDetails
    getChallengeDetails --> CHALLENGE_START_SUCCESS

    CHALLENGE_START_SUCCESS --> showPushNotificationModalSaga:::saga
    CHALLENGE_START_SUCCESS --> scheduleChallengeNotificationSaga:::saga
    CHALLENGE_START_SUCCESS --> startChallengeSuccessSaga:::saga

    function:::function --> condition:::condition --> saga:::saga --> dispatch:::dispatch --> selector:::selector --> gql:::gql

    startTracking:::function --> IsBeforeEndTime{Is before end time?}:::condition
    classDef condition fill:#E7CFA5,color:black
    classDef saga fill:#61d800,color:black
    classDef dispatch fill:#5300e8,color:white
    classDef function fill:#fa8100,color:white
    classDef selector fill:#3722f6,color:white
    classDef gql fill:#0f2ff6,color:white

    IsBeforeEndTime -->|Yes| queryFitKitByTypes["queryFitkitByTypes()"]
    queryFitKitByTypes:::function -->  hasData{Has any fitkit data?}:::condition
    hasData --> |No| Wait15[Wait 15 seconds]
    Wait15 --> queryFitKitByTypes
    IsBeforeEndTime -->|No| DISPATCH_CHALLENGE_END
    hasData --> |Yes| updateQuestMapLevelChallenge
    updateQuestMapLevelChallenge:::gql --> CHALLENGE_UPDATE_SUCCESS
    CHALLENGE_UPDATE_SUCCESS:::dispatch --> challengeCompleted{Challenge completed?}:::condition
    challengeCompleted --> CANCEL_LOCAL_PUSH
    CANCEL_LOCAL_PUSH:::dispatch --> DISPATCH_CHALLENGE_END

    startTrackingTime:::function --> isBeforeTimeTrackEnd{Is before end time?}:::condition
    isBeforeTimeTrackEnd --> |No| Wait14[Wait 15 seconds] --> isBeforeTimeTrackEnd
    isBeforeTimeTrackEnd --> |Yes| DISPATCH_CHALLENGE_END

    startChallengeSuccessSaga --> featureWaitForStepsSync{"has waitForStepsSync feature?"}:::condition
    featureWaitForStepsSync --> |Yes| setInitialSteps["setInitialSteps()"]:::function
    setInitialSteps --> getLastResults["select(getLastResults)"]:::selector
    getLastResults --> areLastResultsValid{"Are last results valid?"}:::condition
    areLastResultsValid --> pedometerStepsChallengeStarted["CHALLENGE_START_INITIAL_STEPS"]:::dispatch


    featureWaitForStepsSync --> |No| pedometerStepsChallengeStarted
    pedometerStepsChallengeStarted["CHALLENGE_START_INITIAL_STEPS"]:::dispatch --> startChallenge:::function
    startChallenge["startChallenge()"] --> shouldEndOnLastGoalAchieved{"challenge.shouldEndOnLastGoalAchieved?"}:::condition
    shouldEndOnLastGoalAchieved --> |Yes| startTracking
    shouldEndOnLastGoalAchieved --> |No| startTrackingTime
    shouldEndOnLastGoalAchieved --> CHALLENGE_IS_ACTIVE:::dispatch
    CHALLENGE_IS_ACTIVE --> WAIT_CHALLENGE_CANCEL{CHALLENGE_CANCEL dispatched?}:::condition
    WAIT_CHALLENGE_CANCEL --> |Yes| GQL_MUTATION_CANCEL_MAP_LEVEL_CHALLENGE
    GQL_MUTATION_CANCEL_MAP_LEVEL_CHALLENGE["cancelQuestMapLevelChallenge"]:::gql --> CancelMutationFail{Failed?}:::condition
    CancelMutationFail -->|Yes| challengeResetFailAction["CHALLENGE_RESET_FAIL"]:::dispatch


    DISPATCH_CHALLENGE_END["CHALLENGE_END"]:::dispatch --> isAlreadyComplete{Is already complete?}:::condition
    isAlreadyComplete --> |Yes| CHALLENGE_END_SUCCESS
    isAlreadyComplete --> |No| getEndResult["getEndResult()"]:::function
    getEndResult --> UpdateQuestMapLevelChallenge
    UpdateQuestMapLevelChallenge --> NetworkFailed{Did network fail?}:::condition
    NetworkFailed --> |Yes| CHALLENGE_END_FAIL:::dispatch --> Wait1Second[Wait 1 second] --> getEndResult
    NetworkFailed --> |No| ChallengePassed{Was challenge completed?}:::condition
    ChallengePassed --> |Yes| CHALLENGE_END_SUCCESS:::dispatch
    ChallengePassed --> |No| CHALLENGE_RESET_SUCCESS:::dispatch
```
