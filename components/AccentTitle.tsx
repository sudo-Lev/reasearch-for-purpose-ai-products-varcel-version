export function AccentTitle({
  children,
  tone = "light",
  className = ""
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span className={`headline-mark ${className}`} data-tone={tone}>
      {children}
    </span>
  );
}
