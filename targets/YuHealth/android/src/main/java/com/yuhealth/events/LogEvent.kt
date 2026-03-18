package com.yuhealth.events

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap
import com.yuhealth.YuHealthEvent
import com.yuhealth.types.HealthEvent

class LogEvent constructor(
  private val message: String,
) : YuHealthEvent {
  override val eventName: HealthEvent = HealthEvent.LOG_EVENT

  override fun toWriteableMap(): WritableMap? {
    val event = Arguments.createMap()
    event.putString("message", message);

    return event
  }
}
