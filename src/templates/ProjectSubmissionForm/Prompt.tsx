export default function Prompt(props: { text?: string }) {
  if (!props.text) return null;
  return <div className="text-sm mb-2">{props.text}</div>;
}
