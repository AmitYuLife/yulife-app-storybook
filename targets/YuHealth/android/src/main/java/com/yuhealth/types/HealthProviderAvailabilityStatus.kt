package com.yuhealth.types

enum class HealthProviderAvailabilityStatus(val status: String) {
  AVAILABLE("AVAILABLE"),
  UPDATE_REQUIRED("UPDATE_REQUIRED"),
  NOT_AVAILABLE("NOT_AVAILABLE");
}
