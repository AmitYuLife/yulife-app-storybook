package com.yuhealth.pedometer

import android.hardware.Sensor

enum class StepSensorType(val type: Int) {
  TYPE_STEP_COUNTER(Sensor.TYPE_STEP_COUNTER),
  TYPE_STEP_DETECTOR(Sensor.TYPE_STEP_DETECTOR),
}
