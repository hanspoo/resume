export function Project({
  project: { name, description, tools },
}: {
  project: Project;
}) {
  return (
    <div className="mb-2">
      <div>{name}</div>
      <div className="mb-1">{description}</div>
      <div>
        {tools.map((t, i) => (
          <span className="mr-1">
            <span>{t}</span>
            {i === tools.length ? "" : ","}
          </span>
        ))}
      </div>
    </div>
  );
}
