export function toOffsetISOString(localDateTime) {
  const date = new Date(localDateTime);

  const offsetMinutes = -date.getTimezoneOffset();
  const sign = offsetMinutes >= 0 ? "+" : "-";
  const pad = (n) => String(Math.floor(Math.abs(n))).padStart(2, "0");

  const hours = pad(offsetMinutes / 60);
  const minutes = pad(offsetMinutes % 60);

  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate()) +
    "T" +
    pad(date.getHours()) +
    ":" +
    pad(date.getMinutes()) +
    ":00" +
    sign +
    hours +
    ":" +
    minutes
  );
}
