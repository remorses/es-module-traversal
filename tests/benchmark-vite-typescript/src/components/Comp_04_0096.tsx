// Comp_04_0096
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0480 from './Comp_05_0480';
import Comp_05_0481 from './Comp_05_0481';
import Comp_05_0482 from './Comp_05_0482';
import Comp_05_0483 from './Comp_05_0483';
import Comp_05_0484 from './Comp_05_0484';

const Comp_04_0096: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0096
      <div>
      <Comp_05_0480></Comp_05_0480>';
<Comp_05_0481></Comp_05_0481>';
<Comp_05_0482></Comp_05_0482>';
<Comp_05_0483></Comp_05_0483>';
<Comp_05_0484></Comp_05_0484>';
        </div>
      </div>;
};

export default Comp_04_0096;
