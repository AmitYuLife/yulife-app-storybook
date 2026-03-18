package com.yuhealth.types

enum class HealthEvent(val event: String) {
  PEDOMETER_UPDATE("YU_PEDOMETER_UPDATE"),
  LOG_EVENT("YU_LOG_EVENT"),
  FOREGROUND_PEDOMETER_UPDATE("YU_FOREGROUND_PEDOMETER_UPDATE")
}
