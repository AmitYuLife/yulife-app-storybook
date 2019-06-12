# Detox Testing

## Getting started
1. Pull and run the api server in a separate folder (). Run `yarn develop:e2e` to start the api service in e2e mode
2. Navigate to the root of this project
3. Build the detox IPA by running `npm run e2e:build`. This might take a while
4. Start the RN server in e2e mode by running `npm run start:e2e`
5. Run your tests by running `npm run e2e:run`
    - You will need applesimutils installed for this - `brew install wix/brew/applesimutils`

## Commands
- `npm run e2e:build` - builds 
- `npm run e2e:run` - runs tests, skips manual assertions
- `npm run e2e:run:includeManual` - runs tests, asks for user inputs on manual assertions
- `npm run e2e:run:manualOnly` - runs manual tests only with `.manual.spec.ts` extension 

Important: run `yarn start:e2e` when running the packager in order for the mocks to work.

## Debugging
- The easiest way to check if an element is not found is to open the mochaawesome report in __report

## Gotchas

### Keyboard error
Problem: detox complains keyboard is not on screen
Solution: Open simulator via xcode, disconnect the hardware keyboard

## Scenarios

### Authorization
```
FEATURE: As a new user I can get past the login screen
    SCENARIO: I cannot login with the wrong password for my email address
        GIVEN: I have entered a valid email address but an invalid password
            WHEN: I press `log in`
                THEN: my email address should remain unchanged in the email field
                THEN: my password should remain unchanged in the password field
                THEN: an error message should tell me that the combination does not exist
                THEN: the login button should not be disabled
    SCENARIO: I can login with correct login details and make it past the intro screens
        GIVEN: I have entered a valid email address and valid password
            WHEN: I press `log in`
                THEN: I should not longer be on the login screen
                THEN: I should see a prompt to connect to the health app
                THEN: I should see a link to the privacy notice
                WHEN: I press authorise healthkit
                    THEN: I should see the sign up reward screen
                    THEN: I should see a visual indicator to say i've been awarded 200 coins
                    WHEN: I press next on on each of the screens (5 times)
                        THEN: I land on the daily steps screen
                        THEN: The quests tab should be active
                        THEN: I should see 200 coins in the top right hand corner
                        WHEN: I register 1000 steps walked since last opening
                            THEN: I should see 1000 steps on the screen
                WHEN: I press `do not allow` authorising healthkit
                    THEN: I should see the signup reward screen
                    THEN: I should see a visual indicator to say i've been awarded 200 coins
                    WHEN: I press next on on each of the screens (5 times)
                        THEN: I land on the daily steps screen
                        THEN: I should see the authorise healthkit message
```
--------------------------------------------------------------------------------------------------------

### Routing
```
FEATURE: As a user I can navigate through member routes correctly
    SCENARIO: I can view the core screens of the app without it crashing
        GIVEN: I have logged in and passed the intro screens
            WHEN: I press on the `yucoin` tab
                THEN: The quests tab should be active
                THEN: The yucoin tab should be inactive
                THEN: The rewards tab should be inactive
                THEN: I should see the daily steps screen
                WHEN: I press on the yucoin image
                    THEN: I should see the today's yucoin screen
            WHEN: I press on the `quests` tab
                THEN: The quests tab should be active
                THEN: The yucoin tab should be inactive
                THEN: The rewards tab should be inactive
                THEN: I should see the quest map
            WHEN: I press on the `rewards` tab
                THEN: The yucoin tab should be inactive
                THEN: The quests tab should be inactive
                THEN: The rewards tab should be active
                THEN: I should see a list of possible rewards
    SCENARIO: I can view the menu screens of the app without it crashing
        GIVEN: I have logged in and passed the intro screens
            WHEN: I press on the top left menu
                THEN: I should see the menu
                WHEN: I press on activity history
                    THEN: I should see the activity history screen
                    THEN: I should see the last 30 days of my activity
                    WHEN: I close the activity history screen
                        THEN: I should see the daily steps screen
            WHEN: I press on the top left menu
                THEN: I should see the menu
                WHEN: I press on leaderboards
                    THEN: I should see the leaderboards screen
                    WHEN: I close the leaderboards screen
                        THEN: I should see the daily steps screen
            WHEN: I press on the top left menu
                THEN: I should see the menu
                WHEN: I press on settings
                    THEN: I should see the settings screen
                    WHEN: I close the settings screen
                        THEN: I should see the daily steps screen
            WHEN: I press on the top left menu
                THEN: I should see the menu
                WHEN: I press on play intro
                    THEN: I should see the intro screens
                    WHEN: I press next on each of the screens 5 times
                        THEN: I should see the daily steps screen
            WHEN: I press on chat
                THEN[ANDROID]: I should see the intercom window appear
                WHEN[IOS]: push notifications are enabled
                    THEN: I should see the intercom window appear
                WHEN[IOS]: push notifications permissions are missing
                    THEN: I should see the allow push notification screen
                WHEN[IOS]: push notifications permissions are denied
                    THEN: I should see the go to settings push notification screen
            WHEN: I press on `logout`
                THEN: I should see the login screen
    SCENARIO: I can view all the quest screens without the app crashing
        GIVEN: I have logged in, passed the intro screens and have not done any challenge today
            WHEN: I press on the `quests` tab
                THEN: I should see the quest map
                WHEN: I press on my current level
                    WHEN: the current level is a chest level
                        THEN: I should see the start the chest level screen
                            WHEN: I press on `let's do it`
                                THEN: I should see the challenge list screen
                    THEN: I should see the challenge list screen
                        WHEN: I close the challenge lists screen
                            THEN: I should see the quest map
                WHEN: I press on a higher level than mine
                    THEN: I should see the challenge unavailable screen
                        WHEN: I close the challenge unavailable screen
                            THEN: I should see the quest map
                WHEN: I press on a lower level than mine
                    THEN: I should see the challenge history screen
                        WHEN: I close the challenge history screen
                            THEN: I should see the quest map
                WHEN: I press on a higher level than mine and that's a chest level
                    THEN: I should see the unlock chest at level screen
                        WHEN: I close the chest unavailable screen
                            THEN: I should see the quest map
        GIVEN: I have logged in, passed the intro screens and have done all available challenges today
            WHEN: I press on the `quests` tab
                THEN: I should see the quest map
                WHEN: I press on my current level
                    THEN: I should see the next level available screen
                        WHEN: I close the challenge lists screen
                            THEN: I should see the quest map
    SCENARIO: I can view all the rewards screens without the app crashing
        GIVEN: I have logged in and passed the intro screens
            WHEN: I press on the `rewards` tab
                THEN: I should see a list of possible rewards
                    WHEN: I press on an available reward
                        THEN: I should see the reward details screen
                            WHEN: I close the reward details screen
                                THEN: I should see the rewards screen
                    WHEN: I press on an unavailable reward
                        THEN: I should see the reward not available screen
                            WHEN: I press `check other rewards`
                                THEN: I should see the rewards screen
                    WHEN: I press on the `purchased` nav-tab
                        THEN: I should see the purchases screen
                            WHEN: No purchases were made
                                THEN: I should see the empty purchases screen
                            WHEN: I press on a previous purchase
                                THEN: I should see the purchase confirmation screen
                                    WHEN: I close the purchase confirmation screen
                                        THEN: I should see the purchases screen
    SCENARIO: I can view all unauthenticated screens
        GIVEN: I am not logged in
            WHEN: I press on `Forgot password` link
                THEN: I should see the forgot password screen
                    WHEN: I press `back`
                        THEN: I should see the login screen
            WHEN: I press `sign up`
                THEN: I should see a webview with the underwriting journey signup
```
--------------------------------------------------------------------------------------------------------

### Quests

## Worlds
```
FEATURE: As a user I can complete both types of challenge in the first world
    SCENARIO: I can finish a walking challenge in the first world
        GIVEN: I have logged in and passed the intro screens and I pressed the `quests` tab and my level is within 1-49
            THEN: I should see the first world part of the quest map
                WHEN: I press on the short stroll challenge
                    THEN: I should see the short stroll challenge details page
                        WHEN: I press on the take challenge button
                            THEN: I should see the challenge progress screen for short stroll
                                WHEN: I register 2000 steps in 10 minutes
                                    THEN: I should see 2000 steps on the screen
                                WHEN: The time ends
                                    THEN: I should see the time's up screen
                                        WHEN: I press `show results` button
                                            THEN: I should see the challenge success screen
                                                WHEN: I press on `collect`
                                                    THEN: I should see the quest map screen
                                                    THEN: I should see my total coin increasing
    SCENARIO: I can finish a meditation challenge in the first world
        GIVEN: I have logged in and passed the intro screens and I pressed the `quests` tab and my level is within 3-49
            THEN: I should see the first world part of the quest map
                WHEN: I press on the meditation challenge
                    THEN: I should see the meditation challenge details page
                        WHEN: I press on the take challenge button
                            THEN: I should see the challenge progress screen for meditation
                                WHEN: I register 10 mindful minutes
                                    THEN: I should see the time's up screen
                                        WHEN: I press `show results` button
                                            THEN: I should see the challenge success screen
                                                WHEN: I press on `collect`
                                                    THEN: I should see the quest map screen
                                                    THEN: I should see my total coin increasing

FEATURE: As a user I can complete both types of challenge in the second world
    SCENARIO: I can finish a walking challenge in the second world
        GIVEN: I have logged in and passed the intro screens and I pressed the `quests` tab and my level is within 50-99
            THEN: I should see the second world part of the quest map
                WHEN: I press on the short stroll challenge
                    THEN: I should see the short stroll challenge details page
                        WHEN: I press on the take challenge button
                            THEN: I should see the challenge progress screen for short stroll
                                WHEN: I register 2000 steps in 10 minutes
                                    THEN: I should see 2000 steps on the screen
                                WHEN: The time ends
                                    THEN: I should see the time's up screen
                                        WHEN: I press `show results` button
                                            THEN: I should see the challenge success screen
                                                WHEN: I press on `collect`
                                                    THEN: I should see the quest map screen
                                                    THEN: I should see my total coin increasing
    SCENARIO: I can finish a meditation challenge in the second world
        GIVEN: I have logged in and passed the intro screens and I pressed the `quests` tab and my level is within 50-99
            THEN: I should see the second world part of the quest map
                WHEN: I press on the meditation challenge
                    THEN: I should see the meditation challenge details page
                        WHEN: I press on the take challenge button
                            THEN: I should see the challenge progress screen for meditation
                                WHEN: I register 10 mindful minutes
                                    THEN: I should see the time's up screen
                                        WHEN: I press `show results` button
                                            THEN: I should see the challenge success screen
                                                WHEN: I press on `collect`
                                                    THEN: I should see the quest map screen
                                                    THEN: I should see my total coin increasing

FEATURE: As a user I can complete both types of challenge in the third world
    SCENARIO: I can finish a walking challenge in the third world
        GIVEN: I have logged in and passed the intro screens and I pressed the `quests` tab and my level is within 100-149
            THEN: I should see the third world part of the quest map
                WHEN: I press on the short stroll challenge
                    THEN: I should see the short stroll challenge details page
                        WHEN: I press on the take challenge button
                            THEN: I should see the challenge progress screen for short stroll
                                WHEN: I register 2000 steps in 10 minutes
                                    THEN: I should see 2000 steps on the screen
                                WHEN: The time ends
                                    THEN: I should see the time's up screen
                                        WHEN: I press `show results` button
                                            THEN: I should see the challenge success screen
                                                WHEN: I press on `collect`
                                                    THEN: I should see the quest map screen
                                                    THEN: I should see my total coin increasing
    SCENARIO: I can finish a meditation challenge in the third world
        GIVEN: I have logged in and passed the intro screens and I pressed the `quests` tab and my level is within 100-149
            THEN: I should see the third world part of the quest map
                WHEN: I press on the meditation challenge
                    THEN: I should see the meditation challenge details page
                        WHEN: I press on the take challenge button
                            THEN: I should see the challenge progress screen for meditation
                                WHEN: I register 10 mindful minutes
                                    THEN: I should see the time's up screen
                                        WHEN: I press `show results` button
                                            THEN: I should see the challenge success screen
                                                WHEN: I press on `collect`
                                                    THEN: I should see the quest map screen
                                                    THEN: I should see my total coin increasing

FEATURE: As a user I can complete both types of challenge in the fourth world
    SCENARIO: I can finish a walking challenge in the fourth world
        GIVEN: I have logged in and passed the intro screens and I pressed the `quests` tab and my level is within 150-199
            THEN: I should see the fourth world part of the quest map
                WHEN: I press on the short stroll challenge
                    THEN: I should see the short stroll challenge details page
                        WHEN: I press on the take challenge button
                            THEN: I should see the challenge progress screen for short stroll
                                WHEN: I register 2000 steps in 10 minutes
                                    THEN: I should see 2000 steps on the screen
                                WHEN: The time ends
                                    THEN: I should see the time's up screen
                                        WHEN: I press `show results` button
                                            THEN: I should see the challenge success screen
                                                WHEN: I press on `collect`
                                                    THEN: I should see the quest map screen
                                                    THEN: I should see my total coin increasing
    SCENARIO: I can finish a meditation challenge in the fourth world
        GIVEN: I have logged in and passed the intro screens and I pressed the `quests` tab and my level is within 150-199
            THEN: I should see the fourth world part of the quest map
                WHEN: I press on the meditation challenge
                    THEN: I should see the meditation challenge details page
                        WHEN: I press on the take challenge button
                            THEN: I should see the challenge progress screen for meditation
                                WHEN: I register 10 mindful minutes
                                    THEN: I should see the time's up screen
                                        WHEN: I press `show results` button
                                            THEN: I should see the challenge success screen
                                                WHEN: I press on `collect`
                                                    THEN: I should see the quest map screen
                                                    THEN: I should see my total coin increasing
```
## Challenges
```
FEATURE: As a user I can take a challenge
    SCENARIO: I can take a challenge and cancel it
        GIVEN: I have logged in and passed the intro screens and I pressed the `quests` tab
            WHEN: I press on my current level
                THEN: I should see the challenge list screen
                    WHEN: I press on the short stroll challenge
                        THEN: I should see the short stroll challenge details page
                            WHEN: I press on the take challenge button
                                THEN: I should see the challenge progress screen for short stroll
                                    WHEN: I press on the cancel challenge button
                                        THEN: I should see the exit challenge? Screen
                                            WHEN: I press on the no way! button
                                                THEN: I should see the challenge progress screen for short stroll
                                            WHEN: I press on the exit button
                                                THEN: I should see the quests screen
    SCENARIO: I can finish succesfully a challenge
        GIVEN: I have logged in and passed the intro screens and I pressed the `quests` tab
            WHEN: I press on my current level
                THEN: I should see the challenge list screen
                    WHEN: I press on the short stroll challenge
                        THEN: I should see the short stroll challenge details page
                            WHEN: I press on the take challenge button
                                THEN: I should see the challenge progress screen for short stroll
                                    WHEN: I register 2000 steps in 10 minutes
                                        THEN: I should see 2000 steps on the screen
                                    WHEN: The time ends
                                        THEN: I should see the time's up screen
                                            WHEN: I press `show results` button
                                                THEN: I should see the challenge success screen
                                                    WHEN: I press on `collect`
                                                        THEN: I should see the quest map screen
                                                        THEN: I should see my total coin increasing
    SCENARIO: I can fail a challenge
        GIVEN: I have logged in and passed the intro screens and I pressed the `quests` tab
            WHEN: I press on my current level
                THEN: I should see the challenge list screen
                    WHEN: I press on the short stroll challenge
                        THEN: I should see the short stroll challenge details page
                            WHEN: I press on the take challenge button
                                THEN: I should see the challenge progress screen for short stroll
                                    WHEN: I register 100 steps in 10 minutes
                                        THEN: I should see 100 steps on the screen
                                    WHEN: The time ends
                                        THEN: I should see the time's up screen
                                            WHEN: I press `show results` button
                                                THEN: I should see the challenge failed screen
                                                    WHEN: I press on `got it`
                                                        THEN: I should see the quest map screen
                                                        THEN: I should see my total being the same
    SCENARIO: I can finish succesfully a chest challenge
        GIVEN: I have logged in and passed the intro screens and I pressed the `quests` tab
            WHEN: I press on my current level and the current level has a chest
                THEN: I should see the challenge list screen
                    WHEN: I press on the short stroll challenge
                        THEN: I should see the short stroll challenge details page
                            WHEN: I press on the take challenge button
                                THEN: I should see the challenge progress screen for short stroll
                                    WHEN: I register 2000 steps in 10 minutes
                                        THEN: I should see 2000 steps on the screen
                                    WHEN: The time ends
                                        THEN: I should see the time's up screen
                                            WHEN: I press `show results` button
                                                THEN: I should see the chest unlocked animation screen
                                                    WHEN: I press on `collect`
                                                        THEN: I should see the challenge success screen
                                                            WHEN: I press on `collect`
                                                                THEN: I should see the quest map screen
                                                                THEN: I should see my total coin increasing
```
--------------------------------------------------------------------------------------------------------
### Streaks

```
FEATURE: As a user I can use the streaks functionality
    SCENARIO: I can start a new streak
        GIVEN: I have logged in for the first time
            WHEN: I pass the intro screens
                THEN: I should see the start your streak screen
                    WHEN: I press on the `take a challenge` button
                        THEN: I should see the quest map screen
                            WHEN: I take a challenge succesfully
                                THEN: I should see `1/5` on the daily steps with the blue color
    SCENARIO: I can continue a streak
        GIVEN: I have opened the app the next day and I have seen the `1/5` with pink color
            WHEN: I press on `1/5`
                THEN: I should see the streak details screen
                    WHEN: I press on the `take a challenge` button
                        THEN: I should see the quest map screen
                            WHEN: I take a challenge succesfully
                                THEN: I should see `2/5` on the daily steps with the blue color
                                    WHEN: I press on `2/5`
                                        THEN: I should see that today's day is done
    SCENARIO: I can redeem a streak
        GIVEN: I have opened the app the next day and I have seen the `4/5` with pink color
            WHEN: I press on `4/5`
                THEN: I should see the streak details screen
                    WHEN: I press on the `take a challenge` button
                        THEN: I should see the quest map screen
                            WHEN: I take a challenge succesfully
                                THEN: I should see `5/5` on the daily steps with the blue color
                                    WHEN: I press on `5/5`
                                        THEN: I should see the reward and the next time the streak is available
    SCENARIO: I can break a streak
       GIVEN: I had yesterday my streak `2/5` with pink color and I didn’t take no challenge
           WHEN: I open the app
                THEN: I should see `0/5` on the daily steps with pink color (edited) 
```
--------------------------------------------------------------------------------------------------------

### Rewards

```
FEATURE: As a user I can redeem a reward
    SCENARIO: I cannot redeem a reward
        GIVEN: I have logged in, I have pressed the `quests` tab and I am offline
            WHEN: I press on an available reward
                THEN: I should see the reward details screen
                    WHEN: I press on the `buy with x yucoin` button
                        THEN: I should see the `you're offline` message
        GIVEN: I have logged in, I have pressed the `quests` tab and there are unexpected issues with reward providers
            WHEN: I press on an available reward
                THEN: I should see the reward details screen
                    WHEN: I press on the `buy with x yucoin` button
                        THEN: I should see the `reward currently unavaialable` message
        GIVEN: I have logged in, I have pressed the `quests` tab
            WHEN: I press on an available reward
                THEN: I should see the reward details screen
                    WHEN: I press on the `buy with x yucoin` button
                        THEN: I should see the reward confirmation screen
                        THEN: I should see the amount paid being withdrawn from my total yucoin
        GIVEN: I have logged in, I have pressed the `quests` tab and I have less yucoin than a reward needs
           WHEN: I press on an available reward
               THEN: I should see the reward details screen
                   WHEN: I press on the `buy with x yucoin` button
                       THEN: I should see the `not enough coin` message
```
--------------------------------------------------------------------------------------------------------

### Leaderboards

```
FEATURE: As a user I can see my achievements on the leaderboards
    SCENARIO: I can consent to company leaderboard
        GIVEN: I am new yulife customer, I have logged in and I have pressed the menu icon
            WHEN: I press on `leaderboards` link
                THEN: I should see the leaderboard consent screen
                    WHEN: I press on the `yes please` button
                        THEN: I should see the leaderboard
                        THEN: I should see it scroll to my current position
                    WHEN: I press on the `no` button
                        THEN: I should see the daily steps screen
    SCENARIO: I can check other leaderboards
        GIVEN: I have logged in, I am part of multiple leaderboards and I have pressed the menu icon
            WHEN: I press on `leaderboards` link
                THEN: I should see the leaderboard screen
                    WHEN: I swipe left and right
                        THEN: I should see other leaderboards
                        THEN: I should see it scroll to my current position in that particular leaderboard
    SCENARIO: I can join a new leaderboard
        GIVEN: I have logged in and someone has invited me to their leaderboard
            WHEN: I open the app
                THEN: I should see the leaderboard invite screen
                    WHEN: I press on the `accept invite` button
                        THEN: I should see the daily steps screen
                            WHEN: I press on the menu and on the `leaderboards` link
                                THEN: I should be able to swipe to that leaderboard
                    WHEN: I press on the `decline` button
                        THEN: I should see the daily steps screen
                            WHEN: I press on the menu and on the `leaderboards` link
                                THEN: I should not be able to swipe to that leaderboard
    SCENARIO: I can change the consent of any leaderboard
        GIVEN: I have logged in and I have pressed the menu icon
            WHEN: I press on `settings` link
                THEN: I should see the settings screen including the leaderboards I belong
                    WHEN: I press on a active leaderboard
                        THEN: I should see a spinner
                        THEN: I should see its consent change to `false`
                        WHEN: I close the settings screen and I press on the menu icon
                                THEN: I should see the menu
                                    WHEN: I press on the `leaderboards` link
                                        THEN: I should see only the leaderboards I consent to
```
--------------------------------------------------------------------------------------------------------

### Offline

```
FEATURE: As a user I can check the app in an offline mode
    SCENARIO: I can view the core screens of the app without it crashing
        GIVEN: I have logged in and passed the intro screens
            WHEN: I press on the `yucoin` tab
                THEN: I should see the offline daily steps screen
            WHEN: I press on the `quests` tab
                THEN: I should see the offline quests screen
            WHEN: I press on the `rewards` tab
                THEN: I should see the cached rewards
            WHEN: I press on the `purchases` tab from `rewards`
                THEN: I should see the cached purchases
            WHEN: I press on the `menu` icon
                THEN: I should see the menu
                    WHEN: I press on `activity history`
                        THEN: I should see the cached activity history
                    WHEN: I press on `leaderboards`
                        THEN: I should see the cached leaderboards
```