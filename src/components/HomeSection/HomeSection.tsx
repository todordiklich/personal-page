import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { InViewelEmentType } from '../../App';
import { intersectionObserverOptions } from '../../utils/intersectionObserverOptions';

import './HomeSection.css';

type HomeSectionProps = {
  setInViewElemnt: (inViewElement: InViewelEmentType) => void;
};

export default function HomeSection({ setInViewElemnt }: HomeSectionProps) {
  const { ref, inView } = useInView(intersectionObserverOptions);

  useEffect(() => {
    if (inView) {
      setInViewElemnt('home');
    }
  }, [inView, setInViewElemnt]);

  return (
    <div ref={ref} id="home" className="section">
      <span className="html-tag">&lt;body&gt;</span>
      <h1 className="home-title">
        <span className="html-tag">&lt;h1&gt;</span>Hi, <br /> I am{' '}
        <span className="home-title-name">Todor Diklich</span>
        , <br /> web developer
        <span className="html-tag">&lt;&#47;h1&gt;</span>
      </h1>
      <p className="home-description">
        <span className="html-tag">&lt;p&gt;</span>
        <span className="home-description-text">Front End Developer</span>
        <span className="html-tag">&lt;&#47;p&gt;</span>
      </p>
      <a className="btn contact" href="#contact">
        Contact me!
      </a>

      <span className="home-footer left">scroll down &rarr;</span>
      <span className="home-footer right">scroll down &rarr;</span>
    </div>
  );
}
