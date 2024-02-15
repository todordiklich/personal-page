import './SkillsItem.css';

type SkillsItemProps = {
  skill: string;
};

export default function SkillsItem({ skill }: SkillsItemProps) {
  return <li className="skills-item">{skill}</li>;
}
