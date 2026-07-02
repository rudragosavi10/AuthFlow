interface DividerProps {
  text?: string;
}

export default function Divider({
  text = "or continue with",
}: DividerProps) {
  return (
    <div className="relative my-8 flex items-center">

      <div className="flex-1 border-t border-slate-200" />

      <span
        className="
          mx-4
          rounded-full
          bg-white
          px-3
          text-sm
          font-medium
          text-slate-500
        "
      >
        {text}
      </span>

      <div className="flex-1 border-t border-slate-200" />

    </div>
  );
}