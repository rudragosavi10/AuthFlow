interface AuthHeaderProps {
  title: string;
  description: string;
}

export default function AuthHeader({
  title,
  description,
}: AuthHeaderProps) {
  return (
    <div className="mb-8 space-y-2 text-center">
      <div className="inline-flex items-center justify-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
        AuthFlow
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h1>

      <p className="text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}