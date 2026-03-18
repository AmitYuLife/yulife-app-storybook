package com.yuhealth.types.queries.aggregate

import BucketUnit
import com.facebook.react.bridge.ReadableMap

data class BucketSize(
  val unit: BucketUnit,
  val value: Int,
) {
  companion object {
    fun toBucketSize(options: ReadableMap?): BucketSize {
      val value = options?.getInt("value") ?: 1
      val unit = options?.getString("unit")?.let {
        BucketUnit.valueOf(it)
      }

      return BucketSize(
        unit!!,
        value,
      )
    }
  }
}


