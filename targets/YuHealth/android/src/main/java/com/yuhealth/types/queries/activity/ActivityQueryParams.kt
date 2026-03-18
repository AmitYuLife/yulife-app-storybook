import android.util.Log
import com.facebook.react.bridge.ReadableMap
import com.yuhealth.types.queries.QueryOptions
import org.joda.time.DateTime

data class ActivityQueryParams(
  val startTime: DateTime,
  val endTime: DateTime,
  val queryOptions: QueryOptions
) {
  companion object {
    fun fromRequest(params: ReadableMap?): ActivityQueryParams? {
      try {
        val startTime = params?.getString("startTime")
        val endTime = params?.getString("endTime")
        val options = params?.getMap("queryOptions")

        val startDateTime = DateTime(startTime)
        val endDateTime = DateTime(endTime)
        val parsedQueryOptions = QueryOptions.toQueryOptions(options)
        
        return ActivityQueryParams(
          startDateTime,
          endDateTime,
          parsedQueryOptions,
        )
      } catch (e: Exception) {
        Log.e("YuHealthModule", "Error parsing activityQuery request", e)
        return null
      }
    }
  }
}
