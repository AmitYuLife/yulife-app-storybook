package com.yuhealth

import android.os.Build
import androidx.annotation.RequiresApi
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.bridge.ReadableType
import com.facebook.react.bridge.WritableMap
import com.facebook.react.bridge.WritableNativeMap
import org.joda.time.DateTime
import java.time.Instant
import java.time.LocalDateTime
import java.time.ZoneId

@RequiresApi(Build.VERSION_CODES.O)
fun DateTime.toJavaLocalDateTime(): LocalDateTime {
  val dateTime = this.toDate()
  val instantStartTime: Instant = dateTime.toInstant()
  return instantStartTime.atZone(ZoneId.systemDefault()).toLocalDateTime()
}

fun ReadableMap.convertReadableMapToWritableMap(): WritableMap {
  this.let { readableMap ->
    val writableMap: WritableMap = WritableNativeMap()

    val iterator = readableMap.keySetIterator()
    while (iterator.hasNextKey()) {
      val key = iterator.nextKey()
      when (readableMap.getType(key)) {
        ReadableType.Null -> writableMap.putNull(key)
        ReadableType.Boolean -> writableMap.putBoolean(key, readableMap.getBoolean(key))
        ReadableType.Number -> writableMap.putDouble(key, readableMap.getDouble(key))
        ReadableType.String -> writableMap.putString(key, readableMap.getString(key))
        ReadableType.Map -> writableMap.putMap(key, readableMap.getMap(key))
        ReadableType.Array -> writableMap.putArray(key, readableMap.getArray(key))
      }
    }

    return writableMap
  }
}
