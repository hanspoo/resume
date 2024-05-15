export const Tools = ({ tools }: { tools: string[] }) => {
  if (tools && tools.length > 0) {
    return (
      <div>
        {tools.map((t, i) => (
          <span className="mr-1">
            <span>{t}</span>
            {i === tools.length ? "" : ","}
          </span>
        ))}
      </div>
    );
  }
  return null;
};
