
export const onLeaderboardConsent = async () => {
    const subHeading = "This will let us share details about your activity with other members on this leaderboard. If you change your mind, you can opt out at any point in settings. Ready to compete?"
    const copy = ["join this leaderboard?", subHeading, "yes please!"]

    for (const i of copy) {
        await expect(element(by.text(i))).toBeVisible()
    }
}