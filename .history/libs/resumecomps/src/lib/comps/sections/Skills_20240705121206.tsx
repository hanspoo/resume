import { SectionSecondary } from '../utils/SectionSecondary';
import { Skill } from '@free-resume/models-types';

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <SectionSecondary title="Skills">
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill: Skill) => (
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
