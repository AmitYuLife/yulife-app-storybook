package com.yuhealth.providers.healthConnectProvider

import android.util.Log
import androidx.health.connect.client.records.ExerciseSessionRecord
import com.yuhealth.types.HealthActivityType

object HealthConnectActivityType {
  fun getHealthActivityType(dataType: Int): HealthActivityType {
    return when (dataType) {
      ExerciseSessionRecord.EXERCISE_TYPE_BADMINTON -> HealthActivityType.BADMINTON
      ExerciseSessionRecord.EXERCISE_TYPE_BASEBALL -> HealthActivityType.BASEBALL
      ExerciseSessionRecord.EXERCISE_TYPE_BASKETBALL -> HealthActivityType.BASKETBALL
      ExerciseSessionRecord.EXERCISE_TYPE_BIKING -> HealthActivityType.CYCLING
      ExerciseSessionRecord.EXERCISE_TYPE_BIKING_STATIONARY -> HealthActivityType.CYCLING
      ExerciseSessionRecord.EXERCISE_TYPE_BOXING -> HealthActivityType.BOXING
      ExerciseSessionRecord.EXERCISE_TYPE_CALISTHENICS -> HealthActivityType.CALISTHENICS
      ExerciseSessionRecord.EXERCISE_TYPE_CRICKET -> HealthActivityType.CRICKET
      ExerciseSessionRecord.EXERCISE_TYPE_DANCING -> HealthActivityType.DANCE
      ExerciseSessionRecord.EXERCISE_TYPE_ELLIPTICAL -> HealthActivityType.ELLIPTICAL
      ExerciseSessionRecord.EXERCISE_TYPE_FENCING -> HealthActivityType.FENCING
      ExerciseSessionRecord.EXERCISE_TYPE_FOOTBALL_AUSTRALIAN -> HealthActivityType.FOOTBALL_AMERICAN
      ExerciseSessionRecord.EXERCISE_TYPE_FOOTBALL_AMERICAN -> HealthActivityType.FOOTBALL_AUSTRALIAN
      ExerciseSessionRecord.EXERCISE_TYPE_SOCCER -> HealthActivityType.SOCCER
      ExerciseSessionRecord.EXERCISE_TYPE_FRISBEE_DISC -> HealthActivityType.FRISBEE
      ExerciseSessionRecord.EXERCISE_TYPE_GOLF -> HealthActivityType.GOLF
      ExerciseSessionRecord.EXERCISE_TYPE_GUIDED_BREATHING -> HealthActivityType.GUIDED_BREATHING
      ExerciseSessionRecord.EXERCISE_TYPE_GYMNASTICS -> HealthActivityType.GYMNASTICS
      ExerciseSessionRecord.EXERCISE_TYPE_HANDBALL -> HealthActivityType.HANDBALL
      ExerciseSessionRecord.EXERCISE_TYPE_HIGH_INTENSITY_INTERVAL_TRAINING -> HealthActivityType.INTERVAL_TRAINING_HIGH_INTENSITY
      ExerciseSessionRecord.EXERCISE_TYPE_HIKING -> HealthActivityType.HIKING
      ExerciseSessionRecord.EXERCISE_TYPE_ROLLER_HOCKEY -> HealthActivityType.HOCKEY
      ExerciseSessionRecord.EXERCISE_TYPE_ICE_HOCKEY -> HealthActivityType.HOCKEY
      ExerciseSessionRecord.EXERCISE_TYPE_ICE_SKATING -> HealthActivityType.SKATING
      ExerciseSessionRecord.EXERCISE_TYPE_MARTIAL_ARTS -> HealthActivityType.MARTIAL_ARTS
      ExerciseSessionRecord.EXERCISE_TYPE_PILATES -> HealthActivityType.PILATES
      ExerciseSessionRecord.EXERCISE_TYPE_WATER_POLO -> HealthActivityType.WATER_POLO
      ExerciseSessionRecord.EXERCISE_TYPE_RACQUETBALL -> HealthActivityType.RACQUETBALL
      ExerciseSessionRecord.EXERCISE_TYPE_ROCK_CLIMBING -> HealthActivityType.CLIMBING
      ExerciseSessionRecord.EXERCISE_TYPE_ROWING -> HealthActivityType.ROWING
      ExerciseSessionRecord.EXERCISE_TYPE_ROWING_MACHINE -> HealthActivityType.ROWING
      ExerciseSessionRecord.EXERCISE_TYPE_RUGBY -> HealthActivityType.RUGBY
      ExerciseSessionRecord.EXERCISE_TYPE_RUNNING -> HealthActivityType.RUNNING
      ExerciseSessionRecord.EXERCISE_TYPE_RUNNING_TREADMILL -> HealthActivityType.RUNNING
      ExerciseSessionRecord.EXERCISE_TYPE_SAILING -> HealthActivityType.SAILING
      ExerciseSessionRecord.EXERCISE_TYPE_SKATING -> HealthActivityType.SKATING
      ExerciseSessionRecord.EXERCISE_TYPE_STAIR_CLIMBING -> HealthActivityType.STAIR_CLIMBING
      ExerciseSessionRecord.EXERCISE_TYPE_STAIR_CLIMBING_MACHINE -> HealthActivityType.STAIR_CLIMBING
      ExerciseSessionRecord.EXERCISE_TYPE_PADDLING -> HealthActivityType.PADDLE_SPORTS
      ExerciseSessionRecord.EXERCISE_TYPE_STRENGTH_TRAINING -> HealthActivityType.STRENGTH_TRAINING
      ExerciseSessionRecord.EXERCISE_TYPE_SURFING -> HealthActivityType.SURFING
      ExerciseSessionRecord.EXERCISE_TYPE_SWIMMING_POOL -> HealthActivityType.SWIMMING
      ExerciseSessionRecord.EXERCISE_TYPE_SWIMMING_OPEN_WATER -> HealthActivityType.SWIMMING_OPEN_WATER
      ExerciseSessionRecord.EXERCISE_TYPE_TABLE_TENNIS -> HealthActivityType.TABLE_TENNIS
      ExerciseSessionRecord.EXERCISE_TYPE_TENNIS -> HealthActivityType.TENNIS
      ExerciseSessionRecord.EXERCISE_TYPE_VOLLEYBALL -> HealthActivityType.VOLLEYBALL
      ExerciseSessionRecord.EXERCISE_TYPE_WALKING -> HealthActivityType.WALKING
      ExerciseSessionRecord.EXERCISE_TYPE_WEIGHTLIFTING -> HealthActivityType.STRENGTH_TRAINING
      ExerciseSessionRecord.EXERCISE_TYPE_WHEELCHAIR -> HealthActivityType.WHEELCHAIR
      ExerciseSessionRecord.EXERCISE_TYPE_YOGA -> HealthActivityType.YOGA
      else -> {
        Log.d("HealthConnectActivityType", "Unknown activity type: $dataType")
        return HealthActivityType.OTHER
      }
    }
  }
}
