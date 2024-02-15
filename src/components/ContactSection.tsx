import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { InViewelEmentType } from '../App';
import { intersectionObserverOptions } from '../utils/intersectionObserverOptions';

import './ContactSection.css';

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
      <h1 className="section-title">Contact.</h1>
      <div className="contact-container">
        <div className="contact-image"></div>
        <h3 className="contact-name">Todor Diklich</h3>
        <div className="contact-data-wrapper">
          <span className="contact-email-img icon" />
          <a className="contact-link" href="mailto:todordiklich@gmail.com">
            todordiklich@gmail.com
          </a>
        </div>
        <div className="contact-data-wrapper">
          <span className="contact-phone-img icon" />
          <a className="contact-link" href="tel:+359877907422">
            +359 877 907 422
          </a>
        </div>
        <div className="contact-data-wrapper">
          <span className="contact-location-img icon" />
          <a
            className="contact-link"
            target="_blank"
            href="https://www.google.com/maps/place/Gabrovo/@42.8778184,25.28281,12.25z/data=!4m6!3m5!1s0x40a90fe2d6958745:0x400a01269bf5010!8m2!3d42.8742212!4d25.3186837!16zL20vMDNqZm1w?entry=ttu"
          >
            5300 Gabrovo, Bulgaria
          </a>
        </div>
        <p className="contact-container-summary">
          Thanks for visiting! You can contact me via{' '}
          <a
            className="contact-container-summary-link"
            href="https://www.linkedin.com/in/todor-diklich-bb5999121/"
            target="_blank"
          >
            LinkedIn
          </a>{' '}
          or check my{' '}
          <a
            className="contact-container-summary-link"
            href="https://github.com/todordiklich?tab=repositories"
            target="_blank"
          >
            GitHub
          </a>{' '}
          profile.
        </p>
      </div>
    </div>
  );
}
