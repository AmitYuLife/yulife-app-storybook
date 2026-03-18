import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap
import org.joda.time.DateTime

data class SampleQueryResponse(
  val startTime: DateTime,
  val endTime: DateTime,
  val bundleIdentifier: String,
  val isUserEntered: Boolean,
  val value: Double
) {

  class Builder {
    private var startTime: DateTime? = null
    private var endTime: DateTime? = null
    private var bundleIdentifier: String? = null
    private var isUserEntered: Boolean? = null
    private var value: Double? = null

    fun setStartTime(startTime: DateTime) = apply { this.startTime = startTime }
    fun setEndTime(endTime: DateTime) = apply { this.endTime = endTime }
    fun setBundleIdentifier(bundleIdentifier: String) =
      apply { this.bundleIdentifier = bundleIdentifier }

    fun setIsUserEntered(isUserEntered: Boolean) = apply { this.isUserEntered = isUserEntered }
    fun setValue(value: Double) = apply { this.value = value }

    fun build(): SampleQueryResponse {
      requireNotNull(startTime) { "Field startTime is required" }
      requireNotNull(endTime) { "Field endTime is required" }
      requireNotNull(bundleIdentifier) { "Field bundleIdentifier is required" }
      requireNotNull(isUserEntered) { "Field isUserEntered is required" }
      requireNotNull(value) { "Field value is required" }

      return SampleQueryResponse(
        startTime = startTime!!,
        endTime = endTime!!,
        bundleIdentifier = bundleIdentifier!!,
        isUserEntered = isUserEntered!!,
        value = value!!
      )
    }
  }


  companion object {
    fun toResponse(result: List<SampleQueryResponse>?): WritableMap? {
      val response = Arguments.createMap()
      val responseItems = Arguments.createArray()
      if (result != null) {
        for (item in result) {
          val responseItem = Arguments.createMap()
          responseItem.putString("startTime", item.startTime.toString())
          responseItem.putString("endTime", item.endTime.toString())
          responseItem.putBoolean("isUserEntered", item.isUserEntered)
          responseItem.putString("bundleIdentifier", item.bundleIdentifier)
          responseItem.putDouble("value", item.value)
          responseItems.pushMap(responseItem)
        }
      }

      response.putArray("result", responseItems)
      return response
    }
  }
}
