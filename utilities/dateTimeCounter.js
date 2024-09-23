import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import utc from "dayjs/plugin/utc";

dayjs.extend(duration);
dayjs.extend(utc);

export function dateTimeCounter(startDate) {
  const start = dayjs(startDate).utc();
  const now = dayjs().utc();

  const years = now.diff(start, "year");
  const months = now.diff(start.add(years, "year"), "month");
  const days = now.diff(start.add(years, "year").add(months, "month"), "day");
  const hours = now.diff(
    start.add(years, "year").add(months, "month").add(days, "day"),
    "hour"
  );
  const minutes = now.diff(
    start
      .add(years, "year")
      .add(months, "month")
      .add(days, "day")
      .add(hours, "hour"),
    "minute"
  );
  const seconds = now.diff(
    start
      .add(years, "year")
      .add(months, "month")
      .add(days, "day")
      .add(hours, "hour")
      .add(minutes, "minute"),
    "second"
  );

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
  };
}
