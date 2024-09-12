export default function toBoolean(value: string | undefined): boolean {
  if (!value) return false;

  return value?.toLocaleLowerCase().trim() === "true";
}
