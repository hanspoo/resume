import { useSelector } from 'react-redux';

import { SectionSecondary } from '../utils/SectionSecondary';
import { RootState } from '@free-resume/redux-store';

export function Skills() {
  const { resume } = useSelector((state: RootState) => state.counter);
  if (!resume) return <p>Resume not defined</p>;
  return (
    <SectionSecondary title="Skills">
      <div className="grid grid-cols-2 gap-2">
        {resume.skills.map((skill) => (
          <Skill skill={skill} />
        ))}
      </div>
    </SectionSecondary>
  );
}

function Skill({ skill }: { skill: Skill }) {
  return (
    <>
      <div>{skill.skill}</div> <div className="text-right">{skill.level}</div>
    </>
  );
}
