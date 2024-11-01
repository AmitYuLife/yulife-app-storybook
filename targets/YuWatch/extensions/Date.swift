extension Date {
  static var startOfToday: Date {
    return Calendar.current.startOfDay(for: Date())
  }
  
  static var endOfToday: Date {
    let startOfToday = Date.startOfToday
    let endOfToday = Calendar.current.date(byAdding: .day, value: 1, to: startOfToday)!
    return endOfToday
  }
  
  var iso8601String: String {
    let formatter = ISO8601DateFormatter()
    formatter.formatOptions = [.withInternetDateTime, .withFractionalSeconds]
    return formatter.string(from: self)
  }

  var dateFormatWithTz: String {
    let formatter = DateFormatter()
    formatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ssZZZZZ"
    // Keep en_US_POSIX for consistent fixed formatting of the date
    formatter.locale = Locale(identifier: "en_US_POSIX")
    formatter.timeZone = TimeZone.current
    return formatter.string(from: self)
  }
}
