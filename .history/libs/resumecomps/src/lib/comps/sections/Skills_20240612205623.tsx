import { useSelector } from 'react-redux';

import { SectionSecondary } from '../utils/SectionSecondary';
import { RootState } from '@free-resume/redux-store';
import { Skill } from '@free-resume/models-types';

export function Skills() {
  const { skills } = useSelector((state: RootState) => state.resume);
  if (!skills) return <p>Resume not defined</p>;
  return (
    <SectionSecondary title="Skills">
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill) => (
          <SkillModule skill={skill} />
        ))}
      </div>
    </SectionSecondary>
  );
}

function SkillModule({ skill }: { skill: Skill }) {
  return (
    <>
      <div>{skill.skill}</div> <div className="text-right">{skill.level}</div>
    </>
  );
}
