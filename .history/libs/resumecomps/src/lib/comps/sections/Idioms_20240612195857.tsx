import { useSelector } from 'react-redux';
import { RootState } from '@free-resume/redux-store';
import { SectionSecondary } from '../utils/SectionSecondary';

export function Idioms() {
  const { idioms } = useSelector((state: RootState) => state.resume);
  if (!idioms) return <p>Resume not defined</p>;
  return (
    <SectionSecondary title="Idioms">
      <ul>
        {idioms.map((idiom) => (
          <IdiomModule idiom={idiom} />
        ))}
      </ul>
    </SectionSecondary>
  );
}

function IdiomModule({ idiom }: { idiom: Idiom }) {
  return (
    <div>
      <div>
        {idiom.language}, {idiom.level}
      </div>
      <div>{idiom.studies}</div>
    </div>
  );
}
