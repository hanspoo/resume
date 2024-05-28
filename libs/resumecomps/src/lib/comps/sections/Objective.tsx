import { useSelector } from 'react-redux';

import { SectionSecondary } from '../utils/SectionSecondary';
import { RootState } from '@free-resume/redux-store';

export function Objective() {
  const { resume } = useSelector((state: RootState) => state.counter);
  if (!resume) return <p>Resume not defined</p>;
  return (
    <SectionSecondary title="Objective">
      <div>
        {resume.objective.split('. ').map((s) => (
          <p className="mb-2">{s}.</p>
        ))}
      </div>
    </SectionSecondary>
  );
}
