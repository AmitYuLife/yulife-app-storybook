package com.yuhealth.yuhealth.providers.googleFitProvider

import ActivityQueryParams
import SampleQueryParams
import SampleQueryResponse
import android.app.Activity
import android.util.Log
import com.facebook.react.bridge.ReactContext
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInOptions
import com.google.android.gms.common.ConnectionResult
import com.google.android.gms.common.GoogleApiAvailability
import com.google.android.gms.fitness.Fitness
import com.google.android.gms.fitness.FitnessOptions
import com.yuhealth.HealthProvider
import com.yuhealth.events.LogEvent
import com.yuhealth.logger.NativeLogger
import com.yuhealth.providers.googleFitProvider.GoogleFitCapability
import com.yuhealth.providers.googleFitProvider.GoogleFitPermissionManager
import com.yuhealth.providers.googleFitProvider.queries.GoogleFitActivityQuery
import com.yuhealth.providers.googleFitProvider.queries.GoogleFitAggregateQuery
import com.yuhealth.providers.googleFitProvider.queries.GoogleFitSampleQuery
import com.yuhealth.types.HealthProviderAvailabilityStatus
import com.yuhealth.types.HealthProviderCapabilities
import com.yuhealth.types.permissions.Permission
import com.yuhealth.types.permissions.PermissionStatus
import com.yuhealth.types.queries.activity.ActivityQueryResponse
import com.yuhealth.types.queries.aggregate.AggregateQueryParams
import com.yuhealth.types.queries.aggregate.AggregateQueryResponse
import kotlin.coroutines.resume
import kotlin.coroutines.suspendCoroutine

class GoogleFitProvider(val context: ReactContext) : HealthProvider {
  override val providerName: String = "GoogleFit"
  override val supportsDisconnect: Boolean = true;

  override val capabilities: Array<HealthProviderCapabilities> = arrayOf(
    HealthProviderCapabilities.STEP_COUNT,
    HealthProviderCapabilities.MINDFUL_MINUTES,
    HealthProviderCapabilities.CYCLING_DISTANCE,
    HealthProviderCapabilities.CALORIES,
    HealthProviderCapabilities.ACTIVITIES,
    HealthProviderCapabilities.HEART_RATE,
    HealthProviderCapabilities.WORKOUT_MINUTES,
  )

  private val googleFitPermissionManager = GoogleFitPermissionManager(context)
  private val sampleQuery = GoogleFitSampleQuery(googleFitPermissionManager, this)
  private val aggregateQuery = GoogleFitAggregateQuery(googleFitPermissionManager, this)
  val activityQuery = GoogleFitActivityQuery(googleFitPermissionManager, this)

  override suspend fun getAvailabilityStatus(): HealthProviderAvailabilityStatus {
    val apiAvailability = GoogleApiAvailability.getInstance()
    val resultCode = apiAvailability.isGooglePlayServicesAvailable(context)

    if (resultCode == ConnectionResult.SUCCESS) {
      return HealthProviderAvailabilityStatus.AVAILABLE
    }

    if (apiAvailability.isUserResolvableError(resultCode)) {
      return HealthProviderAvailabilityStatus.UPDATE_REQUIRED
    }

    return HealthProviderAvailabilityStatus.NOT_AVAILABLE
  }

  override suspend fun hasPermissions(capabilities: List<HealthProviderCapabilities>): Map<HealthProviderCapabilities, PermissionStatus> {
    val responseMap = mutableMapOf<HealthProviderCapabilities, PermissionStatus>()

    for (capability in capabilities) {
      if(googleFitPermissionManager.getAccount() == null) {
        // If we are not logged in we don't have the permissions
        responseMap[capability] = PermissionStatus.NOT_ASKED
      }

      val options = FitnessOptions.builder()
      val permissions = GoogleFitCapability.translateCapabilityToPermission(capability)
      for (permission in permissions) {
        options.addDataType(permission, FitnessOptions.ACCESS_READ)
      }
      val granted = googleFitPermissionManager.hasPermissions(options.build())

      // We can continue asking for permissions indefinitely, so we never need to be denied
      responseMap[capability] =
        if (granted) PermissionStatus.GRANTED else PermissionStatus.NOT_ASKED
    }

    return responseMap.toMap()
  }

  override suspend fun checkCapabilityPermission(capabilities: List<HealthProviderCapabilities>): List<Permission> {
    val response = mutableListOf<Permission>()

    val capabilitiesPermissions = hasPermissions(capabilities)

    for (capabilityPermission in capabilitiesPermissions) {
      val capability = capabilityPermission.key
      HealthProviderCapabilities.translateToPermissionIdentifier(capability)?.let {
        response.add(Permission(it, capabilityPermission.value, capability))
      }
    }

    return response
  }

  private fun getFitnessSignInOptions(capabilities: List<HealthProviderCapabilities>): FitnessOptions {
    val options = FitnessOptions.builder()

    val permissions = GoogleFitCapability.getPermissionsFromCapabilities(capabilities)
    for (permission in permissions) {
      options.addDataType(permission, FitnessOptions.ACCESS_READ)
    }

    return options.build()
  }

  override suspend fun requestPermissions(capabilities: List<HealthProviderCapabilities>): Boolean {
    return suspendCoroutine { continuation ->
      run {
        googleFitPermissionManager.requestPermissions(
          context.currentActivity!!,
          getFitnessSignInOptions(capabilities),
          object : GoogleFitPermissionManager.ResultListener {
            override fun onResult(resultCode: Int) {
              if (resultCode == Activity.RESULT_OK) {
                continuation.resume(true)
              } else {
                continuation.resume(false)
              }
            }
          }
        )
      }
    }
  }

  override suspend fun aggregateQuery(request: AggregateQueryParams): List<AggregateQueryResponse> {
    return aggregateQuery.performQuery(request)
  }

  override suspend fun sampleQuery(request: SampleQueryParams): List<SampleQueryResponse> {
    return sampleQuery.performQuery(request)
  }

  override suspend fun activityQuery(request: ActivityQueryParams): List<ActivityQueryResponse> {
    return activityQuery.performQuery(request)
  }

  override suspend fun disconnect(): Boolean {
    return suspendCoroutine { continuation ->
      run {
        val account = googleFitPermissionManager.getAccount()

        if (account == null) {
          NativeLogger.getInstance()
            ?.emitNativeEvent(LogEvent("Google fit provider disconnect failed: google account not found"))
          continuation.resume(false);
        }

     

        if (account != null) {
          val fitnessOptions = FitnessOptions.builder()
            .build()
          
          Fitness.getConfigClient(context, account)
            .disableFit()
            .continueWithTask {
              NativeLogger.getInstance()
                ?.emitNativeEvent(LogEvent("Google fit provider disconnected success"))
              val signInOptions = GoogleSignInOptions.Builder()
                .addExtension(fitnessOptions)
                .build()

              // https://github.com/android/fit-samples/issues/28#issuecomment-557865949
              GoogleSignIn.getClient(context, signInOptions)
                .revokeAccess()
            }
            .addOnFailureListener { e ->
              NativeLogger.getInstance()
                ?.emitNativeEvent(LogEvent("Google fit provider disconnected failed: ${e.message}"))

              // We will always land here (addOnFailureListener)
              // We need to make a query that fails for it to recognise that it is now signed out, which fails
              continuation.resume(true)
            }
        }

        googleFitPermissionManager.clearAccount()
      }
    }
  }
}
