import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { InViewelEmentType } from '../../App';
import { intersectionObserverOptions } from '../../utils/intersectionObserverOptions';

import './AboutSection.css';

type AboutSectionProps = {
  setInViewElemnt: (inViewElement: InViewelEmentType) => void;
};

export default function AboutSection({ setInViewElemnt }: AboutSectionProps) {
  const { ref, inView } = useInView(intersectionObserverOptions);

  useEffect(() => {
    if (inView) {
      setInViewElemnt('about');
    }
  }, [inView, setInViewElemnt]);

  return (
    <div ref={ref} id="about" className="section">
      <div className="about-content">
        <div className="about-content-left">
          <h1 className="section-title">About.</h1>
          <p className="about-description">
            I have over five years of work experience in various roles related
            to engineering, production, and software development. My core
            competencies are in technical support, JavaScript, HTML, CSS,
            TypeScript, React, SQL database, and process optimization. I am
            passionate about solving complex problems, creating custom
            solutions, and delivering high-quality results.
            <br />
            <br />I am a friendly and supportive person with good communication
            skills and constant willingness to learn.
          </p>
        </div>
        <div className="about-content-right"></div>
      </div>
    </div>
  );
}
