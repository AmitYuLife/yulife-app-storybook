package com.yuhealth.events

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap
import com.yuhealth.YuHealthEvent
import com.yuhealth.types.HealthEvent
import org.joda.time.DateTime

class ForegroundPedometerUpdateEvent constructor(
    private val steps: Int,
) : YuHealthEvent {
    override val eventName: HealthEvent = HealthEvent.FOREGROUND_PEDOMETER_UPDATE

    override fun toWriteableMap(): WritableMap? {
        val writeableMap = Arguments.createMap()
        writeableMap.putInt("steps", steps)

        val result = Arguments.createMap()
        result.putMap("result", writeableMap)

        return result
    }
}
