import SkillsItem from './SkillsItem';

import './SkillsItemList.css';

import { skillsData } from '../utils/skills-data';

export default function SkillsItemList() {
  return (
    <>
      {skillsData.map((data) => {
        return (
          <div className="skills-category-content" key={data.category}>
            <h2 className="skills-category"> {data.category}</h2>
            <ul className="skills-item-list">
              {data.skills.map((skill) => (
                <SkillsItem key={skill} skill={skill} />
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
}
