import HomeSection from './HomeSection/HomeSection';
import AboutSection from './AboutSection/AboutSection';
import SkillsSection from './SkillsSection/SkillsSection';
import WorkSection from './WorkSection/WorkSection';
import ContactSection from './ContactSection/ContactSection';

import { InViewelEmentType } from '../App';

import './Main.css';

type MainProps = {
  setInViewElemnt: (inViewElement: InViewelEmentType) => void;
};

export default function Main({ setInViewElemnt }: MainProps) {
  return (
    <main>
      <HomeSection setInViewElemnt={setInViewElemnt} />
      <AboutSection setInViewElemnt={setInViewElemnt} />
      <SkillsSection setInViewElemnt={setInViewElemnt} />
      <WorkSection setInViewElemnt={setInViewElemnt} />
      <ContactSection setInViewElemnt={setInViewElemnt} />
    </main>
  );
}
