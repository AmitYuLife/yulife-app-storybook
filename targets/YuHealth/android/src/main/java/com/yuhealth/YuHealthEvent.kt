package com.yuhealth

import com.facebook.react.bridge.WritableMap
import com.yuhealth.types.HealthEvent

interface YuHealthEvent {
  val eventName: HealthEvent;

  fun toWriteableMap(): WritableMap?
}
