import { isTodo, shouldShow } from "@/lib/content";

/**
 * Renders editable text. Real content renders normally; a "TODO:" placeholder
 * renders as a dashed reminder in development and nothing in production.
 */
export function Editable({
  text,
  as: Tag = "p",
  className = "",
}: {
  text?: string;
  as?: "p" | "span" | "li" | "dd";
  className?: string;
}) {
  if (!shouldShow(text)) return null;
  if (isTodo(text)) {
    return (
      <Tag
        className={`${className} rounded-md border border-dashed border-amber-400 bg-amber-50 px-2 py-1 font-mono text-[0.78rem] !text-amber-800`}
        title="Placeholder: hidden in production until you fill it in"
      >
        {text}
      </Tag>
    );
  }
  return <Tag className={className}>{text}</Tag>;
}
