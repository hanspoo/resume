import { useSelector } from 'react-redux';
import { RootState } from '../../redux/app/store';
import { SectionSecondary } from '../utils/SectionSecondary';

export function Objective() {
  const { resume } = useSelector((state: RootState) => state.counter);
  if (!resume) return <p>Resume not defined</p>;
  return (
    <SectionSecondary title="Objective">
      <div>
        {resume.objective.split('. ').map((s: string) => (
          <p className="mb-2">{s}.</p>
        ))}
      </div>
    </SectionSecondary>
  );
}
