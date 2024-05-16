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
        <Photo url="https://avatars.githubusercontent.com/u/673907?v=4" />
        <Objective objective={resume.objective} />
        <Skills skills={resume.skills} />
        <Idioms idioms={resume.idioms} />
      </div>
      <div className="col-span-4">
        <Experiences experiences={resume.experiences} />
        <Educations educations={resume.educations} />
      </div>
    </div>
  );
}
