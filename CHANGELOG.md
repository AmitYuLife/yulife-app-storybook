# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
