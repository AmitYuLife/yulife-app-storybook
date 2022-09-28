# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.50.0] - 2022-09-28

### Features

- Task: Add user features to debug menu

### Bugfixes

- Bugfix: EOTW fixes
- Bugfix ENG-2920: handle about blank links on ios
- Bugfix: Event panel border
- Bugfix: Display uncompleted star on quests and improvements
- Bugfix: Missing background image 2
- Bugfix: Streaks styles
- Bugfix: Quest slice assets and topbar colour

### Tasks

- Task XSE-1387: Make ProductStepScrollPicker to handle data set specific initial default index
- Task: Add Quests map prompt state
- Revert Task GS-454: Menu Accessibility
- Task GS-454: Menu accessibility

### Chores

- Chore: Import locales from relative path, add suffix
- Chore: Detox taken up CPE
- Chore: Standardise snake case in i18n

### Extra

- Detox/pli fixes 27 9
- Detox: extended fixes 27_9
- Detox: Remove taken up status of personal products
- Detox/fixes 26 9
- Detox/meditopia 1
- Hotfix: Handle YuScreenProductDetails ContentItemMarkdown, use toggle yuScreenV4
- detox:add select region to the app tests
- Detox/fixes 20 9

## [3.49.0] - 2022-09-21

### Bugfixes

- Bugfix: Chest opening animation
- Bugfix: Space travel yumoji pin crop
- Bugfix: Accessibility surge modal and offline screen
- Bugfix: Ignore ilustration for ios accessibility

### Tasks

- Task: Change EOTW copies
- Task GS-455: [EotW Tracking] 157 - information_viewed
- Task: Change event panel colours to match red planet style
- Task GS-444: Streak accessibility
- Task: EotW Chest Updates
- Task GS-433: Implement New World Quest Screen Designs

### Chores

- Chore: Improve meditopia tracking
- Chore: Add bottom padding on AllProducts screen
- Chore: Suppress carousel card loading UI

## [3.48.0] - 2022-09-14

### Features

- Feature XSE-1345: Add AllProducts screen
- Feature XSE-1249: Update YuScreen carousel card

### Bugfixes

- Bugfix XSE-1368: Fix sdui action in useYuScreenOnPressHandler
- Bugfix: Add FAQ link on meditation when using a different option app

### Tasks

- Task: YuScreen V4 US
- Revert "Task: YuScreen V4 US"
- Task: YuScreen V4 US
- Task: Everything US YuScreen left
- Task GS-393: Event Panel Space Themes
- Task GS-442: Implement New Today Screen Designs
- Task GS-431: Add Yuniversal Yugi animation
- Task XSE-1364: Support markdown / styles
- Task GS-440: Login screen accessibility
- Task GS-441: Sign-up bonus screen accessibility
- Task GS-413: Add FAQ button on challenge progress screen

### Chores

- Chore: Make heading not requried for carousel
- Chore: Change image component to use one from @atoms for consistency
- Chore: Move yuscreen assets to assets directory
- Chore: Improve YuScreen earn rate spacing

### Extra

- Detox/fixes 12 9
- Hotfix: Product List Use ID as key and increase padding
- Detox/gdental
- Detox/draw state
- Detox/fixes 8 9
- Detox/products vs slots
- Hotfix: Allow interaction to be toggled on yucoin power content item

## [3.47.0] - 2022-09-07

### Features

- Feature XSE-1347: YuCoin power screen rework
- Feature XSE-1224: Product details employer funded

### Bugfixes

- Bugfix: Remove bold type for inspect draw state

### Tasks

- Task XSE-1303: Yumoji builder changes
- Task: Log Google fit permission state based on toggle
- Task GS-411: Yunity Chest Animations
- Task GS-437: Daily screen accessibility

### Chores

- Chore: Improve typings (slightly) and fix duplicate index by using unique...
- Chore: Improve content item info button
- Chore: use FlatList in settings layout
- Chore: Adjust onboaring content position

### Extra

- detox: fix the start date of product
- detox:some fixes due changes
- detox:change text for dental journey
- detox:fix e2e NATIVE_EVENT

## [3.46.0] - 2022-08-31

### Bugfixes

- Bugfix: Volume show as casting on android devices on video-player

### Tasks

- Task XSE-1331: New product slot field

### Chores

- Chore: Optimise assets
- Chore: Change the toggle to enable in-app meditation

## [3.45.0] - 2022-08-26

### Bugfixes

- Bugfix: Prevent onEnd to be called twice on video-player
- Bugfix: Improve android back button on meditopia
- Bugfix: Display buttons on daily screen on small devices if there is no events

### Tasks

- Task XSE-1297: Align yumoji
- Task: Update Fitkit version 1.0.22
- Task XSE-1192: Info panel updates
- Task: Yuscreen Carrier logo
- Task: Log events from native bridge
- Task GS-409: Purge old active challenges logic
- Task XSE-1330: YuScreen onboarding updates and refactor
- Task XSE-1302: Reset FIB/Dental journeys

### Chores

- Chore: Set limit for last update
- Chore: Change close button to go back button on challenge details screen
- Chore: Restart pedometer at midnight
- Chore: date on userDuel obj
- Chore: Add support for lottie animation on media player

### Extra

- Detox:save card when got product test
- Detox/inspect players
- detox/fixes_18_8

## [3.44.0] - 2022-08-17

### Bugfixes

- Bugfix ENG-2839: Pop to rewards list screen on rewards details error
- Bugfix: Meditation not recording passive correctly
- Bugfix ENG-2797: Update android JavaScriptCore

### Tasks

- Task GS-411: Show challenge creation error message in in-app meditation challenge
- Task: Purge passive cycling toggle
- Revert "Merge branch 'task/XSE-1303-yumoji-builder-changes' into 'develop'"
- Task XSE-1303: Yumoji builder changes

### Chores

- Chore: Improve performance on prod by removing all console.\* calls
- Chore: quests map context

### Extra

- Detox/fixes 16 8
- detox:add one more test to User Onboarding
- detox:overnight fixes of text
- detox:adjust the text test due changes
- Detox/fixes 10 08
- Detox: turn off animation
- detox/fixes_10_8

## [3.43.0] - 2022-08-10

### Features

- Feature XSE-1296: YuScreen onboarding
- Feature: Select region overlay

### Bugfixes

- Bugfix XSE-1310: Status bar Android and small device fix
- Bugfix: Trophy position on claim goals rewards
- Bugfix: Meditopia challenge ends and the collect yucoin mechanism is triggered automatically
- Bugfix: Update coins when claim weekely quests
- Bugfix GS-419: fix challenge count after yuniversal
- Revert "Bugfix: Correct store link for apple"
- Bugfix ENG-2828: Dismiss modal even on error
- Bugfix: back handler for inspect/event dialog
- Bugfix: Force exoplayer on android devices and improvements on meditopia player
- Bugfix: Disable bugsnag sourcemaps for android local builds

### Tasks

- Task GS-416: Open inspect on press leaderboard item
- Task GS-421: Inspect draw state
- Task GS-403: weekly quests
- Task GS-418: Purge old statistics
- Task GS-417: Swap duel and challenges stats
- Task: Update schema
- Task ENG-2742: Filter data from blacklist apps
- Task: Leaderboard refreshing state for ios set to false
- Task XSE-1286: Yumoji prompt server driven
- Task: Survey link on yuscreen

### Chores

- Chore: Disable onboarding buttons on submit
- Chore: optional chain on nullable
- Chore: Add documentation for the purpose of throttling and allow disable
- Chore: exclude bugsnag network errors and add fast-image to proguard

### Extra

- Detox: overnight fixes done
- Purge: package readline
- Purge: atoms YugiGPIcon
- Purge: molecules SwitchTab
- Purge: molecules HorizontalScroller
- Purge: molecules TextWithBoldText
- Purge: Button unused icons
- detox/new_yuscreenV4
- Purge: GenderIcon component
- Purge: AlcoholDrinksSvg component
- Hotfix: weeklies toggle name
- Purge: @apollo/react-testing package
- Purge: bcryptjs package
- Purge: keypress-prompt package
- detox/fixes_04_08
- Purge: react-native-community-slider package
- Purge: yup package
- Refactor: leaderboard useSelector
- Hotfix: center warning

## [3.42.0] - 2022-08-03

### Features

- Feature XSE-1184: personal products SDUI action events action creator

### Bugfixes

- Bugfix ENG-2827: Hide action button on small screens if event available
- Bugfix: Log error correctly on activity history reload
- Bugfix: Send health_app to intercom as custom attribute
- Bugfix: Correct store link for apple
- Bugfix: Bugsnag storybook build
- Bugfix: quests screen component id
- Bugfix: upgrade bugsnag
- Bugfix: Set disableFocus to true for android devices
- Bugfix: cancel custom media notifications
- Bugfix: Use sagas to log mixpanel events on video-player component

### Chores

- Chore: Update YuCoin awarded text
- Chore: Update react-native-video exoplayer version
- Chore: Update schema and types from latest develop branch
- Detox/Chore: Clean up e2e
- Detox/Chore: Remove Rewards mongo

### Extra

- Hotfix: Quest Map list is empty sometimes
- Detox: overnight fixes
- detox/fixes_01_08
- detox/expiry_rules_test
- detox/fixes_29_07
- Hotfix: Increase the minLoadRetryCount on video-player and only send passive when challenge end

## [3.41.0] - 2022-07-27

### Features

- Feature XSE-1200 XSE-1201: New YuScreen

### Bugfixes

- Bugfix: Add logs for meditopia and improvements
- Bugfix: Opening inspect from lean leaderboard
- Bugfix ENG-2796: A stack cant contain two children with the same id
- Bugfix: Failed to execute stack command stack not found
- Bugfix ENG-2801: Could not dismiss Overlay with id yulife.modals.blurredOverlay was not found

### Snyk

- Snyk: Security upgrade moment from 2.29.3 to 2.29.4

### Chores

- Chore: Dont show world icon
- Chore: one game mechanic button to rule 'em all
- Chore: Yuscreen V4 beta not dev
- Chore: ground work for weeklies (activity-progress and floating-modal)

### Extra

- Hotfix: Stopping annimation
- Purge: community goals
- Purge: Custom type cover
- detox: added yesterday streak challenge functionality
- Hotfix: update region for magic links
- detox: added canceled scenario policy

## [3.40.0] - 2022-07-20

### Features

- Feature XSE-1195 XSE-1197: Add new YuScreen components

### Bugfixes

- Bugfix: Inspect long name and VS not showing if user has no avatar
- Bugfix: Cycling aggregation query
- Bugfix ENG-2798: referralInformation undefined is not an object (evaluating "f.referralLink")
- Bugfix ENG-2800: Stack yulife.quests.ChallengesList not found
- Bugfix: Enable audio on background
- Bugfix: Meditopia improvements
- Bugfix: Assign default colors to or operator to protect when gql passes null

### Tasks

- Task GS-323: space map adjustments
- Task: Purge event stages
- Task: Play 15 seconds video on detox tests

### Chores

- Chore: bug fixes for collect goals and a copy fix
- Chore: Readme update for push notification testing

### Extra

- detox/fiixes_20_07
- Detox/end the world
- detox:add progression to test
- Detox/fixes 14 7
- detox: dental approved scenario

## [3.39.0] - 2022-07-13

### Features

- Feature XSE-1191: Add ContentItemButton UI fields (needs https://gitlab.com/yu-life/yulife-api-server/-/merge_requests/5003)
- Feature XSE-1202: Add YuScreen v4 behind toggle

### Bugfixes

- Bugfix: Set videoPlayerIsActive to false when all challenges end
- Bugfix: Improvements on Media components
- Bugfix: Add extra buttons on media list and improvements
- Bugfix: Media list navigation issues & small improvements
- Bugfix: Navigation issue when creating challenge on android devices
- Bugfix: Inspect empty avatar, use localization
- Bugfix GS-320: Fix tooltips on android and other adjustments

### Tasks

- Task: Deep link PPs
- Task: Open duel hubs from inspect
- Task GS-340: Meditopia content selection screen initial work
- Task GS-388: Get inspect stats from server
- Task GS-323: Update 7 Stages In Space Assets

### Chores

- Chore: enable multi region for prod

### Extra

- (HEAD -> develop, origin/develop, refs/pipelines/587115611) Hotfix: US Prod API uri
- Detox/high step count
- detox/edit_payment_cards
- detox: overnight fixes 24/6/22

## [3.38.0] - 2022-07-06

### Bugfixes

- Bugfix: Skip upload sourcemaps if Bugsnag api key is not set
- Bugfix: use reward title for purchases

### Tasks

- Task US-20: readable US short date format
- Task GS-320: yunity screen adjustments
- Task GS-320: Yunity & Yuniversal Transition Screens
- Task US-3: purge yuscreen intro

### Chores

- Chore TF-273: remove old toggles
- Chore: Upgrade bugsnag to latest

### Extra

- Revert: one intercom instance
- Purge GS-371: Purge Old Challenge & Passive Activities Code
- Hotfix: enable multiple regions for UAT
- Detox GS-379: Activity settings

## [3.37.0] - 2022-06-29

### Bugfixes

- Bugfix: Allow + symbol on deeplinks

### Tasks

- Task GS-379: Add activity permission to game section

### Extra

- detox/fixes_22_06

## [3.36.0] - 2022-06-22

### Features

- Feature XSE-1128: Disable SDUI button while loading

### Bugfixes

- Bugfix XSE-736: Edit payment details is failing
- Bugfix: Claiming rewards after events end
- Bugfix: Permissions copy & inspect styles
- Bugfix ENG-2703 - Samsung health today steps
- Bugfix GS-373: Fix inspect UI
- Bugfix: init logger after user fetch
- Bugfix: Remove audio from UIBackgroundModes until video-player is fully ready
- Bugfix ENG-2736: US reset password subheading

### Tasks

- Task GS-375: Inspect activity UI
- Task GS-374: Permissions copy update
- Task GS-356: Add Event Finished Screen
- Task GS-373: Inspect character sheet ui

### Chores

- Chore: Implement pre-commit hook to check large patches

### Extra

- Purge: unused user selectors
- Detox: Change invite_date to employment_start_date
- Hotfix: Allow zero earn rate on YuScreen
- detox:fix change the text looks
- Hotfix: react-native-video patch fix
- detox:pli_fix
- Hotfix: existing config check
- Hotfix: intercom not initialising

## [3.35.0] - 2022-06-08

### Bugfixes

- Bugfix: Activity history not showing yucoin on SM-S20
- Bugfix: Storybook aliases

### Tasks

- Task: Update CI/CD for storybook deployment
- Task GS-357: Claim rewards animations

### Extra

- detox: Permissions To Health test
- detox: fixes for overnight_failures

## [3.34.0] - 2022-06-01

### Bugfixes

- Bugfix: event_id tracking
- Bugfix: Improvements on VideoPlayer component
- Bugfix: default ad banners array
- Bugfix: android messagging service

### Tasks

- Task GS-362: Other wearables platform based copy
- Task GS-355: Finish events
- Task GS-362: Other wearables
- Task GS-346: Media Player Screen
- Task GS-337: Settings Permission UI
- Task: Remove write permissions
- Task: Permission settings

### Chores

- Chore: Additional event logging info
- Chore: product survey query
- Chore: use reward denomination alert

### Extra

- detox: overnight fixes
- detox: assert date by locale US or GB
- detox/fixes_26_05
- detox: assert the correct ammount of coins is issued

## [3.33.0] - 2022-05-25

### Bugfixes

- Bugfix: notification settings
- Bugfix: Set default values for aggregate biking query toggles
- Bugfix: misplaced logo

### Tasks

- Task: Add claim reward animation
- Task: signup reward copy
- Task: send user's locale to the server

### Chores

- Chore: query on screen only
- Chore: remove hooks from services
- Chore: added locale
- Chore: remote config

### Extra

- detox/fixes_24_05
- Refactor: offline and no access screens to use translations
- detox:small fixes for overnight run
- detox: yuniversal world

## [3.32.0] - 2022-05-20

### Bugfixes

- Bugfix: White flash when going to challenges list on EOTW
- Bugfix GS-231: hide yuniversal title on smaller devices
- Bugfix: EOTW handle press on android devices
- Bugfix: Event panel bottom border on android
- Bugfix: Add shadow on event panel and improve adbanner height
- Bugfix GS-293: Ad disappearing after click on event
- Bugfix GS-231: level bubble fix

### Chores

- Chore: patch intercom for init

### Extra

- detox: overnight_fix_20_05
- detox: fixed the fail scenarios
- Hotfix: default yulife cache id from object
- Detox/goals
- Purge: unused env vars
- Hotfix: Swipers needing IDs

## [3.31.0] - 2022-05-12

### Features

- Feature XSE-1032: Add event handler on PLI custom age picker

### Bugfixes

- Bugfix: Android build fix
- Bugfix: store the selected region and return the uri
- Bugfix: show correct animations for level 250/300/350/400 unity
- Bugfix: minor event fixes
- Bugfix: Protect LabelledHorizontalScroller from destructive behavior
- Bugfix: EOTW don't subtract challenge from yuniversal

### Tasks

- Task GS-334: [DEBUG] Level Selector
- Task: reward store selection
- Task: US config
- Task GS-293: Add An Ad Panel In The Today Screen
- Task GS-262: EOTW's Phase 1 Hack - 2
- Task: Aggregate biking query on android

### Chores

- Chore: one arrow component to rule them all

### Improvements

- Improvement: fix event header aspect ratio

### Extra

- detox: add restrictions to core rewards
- detox: fix for failed tests
- Detox/fixes 09 05
- detox: rewards scenario
- Purge: legacy rewards

## [3.30.0] - 2022-05-05

### Bugfixes

- Bugfix: Hide action button on short to medium android

### Tasks

- Task GS-327: Check for meditation and cycling permission before query
- Task: Create debug tool
- Task GS-319: add tick icon to progress bar claimed reward milestones

### Chores

- Chore: added back the stats toggle
- Chore: upgrade fast image

### Extra

- detox: fixes the change of text and added some waittime
- Fix: Small event fixes
- Detox: Add core rewards
- Detox/info icon today test
- detox:added some wait time to PLI
- detox: added small fixes to overnight failures

## [3.29.0] - 2022-04-27

### Bugfixes

- Bugfix: refactor claim reward logic
- Bugfix: progress bar pulse
- Bugfix: info icon on daily screen
- Bugfix: join goal event
- Bugfix: Bring InformationIcon closer to YuCoin on daily screen
- Bugfix: Add missing mixpanel event type

### Tasks

- Task: animate claimable goal rewards
- Task: preload reward images
- Task GS-283: Generic popup tooltip
- Task: refetch events after challenge completion
- Task GS-289: Add Meditopia To Quest Screen

### Chores

- Chore: Event fixes
- Chore: surpress image loading ui for events
- Chore: RN Redux state logging
- Chore XSE-951: Migrate non-atoms from atoms folder

### Extra

- detox:multifactor price change test
- Fix ENG-2654: Move join leaderboard button between paragraphs
- detox:changed the average minutes per day number test
- Detox: fixes_25_04
- Hotfix: isDailyScreenInformationIconHidden fix
- Detox: add userOnboarding to the users

## [3.28.0] - 2022-04-20

### Features

- Feature: rewards-list v2 under toggle

### Tasks

- Task GS-279: Claim goal rewards
- Task XSE-946: Allow context aware sdui action on lottie onAnimationEnd
- Task GS-238: Update Yucoin To Show It Is Selectable
- Task GS-275: Add Stay Tuned Event Panel

### Snyk

- Snyk: Security upgrade react-native-svg from 12.1.0 to 12.3.0
- Snyk: Security upgrade moment from 2.24.0 to 2.29.2

### Chores

- Chore: improve chip-list android responsiveness

### Extra

- Detox: remove the trailing space
- Hotfix: purchases in reward list footer
- detox:added small fix clearKeychain where is missing

## [3.27.0] - 2022-04-13

### Bugfixes

- Bugfix: Align checkbox to top only on ContentItemConfirm
- Bugfix: crash on app upgrade related to yuScreen notifications

### Tasks

- Task GS-280 GS-277: Join goal
- Task HACK-22: Secure storage
- Task XSE-931: Add cubic checkbox type
- Task XSE-934: Add Bupa Package Details top padding
- Task HACK-9 B: Remove unused code
- Task XSE-933: Fix TextInput line color when inactive
- Task XSE-865: Yu screen notifications
- Task XSE-916: Fix Checkbox color
- Task XSE-920: Fix Markdown link color
- Task: Process iOS aggregated result on global queue
- Task XSE-938: Reduce checkbox size from 32 to 24

### Chores

- Chore: Memoize component to bring it in line with all of the others
- Chore: improve box-option and export nav-bar styles
- Chore: Add pipeline to sync Storybook into s3 bucket

### Extra

- Hotfix: revert the token file and clearKeychain on detox start/restart
- Hotfix: default to AsyncStorage for detox
- Hotfix: remove clearStorage
- Hotfix: use import
- Hotfix: import encryptedStorage and removeItem in e2e init
- Hotfix: clear token after test suite
- Revert: use Touchable for BoxOption
- detox:activity history screen add cycling and mindfulness
- detox: referral reward ammount on yuscreen test
- Detox/fix cycling aggregated query and overnightfix
- Hotfix: join/api url trailing slash removal

## [3.26.0] - 2022-04-06

### Bugfixes

- Bugfix XSE-901: Refetch user profile data on navigate back/finish to update avatar and earn rate
- Bugfix XSE-922: Reset Yu Screen scroll position on route change
- Bugfix: Support dynamic height for event reward message view
- Bugfix: Fix contentItemTextInput alignment
- Bugfix: Don't show collect modal after logout
- Bugfix: Make footer expand to edges

### Tasks

- Task: Aggregated query biking iOS
- Task: Add source data for biking payload
- Task GS-255: Add tracking and increase icone size
- Task GS-266: Get more cycling types
- Task GS-257: Create graphql end points for events panel
- Task: Add reward info message to debug screen
- Task GS-255: Add Referral Icon
- Task GS-267: Goal reward info message

### Chores

- Chore: Remove duplicate button press event

### Extra

- detox: from pliv1 to pliv2 test

## [3.25.0] - 2022-03-30

### Bugfixes

- Bugfix GS-272: Fix multiple feedback form
- Bugfix: Do not render cycling distance if is below 0.1
- Bugfix: Get current balance for daily passive query

### Tasks

- Task GS-273: Query cycling and meditation from activity history
- Task: Add Biking workout for helper tool

### Chores

- Chore: Add markdown to detached product step
- Chore: Add maxLength on multiline-text-input

### Extra

- Detox: dental continue

## [3.24.0] - 2022-03-23

### Features

- Feature: Default values for collapsed header and variable top text for swiper

### Bugfixes

- Bugfix GS-268: Android topbar
- Bugfix: Improve PercentPicker FlatList render speed
- Bugfix: Use Loading atom instead of ActivityIndicator
- Bugfix: Move scroll limiter from touchEnd to scrollEnd and momentumEnd
- Bugfix: Fix incorrect index on PackageCards when a non-template value is active
- Bugfix: Protect ContentItemCollapsingHeaderAgePercentProductInfo activeCover from undefined value
- Bugfix: Protect FlatList atom from destructive behavior
- Bugfix: ContentItemButton events fix

### Tasks

- Task: Fitkit log tool
- Task GS-263: Get event details from server side
- Task XSE-827: Collapsing Header for PLI v2
- Task XSE-819: Gp checkout changes

### Extra

- Hotfix: Rename bad spelling restricted property
- Cypress: upgraded yulife-bdd-framework 0.0.14
- Detox/pli overnightfix11 03
- Hotfix: Centralise long product intro headings

## [3.23.0] - 2022-03-09

### Features

- Feature XSE-822 XSE-825 XSE-826: Multi factor pricing (dependency: https://gitlab.com/yu-life/yulife-api-server/-/merge_requests/4122)

### Bugfixes

- Bugfix GS-190: Use correct variation of InfoPanel and fix cta padding on IOS
- Bugfix ENG-2540: Max steps anomaly window from server
- Bugfix: Event Dialog icon quality and positioning
- Bugfix: Fix contentItemTextInput prefix value absolute position
- Bugfix: Better validation for NumberSlider on feedbackForm
- Bugfix GS-246: Request cycling permission only once for iOS

### Tasks

- Task GS-190: [Event Dialog] Create Story, Task, and Feedback modules
- Task GS-196: Replace Text from atoms with TextTemplate (Activity history)
- Task XSE-832: Cost benefit sdui

### Chores

- Chore: React-native-web and Storybook
- Chore: add the no-shadow eslint rule
- Chore: FitKit enums and exports
- Chore: Theme options on Full screen lottie

### Extra

- Copy: Capitalize default login heading
- detox: overnight fix

## [3.22.0] - 2022-03-02

### Bugfixes

- Bugfix: Remove yumojiRemoteUrl check from yu-screen container
- Bugfix GS-242: Surge modal countdown and close on expiration
- Bugfix GS-235: Fix never ask again location permission popup
- Bugfix: Set min width for progress bar (today's earnings screen)
- Bugfix GS-188: Event Dialog styling fixes
- Bugfix GS-248: Reset next day core activity data on active app state
- Bugfix GS-250: Block yesterday last update queries
- Bugfix XSE-774: expand on target component

### Tasks

- Task GS-236: Kill as many queries on app load
- Task GS-191: Create event reward modal

### Chores

- Chore: Trigger updateCopySaga after updateUserProfile is trigged
- Chore: Skip sample error when no fitkit results for bugsnag

### Extra

- Hotfix: Added bugsnag metadata to error log
- detox/invite_colleague

## [3.21.0] - 2022-02-23

### Bugfixes

- Bugfix ENG-2497: query steps if pedometer has not synced
- Bugfix XSE-775: Match arrow speed on expand and collapse
- Bugfix GS-188: event dialog fixes
- Bugfix XSE-795: update textColour to be undefined for success state
- Bugfix GS-245: Fix active challenge update queries
- Bugfix: fix totalcoins when using new passive challenge mutation
- Bugfix GS-235: Fix cycling permission flow on today earning
- Bugfix: Fix loading states in ProductStepContainer

### Tasks

- Task XSE-785: Add LabelledHorizontalScroller molecule
- Task GS-232 & GS-239: Add referrals button to dailySteps screen
- Task XSE-772: Initialise package cost benefit card
- Task GS-188: Create Event Dialog Screen

### Chores

- Chore: Rename challenge services toggles
- Revert "Chore: upgrade bdd"
- Chore: upgrade bdd
- Chore: yulife-bdd upgrade
- Chore: Fix detox tests after products re-factor
- Chore: Add comment with origin of pedometerValue
- (origin/chore/xse-727-dental-assets) Release: bump version to 3.21.0

### Extra

- Detox: Bonus onboarding YuCoin
- detox/surge_icon
- [HOTFIX] Inc version @yu-life/yulife-bdd-framework
- detox: added another feedbackform assertion

## [3.20.0] - 2022-02-09

### Features

- Feature: New query for swiper assets
- Feature: billing details

### Bugfixes

- Bugfix: hide expired surge
- Bugfix GS-234: Fix cycling permission is revoking steps permission
- Bugfix: Fix avatar equipment item tagWrapper position
- Bugfix: Add border on progress bar and centre text on surge icon
- Bugfix GS-220: Available challenge button count on daily screen
- Bugfix: Set cycling measurement on settings titles bold

### Tasks

- Task GS-186: create progress bar
- Task GS-189: Event rewards
- Task GS-212: Tracking updates

### Chores

- Chore: Added fitkit logging

### Extra

- detox:overnightfix assertion on input
- Hotfix: fix what's new overlap
- Hotfix: Selected world change issue
- detox: overnight fixes. Changed product detail upper case to lower case....
- Detox: yuscreen fixes
- (tag: test-branch-gs-223-last-update-period-fix) GS-223: Fix last update period on reward popup

## [3.19.0] - 2022-02-02

### Features

- Feature: whats new lottie items
- Feature XSE: Add ProductDetailsScreens SDUI component types
- Feature XSE: Add product details SDUI button
- Feature XSE: Add Product details SDUI screen sections
- Feature XSE: content item product details header
- Feature: added validation on contentItemTextInput
- Feature: CPM in confirm card mutation

### Bugfixes

- Bugfix: surge time
- Bugfix: Refresh daily steps surge time
- Bugfix: Remove absolute positioning, reduce top close padding
- Bugfix GS-222: Fix coin confetti width
- Bugfix GS-224: Return if no challenges for passive query

### Tasks

- Task GS-185: Create Event Panel
- Task XSE-742: Use new SDUI wrapperStyles property
- Task XSE-735: Payment history screen
- Task GS-175: upsertDailyPassives mutation
- Task: Input validation on input value only
- Task: Dental specific mixpanel events
- Task GS-211: Update Surge Lottie Animations
- Task GS-225: Purge old Today Yucoin screen
- Task GS-217: Surge modal screen view tracking
- Task GS-209: use upsertOnboardingChallenge mutation
- Task XSE-683: Steps progress component
- Task XSE-673: Add ContentItemRowIconTextBanner SDUI component

### Chores

- Chore: Progress steps component minor adjustment
- Chore: Update readme for Android emulator usage

### Extra

- Fix: Query what's new modal when app is active
- (refs/pipelines/461995724) Revert "Merge branch 'fix/surge-time-refresh' into 'develop'"
- Purge: Product Details
- Hotfix: Let ProcessingTimer sit at 0
- detox: fix the failing assertion during the weekend
- Detox: Remove Perk data
- Fix GS-224: Change update app state listener
- detox: removed the empty lines from the previous merge + overnigth fix for detox assertion
- Detox: Assertion for Fiit perk
- Fix: Cleanup android permission check

## [3.18.0] - 2022-01-19

### Features

- Feature XSE-578: Use new date picker SDUI fields
- Feature: New large image for personal product intro
- Feature XSE-538: Dental Holding screen UI
- Feature XSE-528: Select package accordions
- Feature XSE-526: Footer fade
- Feature: Full screen Lottie swiper

### Bugfixes

- Bugfix: Fix Lottie swiper aspect ratio and play control
- Hotfix: Dental copy updates and bugfix
- Bugfix XSE-636: Fix intermittent ContentItemLottie bug
- Bugfix: Change how surge time is displayed on surge modal
- Bugfix TF-214: Gray notification icon on Android
- Bugfix XSE-614: Remove product details container fetch cache
- Bugfix: Fix lottie swiper loading all slides on mount
- Bugfix: Set initial world with YumojiSwipePart
- Bugfix GS-195: Close button position on Samsung s20
- Bugfix: Update Today Earning Screen when GoogleFit is authorised

### Tasks

- Task: Health app property for not authorised users
- Task XSE-619: Update active box-option style
- Task GS-193: Create Surge Icon
- Task XSE-616: Add ContentItemPad pointerEvents
- Task GS-113: Cycling and aggregated meditation
- Task GS-202: Dont show buff on chest/streak collection
- Task XSE-591: Update InfoBanner
- Task XSE: Update InfoCard and SwipePartPicker
- Task: Generic Detached SDUI step
- Task XSE-527: Add CoverType-wrapped SelectedPackageCard
- Task XSE-590: Update ProductStepSelectedPackageCard
- Task XSE-572: Set flex to 1 on faq item text to prevent overlap with right arrow
- Task: Update PackageCard UI
- Task DEVOP-281: Run tests on gitlab CI
- Task GS-184: Add miles / km swapping to settings
- Task DEVOP-360: Split build-version for log events
- Task GS-176 GS-178: Active challenge refactor
- Task XSE-541: New avatar part picker
- Task XSE-529: Create CollapsingHeader cover options picker
- Task: Add passiveCyclingEnabled toggle on Today Earnings screen
- Task GS-197: Survey event property data change

### Chores

- Chore: Today's earning toggle purge
- Chore: Update Android Java instructions
- Chore: Add cs_product to FAQ mixpanel events
- Chore: Add Android hardware profiles of most used devices by our users
- Chore: Prettify generated files
- Chore: update readme with additional information
- Chore: Update README

### Improvements

- Improvement: Android adaptive launcher icon

### Extra

- Fix: Cycling permission flow
- detox:fix the fail assertion of pli and extended overnight
- Hotfix: Product info provider image location
- GS-194 Surge Modal
- detox:extended small text assertion change the test to fix it

## [3.17.0] - 2021-12-10

### Features

- Feature: leanplum dev/prod toggle mode
- Feature: leanplum push

### Bugfixes

- Bugfix: Only ask for cycling permission for iOS or googleFit
- Bugfix: Android flipper configuration
- Bugfix GS-115: Update steps on Todays Earning Screen
- Bugfix GS-139: Fiit in-app form add KeyboardAvoidingView
- Bugfix GS-115: Update Todays Earning Screen

### Tasks

- Task: Put Today Earnings screen behind toggle
- Task GS-139: Fiit - In-app form

### Chores

- Chore: Upgrade intercom
- Chore: Allow full screen swiper close payload

### Extra

- Detox: Smoke and extended fixes
- detox:on iphone 8 need to scroll down or up to assert the YU coin power or the name
- detox: add cyclying assertion and YuCoin Power info screen modal when cycling...
- Revert passive last update call during authenticated
- detox:smoke iphone8 has smaller screen need to scroll to assert the text
- Purge GS-187: Jest tests
- Purge: Today YuCoin

## [3.16.0] - 2021-11-17

### Features

- Feature: Leanplum integration (no push)

### Bugfixes

- Bugfix GS-42: Connect modal and today steps fix
- Bugfix: pants after chest
- Bugfix XSE-478: Make ProductScreen Header have configurable absolute bottom
- Bugfix: full screen swiper changes
- Bugfix: YuScreen armor popup on iPhone 13
- Bugfix GS-162: Fix exit challenge modal
- Bugfix: eslint upgrade
- Bugfix: Set dialy steps button label to "Back to challenge" when challenge is active
- Bugfix GS-144: Fix the position of the active perk asset on some androids
- Bugfix ENG-2313: Retry query to complete the challenge
- Bugfix: product details android
- Bugfix: Yumoji infinite loading on items list

### Tasks

- Task GS-79: Health app tracking
- Task GS-42 GS-81 GS-83: Add Samsung Health configuration

### Chores

- Chore: set request version for detox

### Extra

- Detox: Fix smoke on iphone 11 pro
- Detox: Fix PLI
- Detox: Move PLI to its own run
- Detox: Extended fixes
- Detox:Changed from dischard changes to Back on yumoji edit screen
- Detox: Extended Fixes
- should work now
- removed beneficiary validation
- changed save copy
- removed zero steps guard
- Hotfix: Extra padding for text-field placeholder
- Detox: dismiss new looks modal
- fix progress bar strobing when autoplayspeed is 0ms
- Detox: All sad scenarios
- Detox: PLI Sad - high BMI
- Detox: Smoke Fixes
- Detox: Change toggle from hasFibActive to hasCoveaFibActive
- Purge: Old Yumoji Builder
- removed modal if no change

## [3.15.0] - 2021-11-04

### Features

- Feature XSE-469: Update Generic Modal to use TextTemplate

### Bugfixes

- Bugfix: Buffs popover twitch
- Bugfix: Yumoji Builder - do not pre-select a gender when creating new yumoji
- Bugfix: Center GenericScreen modal heading by default
- Bugfix XSE-413: Fix SelectPackage screen CollapsingHeader being visible on mount
- Bugfix: Add steps text on activity list
- Bugfix: backHandler on productStep

### Tasks

- Task: Full screen swiper events
- Task XSE-164: Product details screen PLI updates

### Chores

- Chore: update uat and prod stripe keys
- Chore: display intercom chat sd action
- Chore: disable ios popGesture
- Chore: Mixpanel event on swipe yumoji try on
- (origin/revert-e95d7b17) Revert "Merge branch 'chore/intercom-upgrade' into 'develop'"
- Chore: upgrade intercom to latest sdk
- Chore: try catch link openings

### Extra

- Hotfix: reset state when cancelling scroll picker
- Fix/buffs popover modals dismiss
- Fix: dismiss previous modals on buffs overlay
- it fails on a scenario adding a little wait time betweet restart app 2 times
- Detox: Added step to dismiss keyboard that shows on bitrise
- see if works
- Hotfix: product-step header
- Detox: Checkout stage
- prevent requery of referral popover && add more guards for render
- Detox: Fix PLI fails on bitrise
- Detox: PLI Happy - Male smoker / existing PLI / max sum assured
- Scroll to and tap Continue
- Detox: PLI steps
- added a tiny check to make sure it changed screen

## [3.14.0] - 2021-10-22

### Bugfixes

- Bugfix GS: disable double click on locked item
- Bugfix XSE-414: Make ContentItemPersonalProductPreview hyperlink to be an action
- Bugfix GS: Yumoji items scrolling optimizations
- Bugfix: use scalable yumoji for pli
- Bugfix: working env cmds
- Bugfix GS-129: Yumoji - skin colour not loading
- Bugfix XSE-443: Updating custom cover type updates collapsing header
- Bugfix: earn more button wrong available challenges number
- Bugfix: Fixed android image blur
- Bugfix GS-130: Bottom button on modal on Iphone 13 is too low
- Bugfix XSE-378: added a small delay for the loading state
- Bugfix: Yumoji skin items keep loading when change body
- Bugfix: Android Yumoji builder image flicker
- Bugfix GS-126: Add border-radius to Wellbeing Hub/Rewards img container
- Bugfix GS-125: Feedback form title and button
- Bugfix GS-124: Yumoji bugs
- Bugfix GS-118: Fix hair and facialHair colour change
- Bugfix XSE-356: Fix top padding on detached screens
- Bugfix: Complete challenge if milestone achieved
- Bugfix ENG-2322: add extensive authorisation for steps coming from apple watch
- Bugfix XSE-411: Naked yumoji
- Bugfix: Product Survey Greetings title
- Bugfix: Allow http and https on iOS devices
- Bugfix GS-110: change container style
- Bugfix: app review modal crash

### Tasks

- Task: Yumoji Builder Exit Modal Improvements
- Task XSE-355 Buttons to switch armour are too small
- Task GS-102: Today Screen - Cycling
- Task XSE-355 Buttons to switch armour are too small
- Task XSE-429: Enable close on each onboarding step
- Task XSE-424: Refresh YuCoin on PLI close
- Task GS-118: Add cta to Yumoji Builder modals
- Task XSE-239: Add power details
- Task XSE-388 - Search for post code

### Chores

- Chore: added suffixMax to the scrollPicker wheels
- Chore: Refetch product slots on exit, not submit
- Chore: create the useFittingRoom hook

### Improvements

- Improvement GS: Yumoji builder image quality

### Extra

- fix avatar creation navigation
- remove yumoji toggle
- removed fast image patch
- fix yumoji builder save modal copy
- add a tiny check
- Detox: app review scenario
- block showing yumoji until all layers are loaded
- Detox: Overnight Fixes 18-10
- Purge: YuCoinPowerMini
- select empty part
- added body type to image key
- Hotfix: yumoji swipe try-on
- Hotfix: naked yumoji, again
- Removed text Yes Please because not preset anymore
- Bug XSE-373 - Slow loadin spinner
- Hotfix: daily activity reducer & selector defaults
- Purge: fib purge part 2
- fixed user toggle check
- Detox: Overnight Fixes 12/10
- ENG-2345 Log full error from fitkit
- GS-120 Remove avatar tracking from client
- changed copies

## [3.13.0] - 2021-10-06

### Bugfixes

- Bugfix: Add KeyboardAvoidingView to SDUI body
- Bugfix: Update correct body items
- Bugfix: Fix popover UI scaling on small android
- Bugfix: Modal header gap on android devices
- Bugfix: Use TextTemplate on GenericHeading component
- Bugfix: wrong checkBox icon
- Bugfix: hide popover if no yumoji
- Bugfix: Remove textAlign from CheckBox component
- Bugfix: Yumoji list header and padding
- Bugfix: Use TextTemplate on CheckBox component
- Bugfix: Remove letterSpacing from android devices
- Bugfix: Product step markdown issue with no styles
- Bugfix: Prevent WhatsNew modal overlap
- Bugfix: Use TextTemplate on SlotIcon and improve letterSpacing on Android devices

### Tasks

- Task: Add skeleton loading for yumoji categories
- Task: product step finish journey
- Task: Yumoji item label
- Task GS: Avatar viewport zoom
- Task GS-95: Get Yumoji customisation categories
- Task: Remove close callback on last FullScreenSwiper index
- Task GS-100: Save Yumoji popover

### Chores

- Chore: copy and padding fixes
- Chore: Use showYuModal instead of Navigation.showModal
- Chore: more pli events

### Improvements

- Improvement: yumoji builder frontend performance

### Extra

- Hotfix: FAQ spacing
- detox/fixes_05_10
- Hotfix: selected package card padding
- Purge: markdown default styles
- preload all fitting room assets
- Detox: Smoke Fixes
- Hotfix: setPopover after avatar creation
- Bug: empty item preloading
- Hotfix: GP Search can have duplicate keys
- fetching category data from cache
- Purge: first streak modal
- Purge: unused assets
- show modal on item press only if modal data exists
- Hotfix: wrong PLI slotIcon
- fix repetative category select
- Hotfix: use takeLeading for sdui sagas
- Hotfix XSE-392: Package cards copy & indicator shouldnt always show
- reset matchType when pressing back
- Detox: Referrals Fix

## [3.12.0] - 2021-09-29

### Features

- Task XSE-135: PLI new feature onboarding
- Feature XSE-314: Conditions confirm screen

### Bugfixes

- Bugfix: Use UTC for preferred notification times
- Bugfix Yumoji Builder: onBackPressed not resetting category state and...
- Bugfix Yumoji Builder: Replace ScrollView to FlatList for Itemlist and reset scroll on category change
- Bugfix: personal life onboarding
- Bugfix ENG-2296: Do not update last sync if error occurs

### Tasks

- Task: stripe integration
- Task GS-94:added caching service
- Task XSE-390: Max sum assured RN
- Task: Initialise YuScreen slot popover
- Task XSE-135: PLI Onboarding
- Task: New Yumoji builder
- Task XSE-183: RN Add GP details
- Task: Move common GQL to shared file
- Task XSE-330: Initialise FullScreenSwiper modal logic
- Task GS-105: Positioning avatar list items
- Task XSE-382: pli events
- Task XSE-330: Onboarding Stories
- Task: product step button disabled state
- Task: checkout - selected package card
- Task: Batching assets preload
- Task GS-99: Header Component Update
- Task XSE-235: Collapsing banner

### Chores

- Chore: contentItemInfoButton
- Chore: normalise personal product step
- Chore: fix yumoji order
- Chore: unify select cover
- Chore: medical holding screens

### Extra

- Hotfix: Display reward header image loading in a visible colour
- Detox: Remove hasFibActive toggle from all users that don't need it
- Detox: Yumoji Fix
- Detox: Fixes 27/9
- Detox: Fixes 22/9
- scalable yumoji
- Purge: tipsi-stripe
- Detox: Fixes 21/9
- Detox: Emails
- Detox: Tidy
- Hotfix: content uri options
- Hotfix: review item pixelated
- added mixpanel logging

## [3.11.0] - 2021-09-16

### Features

- Feature: Review component
- Feature: PLI Multi select components and multi button styles
- Feature: PLI faqs and documents
- Feature: PLI Radio components (with icon'd option)
- Feature: PLI back step, text input & date picker
- Feature: Initialise SelectPackage PackageCards
- Feature: Implement client-side underwriting
- Feature: Product Platform SDUI
- [HOTFIX] Detox: FeatureOnly

### Bugfixes

- Bugfix PLI: Hide footer on android small devices when keyboard is showing
- Bugfix: Remove Image atom pointer events
- Bugfix: letterSpacing on Android devices
- Bugfix: PLI Step continue modal doesnt close when click continue on Android
- Bugfix: Android back button not working on FAQ and Documents screen
- Bugfix: Yugi icon on birthday screen wrong size on android
- Bugfix: PLI UI fixes
- Bugfix: FAQ and Documents YugiHeader margin
- Bugfix: use stepData json value for dynamicData initial state
- Bugfix: PLI Popover not closing
- Bugfix: android navigation on personalProductStep
- Bugfix: yugi intro on android
- Bugfix: progress bar
- Bugfix: TextTemplate shouldnt extends TextProps
- Bugfix: Set multiple choice quesiton to only able to select one option
- Bugfix GS-77: Unresponsive menu and navbar
- Bugfix: Referrals missing tracking
- Bugfix: Guard Absolute component
- Bugfix: Rewards - Show all availableDenominations
- Bugfix: Android build failing due react-native-blur not fully removed
- Bugfix: Fields "title" conflict because they return conflicting types "String" and "String!"
- Bugfix: Rewards details, blur on android, add space on account number and dismiss keyboard
- Task GS-69 / Bugfix ENG-2250: Rewards tracking, YuCoin total delay and small improvements
- Bugfix: TextTemplate letterSpacing not working correctly on android
- (origin/bugfix/reward-details) Bugfix: Rewards details, submit button validation, add bottom padding on android and small ui improvement
- Bugfix GS-45: Add referral link to share message on android devices

### Tasks

- Task PLI: Replace Text component to TextTemplate
- Task GS-54: Personal Benefit Overlay
- Task XSE-312: Add row with icon and text
- Task: quote loading animations
- Task XSE-271: Scroll picker contentItem
- Task XSE-266: Add extra padding for floating yugis
- Task GS-89: Util clean up
- Task: Add package-select and custom-package-select steps
- Task GS-86: Change Action Sheet to allow non £ values
- Task GS-80: Update Health Syncing Copy
- Task: product step validation PoC
- Task: multi-buttons
- Task GS-82: Samsung Health Integration UI
- Task: Move PackageCardPerks to Molecules
- Revert "Merge branch 'task/package-perks' into 'develop'"
- Task GS-84: In app survey tracking
- Task: Add ProductStep Body default padding
- Task: Move PackageCardPerks to Molecules
- Task GS-63: Update Daily Steps Screen
- Task: change Member Zone to My Account
- Task GS-75: Assign YuCoin for completing feedback form
- Task: Add viewability config and active package card indicator
- Task: personal step visit logic
- Task GS-76: Expand In App Survey
- Task: get referrals onboarding from api
- Task: animated underwriting progress bar
- Task GS-65: Preload assets from server
- Task GS-48: Referral tracking
- Task GS-27: Onboard Referrals
- Task GS-78: Replace react-native-blur for @react-native-community/blur
- Task DEVOP-20: Distinguish OS in apollo client
- Task GS-65: Improved remote image
- Task GS-6: Rewards Details
- Task GS-47 Challenge Progress API
- Task GS-25: Sidebar Illustrations
- Task GS-25: New Illustrations
- Task DEVOP-214: one button release
- Task GS-44: Better tagging app store review
- Task GS-45: Share button

### Chores

- Chore: rejection logic
- Chore: personal product review
- Chore: Add deprecation eslint plugin and deprecation message on <Text> component
- Chore: split submitPersonalStep payload
- Chore: yumoji try-on popover
- Chore: ContentItemProductInfo
- Chore: try-on yumoji
- Chore: absolute items for product step
- Chore: updated Podfile.lock
- Chore: unify yumoji
- Chore: align GenericHeading left and right icon types

### Extra

- Hotfix: FAQs individual background should be white & show FAQ title
- Hotfix: button validation for arrays
- Purge: Legacy FIB Part 1
- Detox: 18.20.3 Upgrade
- Hotfix: keep pli picker selection 2
- Hotfix: keep pli picker selection
- Hotfix: continue modal
- Bugifx ProductStepYugiConfirm: Add animation on submit button and use Style.adjust
- Hotfix: popover timeout
- Hotfix: null classified as object and fix for missing header
- Hotfix: dispatch server action payload properly
- Hotfix: Allow PLI header to have no back button
- Detox: Skip Tokens
- add id to levelSlot in user gql
- Hotfix: prepopulate dynamicData on mount and step change
- Purge: Unused PLI components
- Detox: Fixes 6/9
- Detox: Referrals fix + Add userOnboardings
- Detox: Fixes 1/9
- Detox: Referrals
- delete PopoverContent
- detox: fixes 25/08
- change saga trigger
- Revert: intercom sdk upgrade
- Detox/rewards fix
- Detox: Surge
- Detox: Rewards
- [HOTFIX] Detox run with screenshots folder
- Hotfix: update the pod file
- Upgrade: intercom to latest sdk
- Hotfix: fiit steps
- referrals screen adjustments
- [HOTFIX] Detox add screenshot contexts
- Detox/turbo mode
- default uris
- Hotfix: add NSCameraUsageDescription in info.plist
- Detox: API Node 14 Fixes
- Detox: Smoke Fixes

## [3.10.0] - 2021-08-02

### Features

- Feature Task-877: Referrals - Screen Structure
- Feature TP-855: Remove tooltip
- Feature TP-844: Underwriting - Package card
- Feature TP-832: Fiit integration
- Feature TP-721: Redesign approach for long screen CTA issues
- Feature TP-842: Beneficiaries Tagging
- Feature TP-721: Adaptive underwriting CTA

### Bugfixes

- Bugfix Do not preload images if uri is missing
- (origin/bugfix/tp-874-add-missing-style-for-content-button) TP-874 Add missing style for content item button
- Bugfix ENG-2154: challenge not ending
- Bugfix TP-877: Small adjustments on the referrals screen coin
- Bugfix TP-877: Referrals Screen - Change description, align coin and truncate on name
- Bugfix TP-886: Deeplink not working on other screens which is not the Dailysteps
- Bugfix ENG-2151 Ensure create challenge called only once
- Bugfix TP-857: Fix BoxOption atom dimensions
- (origin/bugfix/tp-720-yugi-pointer-event) Remove underwriting yugi pointer event
- Bugfix ENG-2158: Wrap cancelChallengeNotificationSaga with try-catch, log the error
- Bugfix ENG-2142: Limit pedometer steps
- Bugfix: Reset steps on challenge start
- Bugfix: Fix Scroller picker bugs
- Bugfix TP-847: Refetch on mutate
- (origin/bugfix/tp-836-gp-details) Bugfix TP-836: Fix android back button, rename button and remove item from the list

### Tasks

- Task TP-886: Deeplink to the referrals screen
- Task TP-873 Remove duplicated style from markdown
- Task TP-874: Move content button to common folder
- Task TP-886: Cleanup referrals
- Task TP-867: Purge Cloudinary
- Task TP-856/857: Package Selection Component / Avatar Details on package selection
- Task TP-858: Rebuild FAQs with wellbeing hub components
- Task TP-868: Use headspace tint on headspace button, stabilize external app overlay
- Task TP-845: Underwritting - Update perks component
- Task TP-846: App review respect api fields
- Task: Use FlatList to improve performance

### Chores

- (origin/chore/pedomoter-infinite-loading, chore/pedomoter-infinite-loading) Chore: pedometer infinite loading
- Chore: fitkit hooks

### Improvements

- TP-844 Underwriting - Package card improvements and debug screen

### Extra

- Detox: Small Fix
- Detox: Streak YuCoin
- Detox: Postgres Fixes
- Detox: Fixes
- Detox: Extended Fixes
- Implement TP-886: Referrals deeplink
- wrap startChallengeIfActiveSaga with try-catch, send error to Bugsnag
- Detox Postgres Schemas
- add headspace on Android
- [HOTFIX] Wellbeing hub page pass size for asset
- Check for undefined errors array
- Always return object with token status
- Fix android scripts
- Show single yuCoin value instead of range
- Remove Consent
- Detox: Extended Fixes
- Export Fitkit types
- Detox: Beneficiaries
- Detox: Member Services Update
- Yumoji fix

## [3.9.0] - 2021-07-13

### Features

- Feature TP-882: Update Menu UI

### Tasks

- Task ENG-2213: Do not retry slow requests
- (origin/task/eng-2190-migrate-reward-image-to-imgix) ENG-2190 Migrate reward image to imgix

### Chores

- Chore: Force light mode on iOS and Android
- Chore: exclude arm64 from detox
- Chore: upgrade to RN 64
- (origin/chore/link-topbar-coin-to-rewards, chore/link-topbar-coin-to-rewards) Chore: link TopBar YuCoin to the rewards screen

## [3.8.0] - 2021-06-28

### Features

- Feature Task-877: Referrals - Screen Structure
- Feature TP-855: Remove tooltip
- Feature TP-844: Underwriting - Package card
- Feature TP-721: Redesign approach for long screen CTA issues
- Feature TP-842: Beneficiaries Tagging
- Feature TP-721: Adaptive underwriting CTA

### Bugfixes

- Bugfix Do not preload images if uri is missing
- (origin/bugfix/tp-874-add-missing-style-for-content-button) TP-874 Add missing style for content item button
- Bugfix ENG-2154: challenge not ending
- Bugfix TP-877: Small adjustments on the referrals screen coin
- Bugfix TP-877: Referrals Screen - Change description, align coin and truncate on name
- Bugfix TP-886: Deeplink not working on other screens which is not the Dailysteps
- Bugfix ENG-2151 Ensure create challenge called only once
- Bugfix TP-857: Fix BoxOption atom dimensions
- (origin/bugfix/tp-720-yugi-pointer-event) Remove underwriting yugi pointer event
- Bugfix ENG-2158: Wrap cancelChallengeNotificationSaga with try-catch, log the error
- Bugfix ENG-2142: Limit pedometer steps
- Bugfix: Reset steps on challenge start
- Bugfix: Fix Scroller picker bugs
- Bugfix TP-847: Refetch on mutate
- (origin/bugfix/tp-836-gp-details) Bugfix TP-836: Fix android back button, rename button and remove item from the list

### Tasks

- Task TP-886: Deeplink to the referrals screen
- Task TP-873 Remove duplicated style from markdown
- Task TP-874: Move content button to common folder
- Task TP-886: Cleanup referrals
- Task TP-867: Purge Cloudinary
- Task TP-856/857: Package Selection Component / Avatar Details on package selection
- Task TP-858: Rebuild FAQs with wellbeing hub components
- Task TP-868: Use headspace tint on headspace button, stabilize external app overlay
- Task TP-845: Underwritting - Update perks component
- Task TP-846: App review respect api fields
- Task: Use FlatList to improve performance

### Chores

- (origin/chore/pedomoter-infinite-loading, chore/pedomoter-infinite-loading) Chore: pedometer infinite loading
- Chore: fitkit hooks

### Improvements

- TP-844 Underwriting - Package card improvements and debug screen

### Extra

- Detox: Small Fix
- Detox: Streak YuCoin
- Detox: Postgres Fixes
- Detox: Fixes
- Detox: Extended Fixes
- Implement TP-886: Referrals deeplink
- wrap startChallengeIfActiveSaga with try-catch, send error to Bugsnag
- Detox Postgres Schemas
- add headspace on Android
- [HOTFIX] Wellbeing hub page pass size for asset
- Check for undefined errors array
- Always return object with token status
- Fix android scripts
- Show single yuCoin value instead of range
- Remove Consent
- Detox: Extended Fixes
- Export Fitkit types
- Detox: Beneficiaries
- Detox: Member Services Update
- Yumoji fix

## [3.7.0] - 2021-05-19

### Features

- Feature TP-839: Implement meditation tagging
- Feature TP-739: Update weight and drink inputs to use scrollers
- Feature TP-837: Use scroller on underwriting height input
- Feature TP-781: wellbeing hub
- Feature TP-789: Improve Meditation

### Bugfixes

- Bugfix TP-841: Fix modal appearing on top of modal
- Bugfix: Push yugi-intro navigation changes
- Bugfix: Update Podfile for the push-notifications
- Bugfix TP-840: Update react-native-push-notification
- (origin/bugfix/beneficiary-input) Bugfix: Increase maxLength for phone number input and fix focus label on iOS
- Bugfix TP-834: Streak modal on iPhone 6 series
- Bugfix: Beneficiaries keyboard not dismissing when modal is closed
- Bugfix TP-770: Fix daily steps intro top bar alignment
- Bugfix ENG-2019: Missing data for completed challenge
- (origin/bugfix/tp-770-align-logos) Bugfix TP-770: Fix onboarding swiper logo alignment
- Bugfix ENG-2024: Name leaderboard problems
- (origin/bugfix/tp-825-leaderboard) Bugfix TP-825: Make leaderboard list scrollable

### Tasks

- Task TP-835 / TP-836: Underwriting Introduction Changes / GP Details Introduction Changes
- Task TP-828: Info Card Component
- Task: Use hashmap instead of switch-case
- Task: Add one second delay to challenge modal to help with fast sequence events like detox
- Task TF-115: yuScreen disclaimer
- Task ENG-2047: Switch react-native-fitkit to GitLab hosted package
- (origin/task/improve-notifications-toggles-ux) Task: Improve notifications toggles UX
- Task TP-807: Notification Toggles
- Task: Open modal on meditation start
- Task: Adjust client with new tooltip benefit from server
- (origin/task/ignore-sonar-schema) Update Sonarcloud properties to ignore generated files
- Task TP-815: Wellbeing button action mixpanel event

### Chores

- Chore: updated gql schema
- Chore: split active states for current route/modal

### Extra

- (HEAD -> develop, origin/develop, origin/HEAD) Hotfix: hasBeneficiariesEnabled
- Detox: Yuscreen v3
- (origin/e2e/pli_skip) skip for pli while it's being re-developed
- Detox: Meditation Updates
- Add scrollView
- Increase sendMindfulnessData offset
- Detox: Update Menu Items
- Fix button action and markdown margins
- TE-774
- Detox: challenges fix
- TP-810: Create new picker component
- Make use of parsed markdown
- Hofix: Restrict meditation button to meditation challenge
- Purge: Member Services
- Extended repairs
- Detox: Smoke Bitrise fixes
- (tag: v3.7.0) 3.7.0

## [3.6.0] - 2021-04-27

### Features

- Feature TP-776: App review prompt
- Feature TP-650: Introduction to Underwriting - Improvements

### Bugfixes

- Bugfix TP-754: Remove later button from safe checker screen on streaks
- (origin/bugfix/tp-1978-fix-missing-steps-day) get the full day data
- Bugfix: Fix streaks alignment
- Bugfix TP-754: Add first day streak copy
- Bugfix TP-754: Streaks screen

### Tasks

- Task TP-802: Fix button spec
- Task: Clean up button type
- Task: Factor out secondary button
- Task: Factor out tertiary button
- Task: Factor out Link button type
- Task: Update FIB intro copy minutes from 6 to 5

### Chores

- Chore: Remove unused UnderwritingJourneyIntroductionContainer

### Extra

- Purge: time's up for time's up
- (origin/hotfix/product-entity, hotfix/product-entity) Hotfix: customer product entity fix
- fix working
- Detox: Extended fixes
- Detox: Streak updates
- Hotfix: add trailing slash for api url
- Hotfix: copy gql revert

## [3.5.0] - 2021-04-13

### Features

- Feature TP-736: Update Copy RGA Feedback
- Feature TP-751: Redesign Apple Health prompt after first permission request

### Bugfixes

- Bugfix ENG-1945: Rewards page scrolling issue
- Bugfix ENG-1843: Fix daily steps offline screen's infinite loading state
- Bugfix: Use cache first in yu-screen
- Bugfix: Add smart health screen on members services
- Bugfix: Coin confetti position on signup reward screen
- Bugfix: Challenge-success test
- Bugfix: Add background image on success challenge ocean screen
- Bugfix ENG-1918: Duels response
- Bugfix ENG-1920: log out saga firing queries
- Bugfix: Update confetti yucoin image
- Bugfix TP-701: Consolidate Button position across all the screens (bottom)
- Bugfix ENG-1813 Push notification icons

### Tasks

- Task TP-754: Streaks Improvements
- Task TP-780: Update fitness and auth version
- Task TP-744: Update Member Services (Smart Health) page
- Task: Add sonarqube
- Task TP-761: Challenge screen top navigation cleanup
- Task TP-762: Build new tab component
- Task TP-760: Update YuCoin assets where still old in app
- Task TP-704: Translate SvgXml to Svg component

### Chores

- Chore: upgrade RNN
- (origin/chore/syncing-steps-copy-2) Hotfix: tweak step sync copy to avoid confusion

### Extra

- Hotfix: use for loop instead of while
- copy fix
- Detox: Signup/login copy update
- Handle press when keyboard active
- Update connect screens & signup bonus
- Pass product id to ProductDetailsContainer
- Beneficaries sync with API
- Detox: quick payout calc fix
- Set allocated amount limit, fix error margin
- Fix package type appearing on non active products
- Remove cover type for unpurchased
- Copy fix
- Add key to the parent view

## [3.4.0] - 2021-03-22

### Features

- Feature TP-713: Add product detail screens

### Bugfixes

- Bugfix ENG-1859: Offline error
- Bugfix TP-767: Add cover type to tooltip
- (origin/bugfix/eng-1870) Bugfix: ENG-1870 Fix iOS inactive leaderboard app stateUI
- Bugfix: Remove orphaned graphql query
- Bugfix: Disable cache on Completed Duels Screen
- (origin/bugfix/eng-1840-duels-page-yumojis) Bugfix ENG-1840: Duels page Yumojis
- Bugfix TP-757: Fix EmptyAvatar asset and prompt spacing
- Bugfix TP-740: Close button on update modal
- (origin/bugfix/eng-1798-exit-modal-2) Finish

### Tasks

- Task TP-758: Use API on Product Details Container
- Task ENG-1822: Request rewards when view is on screen
- Task TP-713: Add testing method for product details screen and modal
- Task TP-740: Force update popup
- Task TP-745: Initialise new atoms
- Task TP-732: Yuscreen Update - API work
- Task TP-742: Add product color theme atom

### Chores

- Chore: update typescript
- (origin/chore/patch-scrollview-again, chore/patch-scrollview-again) Chore: patch scrollview for deprecated currentlyFocusedField

### Extra

- Detox: Update duels and leaderboard scenarios
- Copy: Make syncing steps copy clearer
- Fix
- Right align
- Remove reset fib from debug screen
- leaderboard copy update
- added short wait for rewards screen test to fix most iphones
- Initialise RemoteImage atom
- uwu
- Update calm deeplink on android
- Add policy types
- Margin
- Initialise missing components
- Reuse logic from avatar-builder to select-body
- added customer_quote_screening
- Detox: Extended updates
- [HOTFIX] detox remove screening status

## [3.3.0] - 2021-03-03

### Features

- Feature: userDuels lastSyncedAt field

### Bugfixes

- Bugfix TP-734: Fix Yugi Ribbon Payout Calculator UI
- Bugfix: Editing avatar by removing unused GQL_FRAGMENT_PRODUCT from gql
- Bugfix TP-712: YuScreen margins and align yucoin power card
- Bugfix: steps infinite fetch after log in
- Bugfix TP-712: New YuScreen
- Bugfix ENG-1675: Challenge levels images have transparent space
- Bugfix: Return previous state on daily meditation reducer
- Bugfix ENG-1366: redeemed rewards
- Bugfix TP-703: Pin the button bottom on yucoin power explainer
- Bugfix ENG-1698: Standardise top bar on duels

### Tasks

- Task TP-741: Add Story for ValueDescriptionText
- Task TP-716: Refactor box buttons
- Task TP-715: Personal Products / Task TP-714 Employer Products
- Task: Remove product from YuScreen

### Improvements

- Improvement: step requests

### Extra

- Fix
- Detox: Chest scenario fix
- [HOTFIX] payment method no longer needed for detox
- Detox: New yuscreen quick fix
- Hotfix: remove products from getYuliferWithAvatar
- quick update
- Done
- Detox: yuscreen extended updates
- Hotfix: log out promise not being resolved
- Revert "Revert "Investigate android push crash""
- Revert "Investigate android push crash"
- rewardsledgers name change
- copy
- working
- Working
- wip
- Revert "Challenges list"
- Challenges list
- Investigate android push crash

## [3.2.0] - 2021-02-12

### Features

- Feature TP-558: New designs for holding/info screens
- Feature TP-591: Finalise Packages - Custom Cover + Refactor
- Feature TP-620: Financial Underwriting - Add the ability to edit an existing cover
- Feature TP-608 Update contact details UI
- Feature TP-629: Add declarations to the Checkout hub
- Feature TP-605 Update GP Details component
- Feature TP-577 Add gender question
- Feature: Add new animation to TertiaryButton
- Feature: Update Summary Screen to follow current design
- Feature TP-524: Checkout v2.0 - HUB
- Feature TP-603: Finalise Packages - Design
- Feature TE-960: recent opponents (client)
- Feature TE-869: New duels hub
- Feature/TP-631: Update icons
- Feature/TP-663: Update Underwriting Copy
- Feature TP-600: Browse Packages - Top Section Redesign
- Feature TE-847: colleague search
- Feature TE-876: Already challenge pop-up
- Feature TP-601: Select package style
- (origin/feature/mixpanel-in-app-messages) Task: Support mixpanel messages
- Feature TE-826: Fix challenge button on last place
- Feature: Move user notifications settings into the api
- Hide button if not has feature toggle
- Feature TP-594 Reset fib journey for allowed beta users
- Feature TP-618: Update Introduction to Underwriting
- Feature TP-599 Remove salary from introduction
- Feature TE-868: Duels onboarding
- Feature TE-873: goals/duels buttons
- Feature TP-612: Salary Question
- Feature Tp-598: Yugi Introduction
- Feature TP-575: New birthday input

### Bugfixes

- Bugfix ENG-1661: Duels UI improvements
- Bugfix: Prevent gp and address input to send request to api on every character
- Bugfix ENG-1632: Commit challenge-tile.helpers that wasnt added on the previous MR
- Bugfix ENG-1632: Challenge YuCoin display
- Bugfix: Add reset journey button on new info screens
- Bugfix: Add the correct margin on the continue button on browser package on android
- Revert "Bugfix: Get cover type and contact details from api for checkout"
- Bugfix: Wrong pdf & android back button on price change modal
- Bugfix: Get cover type and contact details from api for checkout
- Bugfix: Align underwriting intro layout with the rest
- Bugfix: Align review layout with underwriting journey layout
- Bugfix TE-982: Include duelId for better caching
- Bugfix: GP details screens
- Bugfix: steps syncing
- Bugfix: Contact address search
- Bugfix TP-687: Fix iOS date picker color
- Bugfix TE-988: Colleague search keyboard bug
- Bugfix TE-989: Prevent duel intro re-render
- Bugfix: remove mixpanel in-app messages
- Bugfix ENG-1562: query steps
- Bugfix TP-674: Fix YuScreen UI and copy and add proper gradients
- Bugfix TE-982: Step sync problem
- Bugfix TP-674: Fix YuScreen UI and copy
- Bugfix TP-524: Fix checkout hub margins and alignment
- Bugfix TE-987: Duel hub spacing
- Bugfix: duels updated response screen
- Bugfix: duel already on
- Bugfix TE-875: Duel invite font fix
- Bugfix: Fix duel avatars
- Bugfix TP-524: Sync GP details gql and redux
- Bugfix: Revert back button SVG
- Bugfix: Update hospital stay and symptoms resolved icon on riview screen
- Bugfix: big hair in duels animation
- Bugfix: Add useBackHandler for duel
- Bugfix: fetch fib quote
- Bugfix TE-962: Show correct duel invite response
- Bugfix: Fix medical journey navigation
- (origin/bugfix/detox-crash-fix) Bugfix: detox crash
- Bugfix: Remove back button from success feedback screen
- Bugfix: Fix Android back button from underwriting journey
- Bugfix: Improve contact details screen UX
- Bugfix ENG-1541: yunity level fixes
- Bugfix: Go to yuscreen after close second yugi intro
- Bugfix: Disable continue button if there's no salary
- Bugfix TP-622, TP-624: Fix Android back handler and yugi intro cta
- Bugfix: Fix iPhone 12 series top bar
- Bugfix TP-622: Fix Android back button
- Bugfix TP-622: Fix android back button
- Bugfix ENG-1485: Wrong date - passive YuCoin
- Bugfix TP-574: Keep financial cover colours
- Bugfix: Fix TopBar left menu icon position
- Bugfix ENG-1481: Nonsensical copy in the "Welcome" screen of the app
- Bugfix: Fix community goals change nickname screen, plus points font
- Bugfix: Fix leaderboard issues

### Tasks

- Task: Change overlay to modal
- Task TP-694: Yu screen - Reveal tooltip when tapping on table cells
- Task TP-667: Add insurance description to tooltip on Browse packages & Finalise packages
- Task TE-983: More duels tracking
- Task Leaderboard: Add on/off text and description at the top
- Task TP-692/TP-693/TP-694: Update yu screen - personal Items, remove description from purchasable items and reveal tooltip when tapping on table cells
- Task: Change product queries
- Task ENG-1550: correct challenge reward
- Task TP-604 Update GP copy
- Task ENG-1485: refactor passive saga

### Chores

- Chore: move payments
- Chore: remove fitkit values from level steps queries and log the results
- Chore: show steps from dailySteps reducer
- Chore: use pedometer steps on daily steps screen
- Chore: use reselect
- Chore: Clear timeouts
- Chore: Remove status change functionality
- Chore: upgrade android mixpanel version
- Chore TE-956: Update onboarding component
- Chore: use selector in screens
- Chore: reset store on logOutSuccess
- Chore: log pedometer_unauthorised
- Chore: use date_format const
- Chore: yu-screen improvements
- Chore: use funcs for initial states
- Chore: move leaderboard consent to leaderboards list
- Chore ENG-1536: remove webview on rewards
- Chore: add commas to numbers
- Chore: add script for retrospective bugsnag upload
- Chore: Bugsnag errors
- Chore/better naming for android builds

### Improvements

- Improve color for dark mode

### Extra

- Detox: Browse package
- Hotfix: add the border back
- Hotfix: remove border
- Update avios copy
- Hotfix: daily meditation safe checks
- Add missing slash
- Fix copy
- Hotfix: yu screen fixes
- fixed survey journey
- Only render once YuScreenLayout
- Hotfix: correct deepLinks for android
- Hotfix: return current state on endChallenge event
- Revert: request on every pedometer update
- Handle custom cover use case for payout calculator
- Force light mode
- Fix Yugi svg
- TP-679: Mixpanel Event Taxonomy #65 and #66
- Fix
- Hotfix: for debounced query's hotfix
- Hotfix: unmount query properly
- Working - copy updates
- Add general terms of business link to the app
- Only one line break on gp address
- Increase hit slop
- Fix contact detail header
- Hotfix: downgrade mixpanel lib
- Detox: Onboarding and duels update
- Don't show price modal on client changes
- Remove link
- Copy update
- Add additional financial screen & logic
- Hotfix: counter state update issue
- Create Salary tertiary input and refactor base button
- Update schema and types
- Fix
- removed detox bug workaround
- Update yucoin power and remove unnecessary from createTopUpsQuote
- Detox: Duels update
- Update calculator icon
- Hotfix: removed the network state listener
- Hotfix TE-960: duplicate stack components
- Handle back navigation on android directly on generic overlay
- Use FastImage instead of svgs
- Detox: Fixes
- Show payment congrat if customer purchased product
- Hotfix: duels onboarding copy
- Hotfix: nav-bar spacing
- Detox: Fixes
- Get salary from quote
- Fix
- Hotfix: refetch community goals on nickname change
- Make input query not null
- merged stub data and tests, then find/replaced paths yulife-bdd-framework and data as merged from develop
- Update stripe credentials
- Fix
- Decrease delay for yugi intro screens
- FIxed
- Tokens updated
- Fix typo
- Revert "Implement browse packages intercom"
- Added githooks
- Fix environment
- Copy update
- Pregnancy only skip medical logic
- Update & Add static documents
- (origin/e2e/extended_Fix) earn rate fix for user
- Fix copy and icon color

## [3.1.0] - 2021-02-04

### Features

- Feature TP-558: New designs for holding/info screens
- Feature TP-591: Finalise Packages - Custom Cover + Refactor
- Feature TP-620: Financial Underwriting - Add the ability to edit an existing cover
- Feature TP-608 Update contact details UI
- Feature TP-629: Add declarations to the Checkout hub
- Feature TP-605 Update GP Details component
- Feature TP-577 Add gender question
- Feature: Add new animation to TertiaryButton
- Feature: Update Summary Screen to follow current design
- Feature TP-524: Checkout v2.0 - HUB
- Feature TP-603: Finalise Packages - Design
- Feature TE-960: recent opponents (client)
- Feature TE-869: New duels hub
- Feature/TP-631: Update icons
- Feature/TP-663: Update Underwriting Copy
- Feature TP-600: Browse Packages - Top Section Redesign
- Feature TE-847: colleague search
- Feature TE-876: Already challenge pop-up
- Feature TP-601: Select package style
- (origin/feature/mixpanel-in-app-messages) Task: Support mixpanel messages
- Feature TE-826: Fix challenge button on last place
- Feature: Move user notifications settings into the api
- Hide button if not has feature toggle
- Feature TP-594 Reset fib journey for allowed beta users
- Feature TP-618: Update Introduction to Underwriting
- Feature TP-599 Remove salary from introduction
- Feature TE-868: Duels onboarding
- Feature TE-873: goals/duels buttons
- Feature TP-612: Salary Question
- Feature Tp-598: Yugi Introduction
- Feature TP-575: New birthday input

### Bugfixes

- Bugfix: Add reset journey button on new info screens
- Bugfix: Add the correct margin on the continue button on browser package on android
- Revert "Bugfix: Get cover type and contact details from api for checkout"
- Bugfix: Wrong pdf & android back button on price change modal
- Bugfix: Get cover type and contact details from api for checkout
- Bugfix: Align underwriting intro layout with the rest
- Bugfix: Align review layout with underwriting journey layout
- Bugfix TE-982: Include duelId for better caching
- Bugfix: GP details screens
- Bugfix: steps syncing
- Bugfix: Contact address search
- Bugfix TP-687: Fix iOS date picker color
- Bugfix TE-988: Colleague search keyboard bug
- Bugfix TE-989: Prevent duel intro re-render
- Bugfix: remove mixpanel in-app messages
- Bugfix ENG-1562: query steps
- Bugfix TP-674: Fix YuScreen UI and copy and add proper gradients
- Bugfix TE-982: Step sync problem
- Bugfix TP-674: Fix YuScreen UI and copy
- Bugfix TP-524: Fix checkout hub margins and alignment
- Bugfix TE-987: Duel hub spacing
- Bugfix: duels updated response screen
- Bugfix: duel already on
- Bugfix TE-875: Duel invite font fix
- Bugfix: Fix duel avatars
- Bugfix TP-524: Sync GP details gql and redux
- Bugfix: Revert back button SVG
- Bugfix: Update hospital stay and symptoms resolved icon on riview screen
- Bugfix: big hair in duels animation
- Bugfix: Add useBackHandler for duel
- Bugfix: fetch fib quote
- Bugfix TE-962: Show correct duel invite response
- Bugfix: Fix medical journey navigation
- (origin/bugfix/detox-crash-fix) Bugfix: detox crash
- Bugfix: Remove back button from success feedback screen
- Bugfix: Fix Android back button from underwriting journey
- Bugfix: Improve contact details screen UX
- Bugfix ENG-1541: yunity level fixes
- Bugfix: Go to yuscreen after close second yugi intro
- Bugfix: Disable continue button if there's no salary
- Bugfix TP-622, TP-624: Fix Android back handler and yugi intro cta
- Bugfix: Fix iPhone 12 series top bar
- Bugfix TP-622: Fix Android back button
- Bugfix TP-622: Fix android back button
- Bugfix ENG-1485: Wrong date - passive YuCoin
- Bugfix TP-574: Keep financial cover colours
- Bugfix: Fix TopBar left menu icon position
- Bugfix ENG-1481: Nonsensical copy in the "Welcome" screen of the app
- Bugfix: Fix community goals change nickname screen, plus points font
- Bugfix: Fix leaderboard issues

### Tasks

- Task Leaderboard: Add on/off text and description at the top
- Task TP-692/TP-693/TP-694: Update yu screen - personal Items, remove description from purchasable items and reveal tooltip when tapping on table cells
- Task: Change product queries
- Task ENG-1550: correct challenge reward
- Task TP-604 Update GP copy
- Task ENG-1485: refactor passive saga

### Chores

- Chore: show steps from dailySteps reducer
- Chore: use pedometer steps on daily steps screen
- Chore: use reselect
- Chore: Clear timeouts
- Chore: Remove status change functionality
- Chore: upgrade android mixpanel version
- Chore TE-956: Update onboarding component
- Chore: use selector in screens
- Chore: reset store on logOutSuccess
- Chore: log pedometer_unauthorised
- Chore: use date_format const
- Chore: yu-screen improvements
- Chore: use funcs for initial states
- Chore: move leaderboard consent to leaderboards list
- Chore ENG-1536: remove webview on rewards
- Chore: add commas to numbers
- Chore: add script for retrospective bugsnag upload
- Chore: Bugsnag errors
- Chore/better naming for android builds

### Improvements

- Improve color for dark mode

### Extra

- Hotfix: yu screen fixes
- fixed survey journey
- Only render once YuScreenLayout
- Hotfix: correct deepLinks for android
- Hotfix: return current state on endChallenge event
- Revert: request on every pedometer update
- Handle custom cover use case for payout calculator
- Force light mode
- Fix Yugi svg
- TP-679: Mixpanel Event Taxonomy #65 and #66
- Fix
- Hotfix: for debounced query's hotfix
- Hotfix: unmount query properly
- Working - copy updates
- Add general terms of business link to the app
- Only one line break on gp address
- Increase hit slop
- Fix contact detail header
- Hotfix: downgrade mixpanel lib
- Detox: Onboarding and duels update
- Don't show price modal on client changes
- Remove link
- Copy update
- Add additional financial screen & logic
- Hotfix: counter state update issue
- Create Salary tertiary input and refactor base button
- Update schema and types
- Fix
- removed detox bug workaround
- Update yucoin power and remove unnecessary from createTopUpsQuote
- Detox: Duels update
- Update calculator icon
- Hotfix: removed the network state listener
- Hotfix TE-960: duplicate stack components
- Handle back navigation on android directly on generic overlay
- Use FastImage instead of svgs
- Detox: Fixes
- Show payment congrat if customer purchased product
- Hotfix: duels onboarding copy
- Hotfix: nav-bar spacing
- Detox: Fixes
- Get salary from quote
- Fix
- Hotfix: refetch community goals on nickname change
- Make input query not null
- merged stub data and tests, then find/replaced paths yulife-bdd-framework and data as merged from develop
- Update stripe credentials
- Fix
- Decrease delay for yugi intro screens
- FIxed
- Tokens updated
- Fix typo
- Revert "Implement browse packages intercom"
- Added githooks
- Fix environment
- Copy update
- Pregnancy only skip medical logic
- Update & Add static documents
- (origin/e2e/extended_Fix) earn rate fix for user
- Fix copy and icon color

## [3.0.0] - 2020-12-17

### Bugfixes

- Bugfix: Fix TopBar left menu icon position
- Bugfix ENG-1481: Nonsensical copy in the "Welcome" screen of the app
- Bugfix: Fix community goals change nickname screen, plus points font
- Bugfix: Fix leaderboard issues

### Chores

- Chore: Bugsnag errors
- Chore/better naming for android builds

### Extra

- Fix copy and icon color

## [2.9.0] - 2020-12-16

### Features

- Feature TP-574: Financial Questions
- Feature TP-565: Review Screen icons and checkbox
- Feature TP-564: Add new progress bar and center logo
- Feature TP-566: Underwriting 2.0 - Medical Inputs
- Feature TP-525: Restructure YuScreen

### Bugfixes

- Bugfix: Fix GP ContactDetails' FindAddress screen
- Bugfix: Remove fetchPolicies to allow finalise package create new quotes
- Bugfix: Fix yugi position
- Bugfix EN-1389: Challenge completed notification mistake on iOS
- Bugfix: Fix OnboardingSwiper controller positions
- Bugfix: Various FIB scaling and margin fixes
- Bugfix TP-565: Update FIB review to add yugi, title, copy, checkbox width
- Bugfix ENG-1420: Community Goals Intro buttons on top of content on small devices screen
- Bugfix ENG-1389: Challenge completed notification mistake
- Bugfix: Open non http links in native browser
- Bugfix TE-849: Input field font
- Bugfix: Fix YuScreen ProductSet margins
- Bugfix: Various YuScreen and Underwriting fixes
- Bugfix: Rehydrate fib answers
- Bugfix ENG-1345: Update duels to get steps from db
- Bugfix: YuScreen separator and margin, missing avatar creation prompt
- Bugfix: Add Charms to YuScreen
- (origin/bugfix/steps-fetching) Bugfix: steps fetching at initial load
- Bugfix TP-553: Height & Weight switch
- Bugfix: sync the API on every 50 steps

### Tasks

- Task TP-580: Create stripe payment on client to use native form
- Task TP-564: Top bar standardisation
- Task TP-573 Card input form and collect payment mutation
- Task TP-582: Add missing data to redux on getUserSuccess
- Task: Define constant outside function
- Task: Standardise TopBar and GenericHeading heights
- Task TP-534: Send to API fib store data
- Task ENG-1269: Create test build
- Task TP-555: Send missing data to extract all evidence
- Task ENG-1381: Improve component logic and apply suggestions from the PR
- Task ENG-1381: Change nickname
- (origin/task/add-yu-token-to-webview, task/add-yu-token-to-webview) Task: Add yu token to header webview
- (origin/task/tp-569-update-tipsi-stripe-to-version-8.0.0-beta) Update tipsi stripe to version 8.0.0
- Task TP-550: Refresh fib product store
- Task: fix android runtime fitkit permissions

### Extra

- Detox: Yuscreen update
- Add exit modal for gp
- Add rga rejected and payed status
- Fix financial covers list missing yugi, close modal
- Introduction and medical copy change
- Alcohol disable cta
- Alcohol, Drugs, COVID copy update
- fix: package.json to reduce vulnerabilities
- Detox: Earn rate multiplier fix
- Fix reset medical journey
- Bugxfix: Nickname (community goals) "Save" button bug
- fix: package.json to reduce vulnerabilities
- Enable Android hardware back button for underwriting journey
- Fix ENG-1381: Unable to change nickname on android
- Fix GP details margins
- Fix atoms/chip for small devices
- Finish new progress bar progress accumulation logic
- Detox: Feedback form
- Fix underwriting rejected screen
- Detox: Extended earn rate fix
- Enable Contact details, GP and Payments screen
- No need of useCallbakc
- wip
- goals updatE
- updated min steps sent
- Added skip to yuscreen tests
- Use dob from underiting for payout calculator
- Add Dr. on client, check for Town
- Hotfix: goals caching
- Detox: Goals
- Hotfix: target sdk version

## [2.8.0] - 2020-11-05

### Features

- Feature: FIB GP details

### Bugfixes

- (origin/bugfix/tp-548) Rename customer quote id for quoteId
- (origin/bugfix/tweak-scroll-settings) Tweak scroll, move yugi up
- Bugfix: Cleanup underwriting question and titles
- Bugfix: Fix salary input focus handler
- Bugfix TE-623: Duels fixes
- Bugfix TE-623: UI changes
- Bugfix TE-623: Fix rotate animation on android
- (origin/bugfix/annual-salary-fib-copy, bugfix/annual-salary-fib-copy) Fix annual salary text, add new style for rejection header

### Tasks

- Task: TP-537 Update gp details using mutation
- Task TP-551: Handle GP Details scroll to focused InputField
- Task TP-540: Replace alcohol slider with text input
- Task TP-537 TP-547: Add yugi, remove TitleWithIcon from UnderwritingJourney
- Task TP-545: Remove autofocus
- Task TP-513: Change YuScreen disclaimer copy
- (origin/task/tp-544-adjust-text-size) Adjust text size
- (origin/task/tp-546-adjust-button-size) Adjust button size
- (origin/task/tp-543-adjust-topbar-size) Adjust FIB Top Bar size
- (origin/task/tp-523-browse-packages-loading) Use cache-first to avoid loading already loaded values
- (origin/task/media-no-error) Change media util to default to 0 instead of throwing an error
- Task: Add function for media queries
- (origin/task/tp-536) Redirect after confirm packages to address details
- Task: TP-535 Use topups new queries and mutation
- (origin/task/update-lib-react-native-device-info) Update react-native-device-info
- (origin/task/refresh-leaderboards-on-app-active) Refresh leaderboards on app active

### Chores

- Chore: Upgrade notifications and move to com.yulife.develop for dev / uat builds

### Extra

- Detox: Enter salary fix
- Revert "Use less loading states in FIB summary"
- Keep Yugi in underwriting
- Provide strict whitelist of routes that can load duel invite
- Redirect after confirm packages to address details
- Redirect to feedback after submit contact details
- Remove unnecesary async
- Use contact details mutation
- Add missing types
- Update contact details mutation
- New schema types
- More UI fixes
- Add missing checkbox
- Redirect to feedback after submit contact details
- Remove unnecesary async
- Use contact details mutation
- Add missing types
- Update contact details mutation
- New schema types
- Detox: Fix negative reward purchase scenario
- UI fixes
- Rejected screen

## [2.7.0] - 2020-10-22

### Features

- Feature: TP-426 New smoking questions
- (origin/feature/update-forest-asset) Feature: update the main forest asset
- Feature TP-447: Update copy for underwriting
- Feature: Advanced feedback forms
- Feature TE-623: Duels (rn-client)
- (origin/feature/tp-37-gp-results-screen, feature/tp-37-gp-results-screen) Show GP results, make use of medicalInvestigationRequired > > TP-37
- Feature TP 455: Add details on leaderboards ui
- Feature TE-648: Create info lightbox for Yunity/Yuniversal
- Feature TP-368: add the webview screen to the app
- Feature TP-267: Data-saving leaderboards
- Feature: TP-30 Price updated screen

### Bugfixes

- (origin/bugfix/missing-answers-copy, bugfix/missing-answers-copy) Replase missing ansewrs copy
- (origin/bugfix/fib-price, bugfix/fib-price) Fib price fix
- (origin/bugfix/tp-511-uk-residency-small-copy-changes, bugfix/tp-511-uk-residency-small-copy-changes) UK residency copy update
- Bugfix: Fix broken locked cell
- Bugfix ENG-1219: Add safer width values on YuScreen Employer Benefit items
- Bugfix TP-493: Copy update & back button fix
- (origin/bugfix/duels-issues) Bugfix: various duel fixes
- Bugfix TE-623: Duel fixes
- Bugfix TP-471 Hide custom cover from browse package screen
- Bugfix: Remove leaderboard autoscroll
- Bugfix: Fix UI of leaderboard floating item avatar
- Bugfix: Copy on fib underwriting intro screen and detox
- Bugfix: push notifications
- (origin/bugfix/tp-459, bugfix/tp-459) Fix local navigation with only 1 route
- (origin/bugfix/TP-460) Add border to redirected screens
- (origin/bugfix/tp-458) Allow click edit avatar when avatar is created
- Bugfix: Make keyboard adaptive for external links
- (origin/bugfix/tp-36-add-details-background-color, bugfix/tp-36-add-details-background-color) Add background color on details screen
- Bugfix: Add validation for high blood/cholesterol
- Bugfix: Make member services use webview and fix webview cropping
- Bugfix: Add timeout to leaderboards scroll event emitter
- Bugfix: TP-267 Tweak leaderboards
- (origin/bugfix/tp-126-contact-details-keyboard-persist, bugfix/tp-126-contact-details-keyboard-persist) Make use of keyboardShouldPersistTaps
- (origin/bugfix/button-overlay) Bugfix: Button overlay overlap
- Bugfix: Fix UI details on new leaderboards
- Bugfix: UI feedback for pedestal
- (origin/bugfix/tp-214-offline-screen) Bugfix TP-214: offline screen
- Bugfix: Fixes fib inputs on android
- Bugfix: Show daily steps BG based on activeLevel

### Tasks

- Task: Fix comma in FIB intro screen
- Task TE-652: Update the yucoin asset
- Task: Leaderboards conditional label, minor UI fixes
- (origin/task/tp-457) Flag users that require medical investigations
- Task TP-449 Add salary on review screen and form validation
- (origin/task/te-657-match-daily-steps-screen-to-figma) adjust spacing
- Task TE-645: Move background image down on small devices
- Task TP-436 Underwriting journey from browse package

### Extra

- Detox: Extended update
- fix: package.json to reduce vulnerabilities
- Detox: Double yucoin power
- Detox: Leaderboard title fix 2
- leaderboard fix
- use fitkitavailable
- Detox: Extended worlds fix
- skipped custom cover scenario and removed matcher
- Detox: Stats extended fix
- (origin/e2e/leaderboard_copy_update) ready to merge
- (origin/e2e/earn_rate_fix) quick earn rate update
- Detox PG migration fixes
- Add tipsi-stripe package
- (origin/e2e/extended_fixes) ready to merge
- Tweak lightbox spacing, and spell out ordinals as words
- Split name in 2 fields
- Confirmation&Declaration screen
- Detox: Extended updates
- Fix post code and nphone numebr input
- Detox: Small fixes
- Change correct state
- Validate phone number, format post code, fix emails and county
- Add contact detailsscreen
- Detox: Leaderboard ranking fix
- Hotfix: feedback modals
- add padding around yucoin svg
- Add back button on review and handle error
- (origin/e2e/detox_fix) Removed CES screen

## [2.6.0] - 2020-09-08

### Features

- Feature TP-327: Display CES/NPS on load
- Feature TE-589: New game +
- Feature: TP-353 Implement payout amount logic
- Feature TE-603: Update unity level gems
- Feature TE-603: Yunity Animation Updates
- Feature TE-590: Update the yunity animations
- Feature: TP-327 (2): CES/NPS screen
- Feature: introducing lottie
- Feature: TP-32 Fib confirm packages
- Feature: TP-344 Medical journey logic
- Feature: TP-20 Continue Later Fib Journey
- Feature TP-327 (a): CES/NPS screen
- Feature TP-385: create horizontal score component
- Feature: TP-27 medical journey
- Feature TP-28 (d): Financial Questions - Cleanup
- Feature TP-28 (c): financial questions
- Feature TP-301: Atoms: Button Refactor

### Bugfixes

- Bugfix TP-422 FIB issues
- Bugfix: Background image should update when reaching a new world
- Bugfix ENG-1006: toggle isLoading on challengeResetSuccess
- Bugfix ENG-1006: Infinite loading for Challenge End button
- Bugfix TP-424: remove Wootric
- Bugfix: CES/NPS Screens
- Bugfix TP-128: Underwriting change answers fixes
- Bugfix: FIB UI/UX fixes
- Bugfix: Update Types
- Bugfix: rehydrate on fresh install
- Bugfix: TP-28: finance questions fixes
- Bugfix ENG-999: Handle leaderboard lengthy text size
- Bugfix: fix badly sized avatar button
- Bugfix ENG-954: reset the daily steps page immediately on app load

### Tasks

- Task: Initialise detox for new leaderboards
- Task TE-594: Update the daily yucoin icon
- Task: Add input truncate
- Task: Add FIB underwriting name, birthday, height, weight display and inputs
- Task TP-340: create cover cards
- Task: Factor out daily steps content
- Task TP-339: Additional Form Screen
- Task TP-337: Implement chip & chiplist
- Task: Factor out streaks
- Task: TP-299 Create top bar organism

### Chores

- Chore: Yuniversal Info Screen
- Chore: fix unity animations
- Chore: move previous question to topbar
- Chore: send apollo client name in headers with the right deviceId
- Chore: TP-344 Finalise medical journey logic
- Chore: define splash screen sizes as consts
- Chore: native animated pulse
- Chore: have one back button only
- Chore: fix heading for fib
- Chore TP-333: add alcohol bottle

### Extra

- Center leaderboard avatars
- New medical journey flow
- Detox: Browse packages
- Fix daily steps content loading condition
- Implement quote expire logic
- Detox Updates
- Refactor back to review screen logic
- show the new yucoin for everyone and delete old assets
- Change answer
- custom cover form only goes back one step
- Fixes for lifestyle screens
- Revert "Hide previous button on height/weight input screens"
- Let leaderboard item update
- Fixes UI for small screens
- make fixes to financial screens
- Hotfix: update the persisted store keys on hydrate
- Everything seems to be working locally. Added a few waits and extended a scroll on one function to make everything more robust for bitrise
- Persist product state
- Revert "Sizes"
- Create mocks for review screen
- Detox: Fix pulse
- Refactor medical journey
- Fix copy on underwriting into
- Fix detox
- navigate to underwriting from debug
- Add underwriting intro screen
- Fix first month for payout calculation
- Revert "Set default number of lines to 1"
- add custom delay for buttons
- change link opacity on press|
- make fixes to buttons
- Adjust pounds margin
- Historical medical item and markdown
- Fix develop branch
- resolve storybook warnings
- add type for underwiritng screen
- Add navigation
- Hotfix: UAT build

## [2.5.0] - 2020-08-10

### Features

- Detox: Split features
- Feature TP-312: Add user's yumoji to feedback success form

### Bugfixes

- Bugfix: TP-334 Fix payout amount options
- Revert "Merge branch 'bugfix/tp-214' into 'develop'"
- Bugfix: TP-303 Change payout amount age limits
- Bugfix: TP-325 Redirect to feedback form on custom cover continue
- Bugfix: Get Pill Working on Android
- Bugfix: TP-303 payout amount
- Bugfix: TP-303 Add limits for payout amount calculator
- Bugfix: TP-214 Retry network requests before showing offline screen

### Tasks

- Task: TP-300 Organism nav bar
- Task TP-292: Refactor leaderboards
- Task TP-313: Tune HorizontalScroller behavior

### Chores

- (origin/chore/add-scroll-listener-to-navigation) Chore: add scroll end listener to localNavigation

### Extra

- Detox: Yuscreen iPhone 8 fix
- Underwriting journey layout
- Revert "Add loading indicator"
- (origin/e2e/detox_split_2) moved worlds to extended and changed file names in smoke
- Detox: Updates
- Hotfix: android scroll view on useLocalNavigation
- Remove package badges
- Add logs for timesup screen
- Fix back functionality wrap content intro scrollView, make button disable
- Decrease left shadow

## [2.4.0] - unknown

### Features

- Feature TP-277: feedback success screen
- Feature TP-262: Feedback Form UI
- Feature: create useCacheAndThenMaybeNetworkQuery
- Feature TP-284: YuScreen Loading
- Feature TP-286: Loading Rewards

### Bugfixes

- Bugfix: buttons
- Bugfix ENG-961: Enable user to click the button when loading
- Bugfix: Remove incorrect alpha product condition
- (origin/bugfix/eslint-build-fail) Run prettier on pre-commit
- Bugfix TP-298: Amend Broken Purchases Layout
- (origin/bugfix/eng-944-default-font-scale, bugfix/eng-944-default-font-scale) Bugfix ENG-944: default allowFontScaling to false for both platforms
- Bugfix: Remove extra earn rate button

### Tasks

- Task TP-283: Improve quests loading screen
- (origin/task/tp-288-disclaimer, task/tp-288-disclaimer) Task TP-288: Add yuscreen disclaimer
- Task TP-294: Memoise NavBar
- Task TP-251: Optimize salary input
- Task TP-279: Improve performance of react-native-animatable by moving to UI thread
- Task: TP-281 - Change icons for personal products

### Chores

- Chore: generate random Id for native-svg animation
- (origin/chore/added-pressed-hook, chore/added-pressed-hook) Chore: added usePressedInWithDelay hook
- Chore: avatars on cloudinary
- (origin/chore/remove-header-hack) remove the hacky logic
- Chore: Add lint rule `padding line between statements`
- (origin/chore/jsx-boolean-value) Add rule
- (origin/chore/remove-deprecated-fields) Removed rating and yuCoinAwarded since they are deprecated

### Extra

- Move select package to a function
- Remove package badges
- creeate a reusable scrollable layout
- Detox: Yuscreen update
- looks more consistent
- Hotfix: touchable opacity use onPress
- short circuit loading if yuscreen intro needs to be displayed
- run eslint on pre-commit
- Hotfix ENG-964: Fix bug where locked-cell is not updating
- Stop default to third place
- Remove unused atoms
- Memoize Leaderboards TopBar
- Fix earn rate
- Fix lint
- TP-261: Add beta to generic heading

## [2.3.0] - unknown

### Features

- Feature TP-256: Hook up to API 2: Electric Boogaloo
- Feature TP-256: hook up package api to browser-packages screen
- Feature TP-51: Introduction Screen + Navigation Rework
- Feature TP-174: Fix Bugs
- Feature TP-177: Edit Salary (Pt.3)
- Feature TP-177: Edit Salary (Pt.2)
- Feature TP-174: Enter Salary Screen (PT.1)
- Feature TP-179: hide headspace on android
- (tag: test-fitkit-update, tag: test-branch-fitkit-update-2, origin/feature/upgrade-fitkit) upgrade to latest version
- Feature TP-151: Wire up Icons to rest of Browse Packages
- Feature TP-164: Float Continue Button
- Feature: simple-markdown
- Feature TP-164: add continue button
- (origin/feature/tp-151-heading-part-browse-packages) Add section header
- Feature TP-96: add feature toggle capabilities to the member-services

### Bugfixes

- Bugfix: Move avatar cache to redux, fix body type bug and prevent multiple network fetches
- Bugfix: cache avatars locally
- Bugfix: Stabilize horizontal scroller
- Bugfix TP-282: Minor Adjustments
- (origin/bugfix/intercom-photos, bugfix/intercom-photos) Bugfix ENG-947: intercom photos
- (origin/bugfix/close-keyboard) close keyboard when moving to any other page
- Bugfix TP-172: Fix Leaderboard Title
- Bugfix TP-172: Fix missing leaderboard title
- Bugfix: A tiny FAQ up
- Bugfix: Fix UI on leaderboards consent
- (origin/bugfix/use-latest-fitkit-2) update packages

### Tasks

- Task: Add missing UI gradient
- Task: Use remote avatar images everywhere except for the builder
- Task: TP-192 Add server query for browse packages
- Task: TP-193 Browse Packages fixes (FAQ)
- Task TP-50: Hook FIB FAQ to Browse
- Task: faq screens
- Task TP-163: Validate everything works
- Task: Add UI for FIB BrowsePackages EstimatedCost
- (origin/task/TP-155-faq-data) Format data
- Task TP-167: Remove badges from every product
- Task TP-154: Add UI for BrowsePackages FAQs section
- Task TP-165: Display YuMoji
- Task TP-152: How it works component
- Task: Refactor YuCoin
- Task: Add routes to Fib [browse packages, faq] from debug
- Task TP-150: Build routes for fib and fib faq

### Chores

- Chore: improve avatar loading
- Chore TP-252: change icon, also get rid of the annoying component props type
- Chore: Minor Introduction Page Changed
- Chore TP-181: Add Analytic Events
- Chore TP-138: Instant-specific copy for member services
- Chore: improve the loading sequence
- Chore: storybook-start now imports stories automatically
- Chore: add storybook to gitignore
- Chore: Remove async storage warning
- (origin/task/cleanup, origin/chore/cleanup-unused-code) Clean ups
- Chore: send to fib journey from yu-screen

### Improvements

- Improvement TP-180: better intro screens

### Extra

- Hotfix: avatars with cloudinary
- Hotfix: add loading for avatar cached svg
- Hotfix: revert fitkit
- Revert "Remove instances of react-native-animatable"
- TP-175: Payout calculator
- Add backhandler for android
- Fix simple markdown nested style
- Add icon to faq
- Push pixels
- Fix extra padding on Android
- Fix horizontal scrolling
- Increase gap between how it works and description
- Increase padding under Yumoji
- Hotfix avatar to Yumoji
- Avatar to Yumoji
- Detox: Member Services
- revert fitkit
- Hotfix: add all the root items to deeplinks
- minor copy cleanup
- Add armur assets
- Additional benefits cards
- Detox: Worlds smoke fixes
- Detox: Fixes
- Add GenericHeading rightIcon
- Detox: Extended Worlds
- quick fix - renamed \_id to productId in users
- Hotfix: query earn rate on init
- Hotfix: Leaderboards Top 3 UI
- initial data version
- Fix
- Add guards and stories
- Fix leaderboards consent
- can access fib pages
- Detox: Yu screen

## [2.2.0] - unknown

### Features

- Feature TP-96: add feature toggle capabilities to the member-services
- Feature: Additional Caching Improvements for Avatar
- (origin/feature/heading-styling-2) start again
- Feature F2-78: Initialise TextField

### Bugfixes

- Bugfix TP-161: Fix cropped yucoin
- Bugfix TP-161: Your YuCoin Page Copy Change
- (origin/bugfix/tp-161-earn-rate-weight-alignment) Fix earn rate font weight and alignment
- (origin/bugfix/tp-161-hide-skip-on-last-page) Hide skip button
- (origin/bugfix/align-badges) Align badges
- Bugfix TP-117: No longer are the avatars naked
- (origin/task/tp-135-revert-animation) Revert "Bugfix TP-135: Avatar zoom animation"
- Bugfix TP-134: Fix avatar heading borders
- Bugfix TP-94: Fix NavBar blocking leaderboard items
- Bugfix TP-135: Avatar zoom animation
- Bugfix TP-113: Do not render stars for challenges with no score
- (origin/bugfix/tp-127-align-product-icon) Align center product icon
- Bugfix: F2-107: "earn rate fixes"
- Bugfix: Past Level Not Updating After Challenge
- Bugfix: Change Leaderboards behaviour: snap locked cell
- Bugfix TP-123: Wrong Chest Modal Appearing
- Bugfix TP-117: Cache Avatars Appropriately
- Bugfix TP-118: Two Presses Required for Blur and Submit
- Bugfix: Truncate LeaderboardTitle
- (tag: release/2.2.3) Bugfix: increase delay for network listener
- (origin/bugfix/increase-timeout-network-listener, bugfix/increase-timeout-network-listener) Bugfix: increase delay for network listener
- (origin/bugfix/protect-leaderboard) Protect leaderboard componentDidUpdate condition
- Bugfix: F2-107 " earn rate fixes"
- Bugfix: Improve leaderboards UI accuracy
- Bugfix: Fix Leaderboards' refetch logic, move logging to saga, clean up container [3]
- (origin/bugfix/F2-109-yuscreen-release-blocker-bugs) Chore: use Number for SVGs
- Bugfix: Make LeaderboardConsent follow design spec more closely [1]

### Tasks

- Task TP-111: Redesign and refactor YuScreen
- Task TP-141: Redesign Earn Rate
- Task: TP-131 "Implement back journey"
- (origin/task/F2-106-avatar-assets-updates) Render different svg elements for grid items

### Chores

- Chore: minor quests screen cleanup
- Chore: break rewards container down
- Chore: added to redux for debug with APOLLO_EVENT, and offline state driven from apollo
- (tag: test-branch-update-deps-1, origin/chore/update-packages, chore/update-packages) Chore: keep packages up-to-date
- (origin/chore/fetch-queries-onload, chore/fetch-queries-onload) Chore: fetch queries onload
- Chore: quests-screen-container
- (tag: release/2.2.2) Chore: use Number for SVGs
- (origin/chore/add-jest-lookahead) add jest lookahead
- Chore: Implement no-else-return lint

### Extra

- Hotfix: Leaderboards Top 3 UI
- Hotfix: leaderboards UI
- Hotfix: leaderboards UI
- Add order to avatar part/color cache id
- Fix charm rate view
- Make avatar opacity respond to touches
- Show correct icon
- Add default textposition
- remove black bar on android earn rate
- Fix crash from navigations
- Yuscreen intro images
- Make middle bar scrollable
- Detox: Chest challenge update
- Detox: Past level check
- Fix locked cell press
- change the position of the tooltip to match a bottom bar with 5 items
- Increase leaderboards pedestal avatars by 10%
- Fix TP-136
- Fix leaderboard title distance
- Rename chat for support
- Hotfix TP-98: past level not syncing
- Alias assets
- Use padding
- Detox: Leaderboard fixes
- Extend MinimalButton and YuserProducts
- Detox: Leaderboard
- Change leaderboard about copy
- Fix leaderboard capitalise naming
- Sync avatar and leaderboard
- Show selected body type on editing avatar
- Fix inability to press on leaderboard info and title on Android
- init fix
- Detox: Streaks update
- Detox: Stats fix
- Fix: Align Leaderboards info button across states, use up-to-date info asset
- Detox: Leaderboard and menu icon fix
- Hotfix: hardcoded earnRate :facepalm:
- Show avatar save button
- Hotfix: steps not authorised crash
- Detox: Archived User
- Detox: Account locked
- Detox: Statistics
- Detox: Worlds (ENG-820)
- Detox: Challenge scenario fixes
- Detox: Token refresh / expiration
- changed challenge for 'I can view quest screens' scenario, hopefully detox on bitrise machines will be able to keep up now
- Hotfix: fix refresh logic
- Fix getSafeAreaStart

## [2.1.0] - unknown

### Features

- Hotfix: Enable feature flag for feedback
- (origin/feature/refactor-splash-screen) refactor splash screeen to be functoinal component and remove componentWillMount

### Bugfixes

- Bugfix ENG-843: Disable button when loading
- Bugfix ENG-834: Attach quest status bar colour to top bar colour
- Bugfix ENG-834: Fix dark mode and font scaling

### Tasks

- TASK: Create script to run multiple devices

### Chores

- Chore: Create Custom ESLint Rule
- Chore: Add storybook port to adb reverse
- Chore: check if largeList exists
- Chore ENG-832: Install Storybook
- (tag: test-branch-andrico-1205, origin/chore/fix-startios-warning) unlink react-native deps
- Chore ENG-771: Decouple quests-container from quests-screen

### Extra

- Final candidate
- Final
- Remove SVG background
- Hotfix: session expiration
- Hotfix: remove status bar changes from quests map
- Detox: Race condition fixes
- Change steps mechanism
- Detox: iPhone 8 fixes
- Detox: Challenge scenarios and develop fixes
- Final
- Hotfix: Default statusBar to light on Android
- Detox: 100% on iphone 11p
- Revert "Debug detox"
- (origin/copy/eng-838-yumatter-copy-change) Change Yumatter copy
- Revert "Debug detox"
- Hotfix: challenge success cycling result missing

## [2.0.0] - unknown

### Features

- (tag: release/2.0.2) Hotfix: Enable feature flag for feedback
- Feature ENG-176 ENG-265: Cycling Challenge

### Bugfixes

- (tag: release/2.0.3) Bugfix ENG-834: Fix dark mode and font scaling
- Bugfix ENG-797: Fix LevelBubble state
- Bugfix: add the componentBackgroundColor option to default layout
- (origin/bugfix/challenge-steps-not-recording) fix challenge containernot updating

### Tasks

- Task ENG-766: Add coverage to Challenges List
- Task ENG-756: Add Eslint
- Task ENG-760: Prettify Everything
- Task ENG-759: Update Node 10.7.0 -> 10.20.0
- Task: Move pre-commit script to pre-push hook
- Task ENG-755: Add tests and refactor Button component

### Snyk

- fix: package.json & .snyk to reduce vulnerabilities

### Chores

- Chore: optimised images
- (tag: release/2.0.5) Chore: added dex options
- (tag: release/2.0.4) Chore: add gradle props
- (tag: release/2.0.1) Chore: heap size 2
- Chore: max jvmargs
- Chore: check if largeList exists
- Chore: add missing notification assets
- Chore: add the `semi` rule to eslint
- Chore: remove the fitkit patch and update its commit hash
- Chore: upgrade RN to 0.62
- Chore: fix the tests
- Chore: fix isWellbeingAccess

### Improvements

- Improvement ENG-807: Improve Pulse animation fps
- improve comment

### Extra

- Adjust heap settings
- Hotfix: challenge success cycling result missing
- Hotfix ENG-797: data not refreshing
- Hotfix: revert android manifest notification changes
- Hide vertical scroll indicators
- display the correct animals in teh challenge tiles
- Hotfix: avios CTA button copy
- add a test that allows us to test redux actions
- Hotfix: mock push notification ios
- Hotfix: local notifications crashing ios
- Hotfix: back button not working on challenge failed/success
- (origin/copy/typo-in-meditation-challenge-screen-2) revert minute copy
- Tests ENG-741: Add additional test to blur provider
- fix broken typescript
- fix copy change

## [1.17.0] - unknown

## [1.16.0] - unknown

### Features

- Feature ENG-699: change yulife logo

### Bugfixes

- Bugfix ENG-697: Update FAQ meditation challenge setup tutorial link

### Chores

- (tag: release/1.16-final, origin/release/1.16, release/1.16) Chore: fix the tests
- Chore: fix isWellbeingAccess
- Chore: use isWellbeingAccess for member services
- Chore: update react native fitkit

### Extra

- Fix test
- Use same exit challenge screen for all challenges
- Remove not used resources
- Update copy and design
- Add new svg for loading placeholder

## [1.15.0] - unknown

### Bugfixes

- Bugfix ENG-643: Yucoin history UI bug

### Snyk

- fix: package.json, package-lock.json & .snyk to reduce vulnerabilities

### Chores

- (tag: release/1.15.1, origin/release/1.15, release/1.15) Chore: update react native fitkit
- Chore: Add androidX for broken build system
- Chore: update snyk version

### Extra

- Hotfix: remove replace appComponentFactory for manifest
- Hotfix: android build
- Renaming card
- Get heading and subheading details from remote

## [1.14.0] - unknown

### Bugfixes

- Bugfix ENG-431: Fix cycling distance units inconsistent

### Chores

- (tag: test-branch-cycling-release-1, tag: release/1.14.internal.1, origin/release/1.14, release/1.14) Chore: package json fixes
- Chore: update rn dependencies
- Chore: show the right surge amount in today screen
- Chore: Do not request passive meditation during login

### Improvements

- Improvement ENG-234: Update past level history design
- (tag: test-branch-eng-176-cycling-ui-bugs-fixed, tag: test-branch-eng-176-cycling-bug-fix-v.1) Improvement ENG-520: Inflate cycling request period if no results

### Extra

- Hotfix: remove the sign up button
- Change react native fitkit for testing purpose
- Adjust progress bar colors
- Show km for challenge details
- Generate graphql types after rebase
- Add androidMultiplier for hedgedog
- Rename cycling test subtype
- Add challenge tile position
- Fix undefined for cycling score
- Remove bottom empty space
- Use assets
- Add cycling assets
- added scroll view to challenges list & history
- Add disntance object for MilestoneTarger
- Add meters as unit for challenge, fix stories
- Add cycling to the store
- Add cycling end challange logic
- Add Biking permission
- Query cycling logic
- Add distance to gql
- Add cycling subtype
- Add distance in the schema

## [1.13.0] - unknown

### Bugfixes

- Bugfix ENG-398: Query passive meditation when active challenge
- Bugfix ENG-400: Intercom in-app message cause app flickering
- Bugfix ENG-401: Fix NaN for meditation coins
- Bugfix: daily steps forest image
- Bugfix: daily steps forest image
- Bugfix: challenge progress screen image ratios

### Chores

- (tag: release/1.13.new-1) Chore: show the right surge amount in today screen
- Chore: Do not request passive meditation during login
- Chore: fix today's yucoin surge
- Chore: huggg voucher name
- Chore: huggg voucher name

### Improvements

- Improvement ENG-394: Get passive meditation progress from remote

### Extra

- Hotfix: surges
- Hotfix: update wootric
- add the correct check for today yucoin meditation view
- Fix ENG-367: daily steps image ratio
- Hotfix: daily coin top margin
- ENG-213 fix wootric property names to match intercom, add business leaderboard

## [1.12.0] - unknown

### Features

- Feature ENG-95: integrate wootric

### Bugfixes

- Bugfix ENG-246: hide next/previous episode on iPhone X
- Bugfix ENG-229: position top bar issue
- Bugfix: add padding for settings screen scrollview

### Extra

- ENG-95 add killswitch for wootric via user feture toggles

## [1.11.0] - unknown

### Features

- Feature: select wegift voucher amount
- Feature ENG-151: surge UI on today's yucoin
- Feature ENG-64: Add full activity history
- Feature ENG-158: Cancel challenge screen
- Feature ENG-136: new intro tooltips
- Feature ENG-135: Connection info modal
- ENG-96 feature-toggled last synced display

### Bugfixes

- Bugfix ENG-228: add more logs for bridge queries
- Bugfix ENG-227: Remove animations from info screen
- Bugfix: live internal copy crash
- Bugfix: live internal copy crash
- Bugfix: prevent crash on leaderboard container sCU
- Bugfix ENG-204: update copy of locked reward
- ENG-173 Bugfix: Add activeLevel when checking sCU
- Bugfix ENG-64: height on sources that are 0
- Bugfix: backward compatibility for locked reward copy
- Bugfix ENG-64: activity history crash on open
- Bugfix ENG-126: Streaks not updating

### Tasks

- Task ENG-192: add surge UI under toggle

### Chores

- Chore: add basic release instructions to README

### Improvements

- Improvement ENG-94: Reward image loading

### Extra

- Bufix ENG-96: Connection explainer screen bugs
- ENG-155 redeem link rewards via the API
- [HOTFIX] jitpack android build
- ENG-154 add some null handling just in case the user has no leaderboard
- Change ENG-96: Delay update connection
- Correct stuff on streak modal if finishing streak on 6th day
- Performance: lessen rerenders on screens/components
- Hotfix: build gradle
- Fix ENG-49: prevent overlap
- Change ENG-128: update voucher locked screen copy
- (tag: test-branch-last-synced-1) ENG-96 update tests

## [1.10.0] - unknown

### Bugfixes

- Bugfix ENG-81: fix ios deeplink
- Bugfix ENG-102: fontScale change

### Chores

- Chore: change back the fontScale
- Chore: version fix
- Chore: update apollo schema to latest API
- Chore: fix gcm sender id
- Chore: send deviceToken to server

### Improvements

- Improvement ENG-81: Reset password better

### Extra

- Fix ENG-107: make results screen consistent
- Resolve ENG-63 "Remove wave"
- Fix ENG-62 & ENG-132: Avoid nav contrast issues & scrollTo when after showing unity
- Change ENG-107: new challenge failed screen
- Fix ENG-59: extend touch area of other touchables
- Fix ENG-102: prevent fontScaling on Android
- ENG-53 show full streak when collecting award, even if not on day 5

## Note

This changelog has not been kept up until this date, therefore this section is just for reference
