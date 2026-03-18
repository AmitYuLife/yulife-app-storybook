package com.yuhealth.pedometer

import android.hardware.SensorManager
import org.joda.time.DateTime

const val MAX_REPORT_LATENCY_STEP_SENSOR = 5000000 // 5 seconds

interface StepSensor {
  val sensorType: StepSensorType

  fun subscribe(
    todayStepsBeforeSubscribe: Int,
    startTime: DateTime,
    sensorManager: SensorManager,
    emitEvent: (allSteps: Int, stepsBeforeSubscribe: Int) -> Unit
  )

  fun unsubscribe(sensorManager: SensorManager)
  fun isAvailable(sensorManager: SensorManager): Boolean
}
