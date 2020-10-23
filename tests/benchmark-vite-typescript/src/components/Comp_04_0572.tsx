// Comp_04_0572
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_2860 from './Comp_05_2860';
import Comp_05_2861 from './Comp_05_2861';
import Comp_05_2862 from './Comp_05_2862';
import Comp_05_2863 from './Comp_05_2863';
import Comp_05_2864 from './Comp_05_2864';

const Comp_04_0572: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0572
      <div>
      <Comp_05_2860></Comp_05_2860>';
<Comp_05_2861></Comp_05_2861>';
<Comp_05_2862></Comp_05_2862>';
<Comp_05_2863></Comp_05_2863>';
<Comp_05_2864></Comp_05_2864>';
        </div>
      </div>;
};

export default Comp_04_0572;
