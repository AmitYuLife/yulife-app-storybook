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
}
