import { useSelector } from 'react-redux';
import { RootState, updateContactInfo } from '@free-resume/redux-store';

import { Educations } from '../comps/sections/Educations';
import { Experiences } from '../comps/sections/Experiences';
import { Idioms } from '../comps/sections/Idioms';
import { Objective } from '../comps/sections/Objective';
import { Photo } from '../comps/Photo';
import { Skills } from '../comps/sections/Skills';
import { Header } from '../comps/Header';

export function ContainerSeccions() {
  const { educations, experiences, idioms, summary, objective, contactInfo } =
    useSelector((state: RootState) => state.resume);
  //if (!educations) return <p>Resume not defined</p>;
  return (
    <div className="bg-white p-4 m-4 text-blue-950 border-2 max-w-screen-lg">
      <Header contactInfo={contactInfo} />
      <div className="grid grid-flow-col gap-3">
        <div className="col-span-1">
          <Photo />
          <Objective objective={objective} />
          <Skills skills={summary.competencies} />
          <Idioms idioms={idioms} />
        </div>
        <div className="col-span-4">
          <Experiences experiences={experiences} />
          <Educations educations={educations} />
        </div>
      </div>
    </div>
  );
}
