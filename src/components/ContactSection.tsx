import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { InViewelEmentType } from '../App';
import { intersectionObserverOptions } from '../utils/intersectionObserverOptions';

type ContactSectionProps = {
  setInViewElemnt: (inViewElement: InViewelEmentType) => void;
};

export default function ContactSection({
  setInViewElemnt,
}: ContactSectionProps) {
  const { ref, inView } = useInView(intersectionObserverOptions);

  useEffect(() => {
    if (inView) {
      setInViewElemnt('contact');
    }
  }, [inView, setInViewElemnt]);

  return (
    <div ref={ref} id="contact" className="section">
      <h1 className="title">Contact</h1>
      Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales,
      augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate
      eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed,
      nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu
      turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci
      luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer
      lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
      imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.
      Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.
      Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy
      metus. Vestibulum volutpat pretium libero. Cras id dui. Lorem ipsum dolor
      sit amet consectetur, adipisicing elit. Consequatur cum nisi magni qui
      saepe sapiente consequuntur, velit molestiae repudiandae omnis eligendi,
      ipsa quod? Ut quisquam cum consequatur asperiores explicabo, id doloremque
      libero possimus earum, officiis cupiditate vel quia nulla mollitia velit
      corrupti obcaecati saepe? Animi rem, laboriosam id consequatur eligendi
      perferendis. Illo repellendus officia atque laborum? Cumque est iusto,
      unde maxime molestias eius dignissimos tempora, officiis modi et, odio
      esse pariatur exercitationem? Enim reiciendis omnis id doloremque rerum
      placeat, voluptas in distinctio quibusdam! Debitis eligendi, ratione
      possimus consectetur eveniet doloremque illum maxime velit non. Cumque
      officia aperiam non nam reprehenderit.
    </div>
  );
}
