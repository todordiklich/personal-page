import { useState } from 'react';

import Aside from './components/Aside';
import Main from './components/Main';

import './App.css';

export type InViewelEmentType =
  | 'home'
  | 'about'
  | 'skills'
  | 'work'
  | 'contact';

function App() {
  const [inViewElement, setInViewElemnt] = useState<InViewelEmentType>('home');

  return (
    <div className="page-container">
      <Aside inViewElement={inViewElement} />
      <Main setInViewElemnt={setInViewElemnt} />
    </div>
  );
}

export default App;
