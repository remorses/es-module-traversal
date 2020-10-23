// Comp_04_0296
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1480 from './Comp_05_1480';
import Comp_05_1481 from './Comp_05_1481';
import Comp_05_1482 from './Comp_05_1482';
import Comp_05_1483 from './Comp_05_1483';
import Comp_05_1484 from './Comp_05_1484';

const Comp_04_0296: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0296
      <div>
      <Comp_05_1480></Comp_05_1480>';
<Comp_05_1481></Comp_05_1481>';
<Comp_05_1482></Comp_05_1482>';
<Comp_05_1483></Comp_05_1483>';
<Comp_05_1484></Comp_05_1484>';
        </div>
      </div>;
};

export default Comp_04_0296;
