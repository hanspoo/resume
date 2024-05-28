export function Section({
  title,
  children,
}: {
  title: string;
  children: string | JSX.Element;
}) {
  return (
    <div className="m-5">
      <h1 className="text-2xl font-bold mb-5">{title}</h1>
      <div>{children}</div>
    </div>
  );
}
