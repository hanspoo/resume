import { Educations } from './sections/Educations';
import { Experiences } from './sections/Experiences';
import { Idioms } from './sections/Idioms';
import { Objective } from './sections/Objective';
import { Photo } from './Photo';
import { Skills } from './sections/Skills';
import { Resume } from '@cv-ats/models-types';
interface ContainerSeccions {
  resume: Resume;
}

export function ContainerSeccions({ resume }: ContainerSeccions) {
  return (
    <div className="grid grid-flow-col gap-3">
      <div className="col-span-1">
        <Photo />
        <Objective objective={`${resume.objective}`} />
        <Skills />
        <Idioms />
      </div>
      <div className="col-span-4">
        <Experiences />
        <Educations />
      </div>
    </div>
  );
}
