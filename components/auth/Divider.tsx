interface DividerProps {
  text?: string;
}

export default function Divider({
  text = "or continue with",
}: DividerProps) {
  return (
    <div className="relative my-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-border" />
      </div>

      <div className="relative flex justify-center">
        <span className="bg-background px-4 text-sm text-muted-foreground">
          {text}
        </span>
      </div>
    </div>
  );
}