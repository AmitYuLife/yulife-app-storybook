package com.yuhealth.providers.googleFitProvider

class GoogleFitUtilities {
  companion object {
    fun isUserEntered(streamIdentifier: String): Boolean {
      return streamIdentifier.matches(Regex("(?i).*:user_input.*"))
    }
  }
}
