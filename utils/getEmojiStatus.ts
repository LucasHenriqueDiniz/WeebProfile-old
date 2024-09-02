export default function getEmojiStatus(status: string) {
  switch (status.toLowerCase()) {
    case "completed":
      return "☑️";
    case "watching":
      return "📺";
    case "reading":
      return "📖";
    case "dropped":
      return "❌";
    case "on_hold":
      return "⏸️";
    case "plan_to_watch":
      return "📅";
    default:
      return "▶️";
  }
}
