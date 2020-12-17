# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
