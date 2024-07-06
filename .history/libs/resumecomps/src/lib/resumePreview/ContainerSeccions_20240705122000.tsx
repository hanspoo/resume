import { useSelector } from 'react-redux';
import { RootState, updateContactInfo } from '@free-resume/redux-store';

import { Education } from '@free-resume/models-types';

import { Educations } from '../comps/sections/Educations';
import { Experiences } from '../comps/sections/Experiences';
import { Idioms } from '../comps/sections/Idioms';
import { Objective } from '../comps/sections/Objective';
import { Photo } from '../comps/Photo';
import { Skills } from '../comps/sections/Skills';

export function ContainerSeccions() {
  const { educations } = useSelector((state: RootState) => state.resume);
  if (!educations) return <p>Resume not defined</p>;
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
        <Educations educations={education} />
      </div>
    </div>
  );
}