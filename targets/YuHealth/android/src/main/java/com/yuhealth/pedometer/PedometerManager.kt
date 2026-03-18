package com.yuhealth.pedometer

import android.content.Context
import android.hardware.SensorManager
import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.yuhealth.YuHealthGlobal
import com.yuhealth.YuHealthEvent
import com.yuhealth.events.ForegroundPedometerUpdateEvent
import com.yuhealth.events.LogEvent
import com.yuhealth.events.PedometerUpdateEvent
import com.yuhealth.logger.NativeLogger
import org.joda.time.DateTime

class PedometerManager(context: ReactApplicationContext) {
  var stepSensor: StepSensor? = null
  private var sensorManager: SensorManager =
    context.getSystemService(Context.SENSOR_SERVICE) as SensorManager

  private val stepSensors: Array<StepSensor> = arrayOf(
    StepCounter(),
    StepDetector()
  )

  fun startPedometer(
    pedometerParams: StartPedometerParams,
    todayStepsBeforeSubscribe: Int,
    emitEvent: (event: YuHealthEvent) -> Unit
  ) {
    for (sensor in stepSensors) {
      if (sensor.isAvailable(sensorManager)) {
        stepSensor = sensor
        break
      }
    }

    fun emitPedometerEvent(allSteps: Int, stepsBeforeSubscribe: Int) {
      if (YuHealthGlobal.isForegroundServiceRunning()) {
        // ForegroundService will emit its own steps, we don't handle both regular pedometer & foreground
        return
      }

      val event = PedometerUpdateEvent(
        pedometerParams.startTime,
        DateTime.now(),
        allSteps,
        stepsBeforeSubscribe
      )

      emitEvent(event)
    }

    if (stepSensor == null) {
      NativeLogger.getInstance()?.emitNativeEvent(LogEvent("Step sensor not found, continuing..."))
      // Emit initial event with current steps even if sensor unavailable
      emitPedometerEvent(todayStepsBeforeSubscribe, todayStepsBeforeSubscribe)
      return
    }

    YuHealthGlobal.setPedometerRunning(true)

    // If foreground service is running when pedometer started, emit a foreground pedometer event with its foreground steps
    // This happens in YuLife any time you put app into foreground while on a challenge (as pedometer is restarted while foreground service is running)
    if (YuHealthGlobal.isForegroundServiceRunning()) {
      val foregroundSteps = YuHealthGlobal.getForegroundSteps()
      emitEvent(ForegroundPedometerUpdateEvent(foregroundSteps))
    }

    emitPedometerEvent(todayStepsBeforeSubscribe, todayStepsBeforeSubscribe)

    stepSensor?.subscribe(
      todayStepsBeforeSubscribe = todayStepsBeforeSubscribe,
      startTime = pedometerParams.startTime,
      sensorManager = sensorManager,
      emitEvent = ::emitPedometerEvent
    )
  }

  fun stopPedometer() {
    // Set pedometer running flag to false
    YuHealthGlobal.setPedometerRunning(false)

    stepSensor?.unsubscribe(sensorManager)
  }
}
