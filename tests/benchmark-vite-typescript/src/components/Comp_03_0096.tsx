// Comp_03_0096
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0480 from './Comp_04_0480';
import Comp_04_0481 from './Comp_04_0481';
import Comp_04_0482 from './Comp_04_0482';
import Comp_04_0483 from './Comp_04_0483';
import Comp_04_0484 from './Comp_04_0484';

const Comp_03_0096: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0096
      <div>
      <Comp_04_0480></Comp_04_0480>';
<Comp_04_0481></Comp_04_0481>';
<Comp_04_0482></Comp_04_0482>';
<Comp_04_0483></Comp_04_0483>';
<Comp_04_0484></Comp_04_0484>';
        </div>
      </div>;
};

export default Comp_03_0096;
