package com.yuhealth.types.permissions

enum class PermissionStatus(val status: String) {
  GRANTED("GRANTED"),
  DENIED("DENIED"),
  NOT_ASKED("NOT_ASKED"),
  UNSUPPORTED("UNSUPPORTED")
}
