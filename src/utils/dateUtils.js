export function toOffsetISOString(localDateTime) {
  const date = new Date(localDateTime);

  const pad = (n) => String(Math.floor(Math.abs(n))).padStart(2, "0");

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
    ":00Z"
  );
}
