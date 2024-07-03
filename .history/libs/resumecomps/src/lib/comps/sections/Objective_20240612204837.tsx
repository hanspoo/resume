import { useSelector } from 'react-redux';

import { SectionSecondary } from '../utils/SectionSecondary';
import { RootState } from '@free-resume/redux-store';

export function Objective() {
  const { objective } = useSelector((state: RootState) => state.resume);
  if (!objective) return <p>Resume not defined</p>;
  return (
    <SectionSecondary title="Objective">
      <div>
        {objective.split('. ').map((s) => (
          <p className="mb-2">{s}.</p>
        ))}
      </div>
    </SectionSecondary>
  );
}
