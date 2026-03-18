package com.yuhealth

import ActivityQueryParams
import SampleQueryParams
import SampleQueryResponse
import com.yuhealth.types.HealthProviderAvailabilityStatus
import com.yuhealth.types.HealthProviderCapabilities
import com.yuhealth.types.permissions.Permission
import com.yuhealth.types.permissions.PermissionStatus
import com.yuhealth.types.queries.activity.ActivityQueryResponse
import com.yuhealth.types.queries.aggregate.AggregateQueryParams
import com.yuhealth.types.queries.aggregate.AggregateQueryResponse

interface HealthProvider {

  val providerName: String
  val capabilities: Array<HealthProviderCapabilities>
  val supportsDisconnect: Boolean

  suspend fun getAvailabilityStatus(): HealthProviderAvailabilityStatus

  suspend fun hasPermissions(capabilities: List<HealthProviderCapabilities>): Map<HealthProviderCapabilities, PermissionStatus>

  suspend fun checkCapabilityPermission(capabilities: List<HealthProviderCapabilities>): List<Permission>

  // TODO: should return something like { status: "granted" | "denied" | "unknown" } instead of boolean
  suspend fun requestPermissions(capabilities: List<HealthProviderCapabilities>): Boolean

  suspend fun aggregateQuery(request: AggregateQueryParams): List<AggregateQueryResponse>

  suspend fun sampleQuery(request: SampleQueryParams): List<SampleQueryResponse>

  suspend fun activityQuery(request: ActivityQueryParams): List<ActivityQueryResponse>

  suspend fun disconnect(): Boolean
}
