import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import WorkItemList from './WorkItemList';

import { InViewelEmentType } from '../App';
import { intersectionObserverOptions } from '../utils/intersectionObserverOptions';

type WorkSectionProps = {
  setInViewElemnt: (inViewElement: InViewelEmentType) => void;
};

export default function WorkSection({ setInViewElemnt }: WorkSectionProps) {
  const { ref, inView } = useInView(intersectionObserverOptions);

  useEffect(() => {
    if (inView) {
      setInViewElemnt('work');
    }
  }, [inView, setInViewElemnt]);

  return (
    <div ref={ref} id="work" className="section">
      <h1 className="section-title">Work.</h1>
      <WorkItemList />
    </div>
  );
}
