/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DayWeek {
  Monday = "working",
  Tuesday = "working",
  Wednesday = "working",
  Thursday = "working",
  Friday = "working",
  Saturday = "weekend",
  Sunday = "weekend",
}

function isWeekend(day: DayWeek): boolean {
  switch (day) {
    case DayWeek.Saturday:
    case DayWeek.Sunday:
      return true;
    default:
      return false;
  }
}
