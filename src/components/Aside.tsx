import { InViewelEmentType } from '../App';

import './Aside.css';

type AsideProps = {
  inViewElement: InViewelEmentType;
};

export default function Aside({ inViewElement }: AsideProps) {
  return (
    <aside>
      <ul className="nav-container">
        <li className={`nav-li ${inViewElement === 'home' ? 'active' : null}`}>
          <a className="nav-a" id="anchor-home" href="#home">
            <span>Todor</span>
            <span>Front End Developer</span>
          </a>
        </li>
        <li className={`nav-li ${inViewElement === 'about' ? 'active' : null}`}>
          <a className="nav-a" id="anchor-about" href="#about">
            About
          </a>
        </li>
        <li
          className={`nav-li ${inViewElement === 'skills' ? 'active' : null}`}
        >
          <a className="nav-a" id="anchor-skills" href="#skills">
            Skills
          </a>
        </li>
        <li className={`nav-li ${inViewElement === 'work' ? 'active' : null}`}>
          <a className="nav-a" id="anchor-work" href="#work">
            Work
          </a>
        </li>
        <li
          className={`nav-li ${inViewElement === 'contact' ? 'active' : null}`}
        >
          <a className="nav-a" id="anchor-contact" href="#contact">
            Contact
          </a>
        </li>
        <li className="logos">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/todor-diklich-bb5999121/"
          >
            <span className="icon icon-linkedin"></span>
          </a>
          <a
            target="_blank"
            href="https://github.com/todordiklich?tab=repositories"
          >
            <span className="icon icon-github"></span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
