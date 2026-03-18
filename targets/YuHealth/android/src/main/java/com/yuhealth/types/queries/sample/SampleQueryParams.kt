import android.util.Log
import com.facebook.react.bridge.ReadableMap
import com.yuhealth.types.queries.HealthDataType
import com.yuhealth.types.queries.QueryOptions
import org.joda.time.DateTime

class SampleQueryParams(
  val startTime: DateTime,
  val endTime: DateTime,
  val dataType: HealthDataType,
  val queryOptions: QueryOptions
) {

  companion object {
    fun fromRequest(params: ReadableMap?): SampleQueryParams? {
      try {
        val startTime = params?.getString("startTime")
        val endTime = params?.getString("endTime")
        val dataType = params?.getString("dataType")
        val options = params?.getMap("queryOptions")

        val parsedDataType = HealthDataType.translateDataType(dataType!!)
        val parsedQueryOptions = QueryOptions.toQueryOptions(options)
        val startDateTime = DateTime(startTime)
        val endDateTime = DateTime(endTime)

        return SampleQueryParams(
          startDateTime,
          endDateTime,
          parsedDataType!!,
          parsedQueryOptions
        )
      } catch (e: Exception) {
        Log.e("YuHealthModule", "Error parsing sampleQuery request", e)
        return null
      }
    }
  }
}
