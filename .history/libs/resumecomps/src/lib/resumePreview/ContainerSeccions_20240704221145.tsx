import { Educations } from '../comps/sections/Educations';
import { Experiences } from '../comps/sections/Experiences';
import { Idioms } from '../comps/sections/Idioms';
import { Objective } from '../comps/sections/Objective';
import { Photo } from '../comps/Photo';
import { Skills } from '../comps/sections/Skills';
import { Resume } from '@free-resume/models-types';

export function ContainerSeccions() {
  return (
    <div className="grid grid-flow-col gap-3">
      <div className="col-span-1">
        <Photo />
        <Objective />
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
