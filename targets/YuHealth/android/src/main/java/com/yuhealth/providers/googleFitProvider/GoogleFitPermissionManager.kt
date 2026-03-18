package com.yuhealth.providers.googleFitProvider

import android.app.Activity
import android.content.Intent
import com.facebook.react.bridge.ActivityEventListener
import com.facebook.react.bridge.ReactContext
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInAccount
import com.google.android.gms.fitness.FitnessOptions

class GoogleFitPermissionManager(private val reactContext: ReactContext) : ActivityEventListener {
  private var resultListener: ResultListener? = null
  private var account: GoogleSignInAccount? = null
  private var hasInitializedAccount: Boolean = false;
  private var isGoogleFitWaiting: Boolean = false

  init {
    reactContext.addActivityEventListener(this)
  }

  fun requestPermissions(
    activity: Activity,
    fitnessOptions: FitnessOptions,
    listener: ResultListener
  ) {
    resultListener = listener

    if (!GoogleSignIn.hasPermissions(getAccount(), fitnessOptions)) {
      isGoogleFitWaiting = true
      GoogleSignIn.requestPermissions(
        activity,
        REQUEST_OAUTH_REQUEST_CODE,
        account,
        fitnessOptions
      )
    } else {
      resultListener!!.onResult(Activity.RESULT_OK)
    }
  }

  fun hasPermissions(fitnessOptions: FitnessOptions): Boolean {
    return GoogleSignIn.hasPermissions(
      getAccount(),
      fitnessOptions
    )
  }

  fun getAccount(): GoogleSignInAccount? {
    if (account == null && !hasInitializedAccount) {
      account = GoogleSignIn.getLastSignedInAccount(reactContext)
      // Once manually disconnected we don't want to get the last signed in account again
      // If you login again, account will be set in onActivityResult
      hasInitializedAccount = true
    }

    return account
  }

  fun clearAccount() {
    account = null;
  }

  override fun onNewIntent(intent: Intent) {}

  override fun onActivityResult(
    activity: Activity,
    requestCode: Int,
    resultCode: Int,
    data: Intent?
  ) {
    if (!isGoogleFitWaiting) return
    isGoogleFitWaiting = false

    if (requestCode == REQUEST_OAUTH_REQUEST_CODE && data != null) {
      account = GoogleSignIn.getLastSignedInAccount(reactContext)
      if (resultListener != null) {
        resultListener!!.onResult(resultCode)
      }
    }
  }

  interface ResultListener {
    fun onResult(resultCode: Int)
  }


  companion object {
    private const val REQUEST_OAUTH_REQUEST_CODE = 100
  }
}
