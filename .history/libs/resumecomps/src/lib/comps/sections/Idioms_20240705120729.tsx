import { SectionSecondary } from '../utils/SectionSecondary';
import { Idiom } from '@free-resume/models-types';

interface IdiomsProps {
  idioms: Idiom[];
}
export function Idioms({ idioms }: IdiomsProps) {
  return (
    <SectionSecondary title="Idioms">
      <ul>
        {idioms.map((idiom: Idiom) => (
          <Idiom idiom={idiom} />
        ))}
      </ul>
    </SectionSecondary>
  );
}

function Idiom({ idiom }: { idiom: Idiom }) {
  return (
    <div>
      <div>
        {idiom.language}, {idiom.level}
      </div>
      <div>{idiom.studies}</div>
    </div>
  );
}
