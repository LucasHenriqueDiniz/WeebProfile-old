export default function toBoolean(value: string | undefined): boolean {
  return value === "true" || value === "TRUE" || value === "True";
}
