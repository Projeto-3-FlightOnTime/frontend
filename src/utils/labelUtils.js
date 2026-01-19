export function getLabel(options, value) {
  const option = options.find((opt) => opt.value === value);
  if (!option) return value || "-";
  return `${option.value} - ${option.label}`;
}
