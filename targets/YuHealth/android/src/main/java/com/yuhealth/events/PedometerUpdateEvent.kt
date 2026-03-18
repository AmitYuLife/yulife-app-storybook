package com.yuhealth.events

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap
import com.yuhealth.YuHealthEvent
import com.yuhealth.types.HealthEvent
import org.joda.time.DateTime

class PedometerUpdateEvent constructor(
  private val startTime: DateTime,
  private val endTime: DateTime,
  private val steps: Int,
  private val stepsBeforeSubscribe: Int
) : YuHealthEvent {
  override val eventName: HealthEvent = HealthEvent.PEDOMETER_UPDATE

  override fun toWriteableMap(): WritableMap? {
    val writeableMap = Arguments.createMap()
    writeableMap.putString("startTime", startTime.toString());
    writeableMap.putString("endTime", endTime.toString());
    writeableMap.putInt("steps", steps);
    writeableMap.putInt("stepsBeforeSubscribe", stepsBeforeSubscribe)

    val result = Arguments.createMap();
    result.putMap("result", writeableMap)

    return result
  }
}
