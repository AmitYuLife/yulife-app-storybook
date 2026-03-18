package com.yuhealth.pedometer

import android.hardware.Sensor
import android.hardware.SensorEvent
import android.hardware.SensorEventListener
import android.hardware.SensorManager
import org.joda.time.DateTime

class StepDetector : StepSensor {
  override val sensorType: StepSensorType
    get() = StepSensorType.TYPE_STEP_DETECTOR
  private var stepsBeforeSubscribe = 0
  private var pedometerSteps = 0
  private var stepsSensorListener: SensorEventListener? = null
  private var currentSteps: Int? = null

  override fun subscribe(
    todayStepsBeforeSubscribe: Int,
    startTime: DateTime,
    sensorManager: SensorManager,
    emitEvent: (allSteps: Int, stepsBeforeSubscribe: Int) -> Unit
  ) {
    stepsBeforeSubscribe = todayStepsBeforeSubscribe

    stepsSensorListener = object : SensorEventListener {
      override fun onAccuracyChanged(sensor: Sensor?, accuracy: Int) {
      }

      override fun onSensorChanged(event: SensorEvent) {
        pedometerSteps++
        val newSteps = stepsBeforeSubscribe + pedometerSteps
        if (newSteps != currentSteps) {
          currentSteps = newSteps
          emitEvent(newSteps, stepsBeforeSubscribe)
        }
      }
    }

    sensorManager.registerListener(
      stepsSensorListener,
      sensorManager.getDefaultSensor(sensorType.type),
      SensorManager.SENSOR_DELAY_NORMAL,
      MAX_REPORT_LATENCY_STEP_SENSOR
    )
  }

  override fun unsubscribe(sensorManager: SensorManager) {
    stepsSensorListener?.let {
      sensorManager.unregisterListener(stepsSensorListener)
    }
    pedometerSteps = 0
  }

  override fun isAvailable(sensorManager: SensorManager): Boolean {
    return sensorManager.getDefaultSensor(sensorType.type) != null
  }
}
