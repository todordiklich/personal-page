import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import SkillsItemList from './SkillsItemList';
import CetificationsItemList from './CertificationsItemList';

import { InViewelEmentType } from '../../App';
import { intersectionObserverOptions } from '../../utils/intersectionObserverOptions';

import './SkillsSection.css';

type SkillsSectionProps = {
  setInViewElemnt: (inViewElement: InViewelEmentType) => void;
};

export default function SkillsSection({ setInViewElemnt }: SkillsSectionProps) {
  const { ref, inView } = useInView(intersectionObserverOptions);

  useEffect(() => {
    if (inView) {
      setInViewElemnt('skills');
    }
  }, [inView, setInViewElemnt]);

  return (
    <div ref={ref} id="skills" className="section">
      <h1 className="section-title">Skills.</h1>
      <div className="skills-content">
        <div className="skills-content-skills">
          <SkillsItemList />
        </div>
        <div className="skills-content-certificates">
          <h1 className="certificates">Licenses & certifications</h1>
          <CetificationsItemList />
        </div>
      </div>
    </div>
  );
}
