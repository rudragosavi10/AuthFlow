interface AuthHeaderProps {
  title: string;
  description: string;
}

export default function AuthHeader({
  title,
  description,
}: AuthHeaderProps) {
  return (
    <div className="mb-7 text-center">
      {/* Badge */}
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-semibold tracking-[0.15em] text-indigo-700 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-indigo-500" />
        AUTHFLOW
      </div>

      {/* Heading */}
      <h1 className="text-[2.45rem] font-black leading-tight tracking-tight text-slate-900">
        {title}
      </h1>

      {/* Description */}
      <p className="mx-auto mt-3 max-w-sm text-[15px] leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}