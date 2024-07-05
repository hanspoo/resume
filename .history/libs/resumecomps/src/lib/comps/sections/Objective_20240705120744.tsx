import { SectionSecondary } from '../utils/SectionSecondary';

interface ObjectiveProps {
  objective: string;
}
export function Objective({ objective }: ObjectiveProps) {
  return (
    <SectionSecondary title="Objective">
      <div>
        {objective.split('. ').map((s: string) => (
          <p className="mb-2">{s}.</p>
        ))}
      </div>
    </SectionSecondary>
  );
}
