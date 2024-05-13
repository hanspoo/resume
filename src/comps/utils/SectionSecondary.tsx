export function SectionSecondary({
  title,
  children,
}: {
  title: string;
  children: string | JSX.Element;
}) {
  return (
    <div className="mt-5 text-xs">
      <h1 className="text-1xl font-bold mb-3">{title}</h1>
      <div>{children}</div>
    </div>
  );
}
