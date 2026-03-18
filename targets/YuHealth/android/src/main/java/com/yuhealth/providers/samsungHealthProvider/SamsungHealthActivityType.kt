package com.yuhealth.providers.samsungHealthProvider

import android.annotation.SuppressLint
import android.util.Log
import com.yuhealth.types.HealthActivityType

private const val TAG = "SamsungHealthActivityType"

object SamsungHealthActivityType {
  @SuppressLint("LongLogTag")
  fun getHealthActivityType(dataType: Int): HealthActivityType {
    return when (dataType) {
      0 -> HealthActivityType.OTHER
      1001 -> HealthActivityType.WALKING
      1002 -> HealthActivityType.RUNNING
      2001 -> HealthActivityType.BASEBALL
      2002 -> HealthActivityType.SOFTBALL
      2003 -> HealthActivityType.CRICKET
      3001 -> HealthActivityType.GOLF
      3002 -> HealthActivityType.OTHER
      3003 -> HealthActivityType.BOWLING
      4001 -> HealthActivityType.HOCKEY
      4002 -> HealthActivityType.RUGBY
      4003 -> HealthActivityType.BASKETBALL
      4004 -> HealthActivityType.SOCCER
      4005 -> HealthActivityType.HANDBALL
      4006 -> HealthActivityType.FOOTBALL_AMERICAN
      6003 -> HealthActivityType.BADMINTON
      6004 -> HealthActivityType.TABLE_TENNIS
      6002 -> HealthActivityType.TENNIS
      7003 -> HealthActivityType.MARTIAL_ARTS
      8002 -> HealthActivityType.DANCE
      9002 -> HealthActivityType.YOGA
      11004 -> HealthActivityType.ARCHERY
      11005 -> HealthActivityType.HORSEBACK_RIDING
      11007 -> HealthActivityType.CYCLING
      12001 -> HealthActivityType.AEROBICS
      13001 -> HealthActivityType.HIKING
      13002 -> HealthActivityType.CLIMBING
      14001 -> HealthActivityType.SWIMMING
      15004 -> HealthActivityType.ROWING
      15005 -> HealthActivityType.RUNNING
      15006 -> HealthActivityType.ELLIPTICAL
      16007 -> HealthActivityType.SNOWBOARDING
      else -> {
        Log.d(TAG, "Unknown activity type: $dataType")
        return HealthActivityType.OTHER
      }
    }
  }
}
