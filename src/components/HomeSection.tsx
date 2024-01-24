import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { InViewelEmentType } from '../App';
import { intersectionObserverOptions } from '../utils/intersectionObserverOptions';

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
      <h1 className="title">
        Hi, <br /> I am Todor Diklich, <br /> web developer
      </h1>
      <p>Front End Developer</p>
      Optio, ipsa! Consectetur voluptas, ipsam, delectus nemo non ut molestias
      neque perspiciatis quidem molestiae nobis eum nam sapiente tempora autem
      laborum veritatis dolorem! Quos suscipit eos minus cupiditate quam? Odio
      corrupti nihil voluptate nesciunt impedit ipsam eius possimus. Lorem ipsum
      dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
      dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
      montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
      pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
      pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
      justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
      felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
      elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
      ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
      ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
      ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies
      nisi vel augue. Curabitur ullamcorper ultricies nisi.
    </div>
  );
}
