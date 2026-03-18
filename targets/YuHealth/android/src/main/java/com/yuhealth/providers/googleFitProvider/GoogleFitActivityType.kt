package com.yuhealth.providers.googleFitProvider

import android.util.Log
import com.yuhealth.types.HealthActivityType

object GoogleFitActivityType {
  fun getHealthActivityType(dataType: String): HealthActivityType {
    return when (dataType) {
      "aerobics" -> HealthActivityType.AEROBICS
      "archery" -> HealthActivityType.ARCHERY
      "badminton" -> HealthActivityType.BADMINTON
      "baseball" -> HealthActivityType.BASEBALL
      "basketball" -> HealthActivityType.BASKETBALL
      "biathlon" -> HealthActivityType.BIATHLON
      "biking" -> HealthActivityType.CYCLING
      "biking.hand" -> HealthActivityType.CYCLING_HAND
      "biking.mountain" -> HealthActivityType.CYCLING
      "biking.road" -> HealthActivityType.CYCLING
      "biking.spinning" -> HealthActivityType.CYCLING
      "biking.stationary" -> HealthActivityType.CYCLING
      "biking.utility" -> HealthActivityType.CYCLING
      "boxing" -> HealthActivityType.BOXING
      "calisthenics" -> HealthActivityType.CALISTHENICS
      "circuit_training" -> HealthActivityType.CIRCUIT_TRAINING
      "cricket" -> HealthActivityType.CRICKET
      "crossfit" -> HealthActivityType.CROSSFIT
      "curling" -> HealthActivityType.CURLING
      "dancing" -> HealthActivityType.DANCE
      "diving" -> HealthActivityType.DIVING
      "elliptical" -> HealthActivityType.ELLIPTICAL
      "ergometer" -> HealthActivityType.ROWING
      "fencing" -> HealthActivityType.FENCING
      "football.american" -> HealthActivityType.FOOTBALL_AMERICAN
      "football.australian" -> HealthActivityType.FOOTBALL_AUSTRALIAN
      "football.soccer" -> HealthActivityType.SOCCER
      "frisbee_disc" -> HealthActivityType.FRISBEE
      "gardening" -> HealthActivityType.GARDENING
      "golf" -> HealthActivityType.GOLF
      "guided_breathing" -> HealthActivityType.GUIDED_BREATHING
      "gymnastics" -> HealthActivityType.GYMNASTICS
      "handball" -> HealthActivityType.HANDBALL
      "interval_training.high_intensity" -> HealthActivityType.INTERVAL_TRAINING_HIGH_INTENSITY
      "hiking" -> HealthActivityType.HIKING
      "hockey" -> HealthActivityType.HOCKEY
      "horseback_riding" -> HealthActivityType.HORSEBACK_RIDING
      "housework" -> HealthActivityType.HOUSEWORK
      "ice_skating" -> HealthActivityType.SKATING
      "interval_training" -> HealthActivityType.INTERVAL_TRAINING
      "jump_rope" -> HealthActivityType.JUMP_ROPE
      "kayaking" -> HealthActivityType.KAYAKING
      "kettlebell_training" -> HealthActivityType.KETTLEBELL_TRAINING
      "kickboxing" -> HealthActivityType.KICKBOXING
      "kick_scooter" -> HealthActivityType.KICKSCOOTER
      "kitesurfing" -> HealthActivityType.KITE_SURFING
      "martial_arts" -> HealthActivityType.MARTIAL_ARTS
      "meditation" -> HealthActivityType.MEDITATION
      "mixed_martial_arts" -> HealthActivityType.MARTIAL_ARTS
      "p90x" -> HealthActivityType.P90X
      "pilates" -> HealthActivityType.PILATES
      "polo" -> HealthActivityType.POLO
      "racquetball" -> HealthActivityType.RACQUETBALL
      "rock_climbing" -> HealthActivityType.CLIMBING
      "rowing" -> HealthActivityType.ROWING
      "rowing.machine" -> HealthActivityType.ROWING
      "rugby" -> HealthActivityType.RUGBY
      "running" -> HealthActivityType.RUNNING
      "running.jogging" -> HealthActivityType.RUNNING
      "running.sand" -> HealthActivityType.RUNNING
      "running.treadmill" -> HealthActivityType.RUNNING
      "sailing" -> HealthActivityType.SAILING
      "skateboarding" -> HealthActivityType.SKATEBOARDING
      "skating" -> HealthActivityType.SKATING
      "skating.cross" -> HealthActivityType.SKATING
      "skating.indoor" -> HealthActivityType.SKATING
      "skating.inline" -> HealthActivityType.SKATING
      "skiing" -> HealthActivityType.SNOW_SPORTS
      "skiing.back_country" -> HealthActivityType.SNOW_SPORTS
      "skiing.cross_country" -> HealthActivityType.SKIING_CROSS_COUNTRY
      "skiing.downhill" -> HealthActivityType.SKIING
      "skiing.kite" -> HealthActivityType.SNOW_SPORTS
      "skiing.roller" -> HealthActivityType.SNOW_SPORTS
      "sledding" -> HealthActivityType.SNOW_SPORTS
      "snowboarding" -> HealthActivityType.SNOWBOARDING
      "snowshoeing" -> HealthActivityType.SNOW_SPORTS
      "softball" -> HealthActivityType.SOFTBALL
      "squash" -> HealthActivityType.SQUASH
      "stair_climbing" -> HealthActivityType.STAIR_CLIMBING
      "stair_climbing.machine" -> HealthActivityType.STAIR_CLIMBING
      "standup_paddleboarding" -> HealthActivityType.PADDLE_SPORTS
      "strength_training" -> HealthActivityType.STRENGTH_TRAINING
      "surfing" -> HealthActivityType.SURFING
      "swimming" -> HealthActivityType.SWIMMING
      "swimming.pool" -> HealthActivityType.SWIMMING
      "swimming.open_water" -> HealthActivityType.SWIMMING_OPEN_WATER
      "table_tennis" -> HealthActivityType.TABLE_TENNIS
      "tennis" -> HealthActivityType.TENNIS
      "treadmill" -> HealthActivityType.RUNNING
      "volleyball" -> HealthActivityType.VOLLEYBALL
      "volleyball.beach" -> HealthActivityType.VOLLEYBALL
      "volleyball.indoor" -> HealthActivityType.VOLLEYBALL
      "walking" -> HealthActivityType.WALKING
      "walking.fitness" -> HealthActivityType.WALKING
      "walking.nordic" -> HealthActivityType.WALKING
      "walking.treadmill" -> HealthActivityType.WALKING
      "water_polo" -> HealthActivityType.WATER_POLO
      "weightlifting" -> HealthActivityType.STRENGTH_TRAINING
      "wheelchair" -> HealthActivityType.WHEELCHAIR
      "wheelchair.run" -> HealthActivityType.WHEELCHAIR_RUN
      "yoga" -> HealthActivityType.YOGA
      else -> {
        Log.d("GoogleFitActivityType", "Unknown activity type: $dataType")
        return HealthActivityType.OTHER
      }
    }
  }
}
