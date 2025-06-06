import React from 'react';
import useDelayedValue from '../hook/useDelayedValue';

interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

type SkillState = {
  skill: Skill;
};

const SkillCard: React.FC<SkillState> = React.memo(({ skill }) => {
  const percentage = useDelayedValue(skill.percentage, 100)

  return (
    <section className="w-full max-w-xs h-fit bg-transparent rounded-xl p-6 flex flex-row items-center justify-center gap-2">
      <img src={skill.icon} alt={skill.name} className="max-w-10 max-h-10 bg-white p-2 rounded-md" />
      <div className='flex flex-col w-full'>
        <div className='flex item-center justify-between mb-2'>
          <h2 className="text-sm font-bold text-[#27548A]">{skill.name}</h2>
          <p className="text-sm font-medium text-white">
            {skill.percentage}%
          </p>
        </div>
        <div
          className="w-full h-2 rounded-full bg-secondary transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </section>
  );
});

export default SkillCard;
