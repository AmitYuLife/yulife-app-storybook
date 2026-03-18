package com.yuhealth.types.permissions

enum class PermissionIdentifier(val indentifier: String) {
  STEP_COUNT("stepCount"),
  STEP_DAILY_TREND("stepDailyTrend"),
  CALORIES("calories"),
  ACTIVITIES("activities"),
  CYCLING_DISTANCE("cyclingDistance"),
  HEART_RATE("heartRate"),
  MINDFUL_MINUTES("mindfulMinutes"),
  WHEELCHAIR_PUSHES("wheelchairPushes"),
  WORKOUT_MINUTES("workoutMinutes"),
}
