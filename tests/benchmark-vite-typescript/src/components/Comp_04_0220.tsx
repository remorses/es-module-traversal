// Comp_04_0220
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1100 from './Comp_05_1100';
import Comp_05_1101 from './Comp_05_1101';
import Comp_05_1102 from './Comp_05_1102';
import Comp_05_1103 from './Comp_05_1103';
import Comp_05_1104 from './Comp_05_1104';

const Comp_04_0220: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0220
      <div>
      <Comp_05_1100></Comp_05_1100>';
<Comp_05_1101></Comp_05_1101>';
<Comp_05_1102></Comp_05_1102>';
<Comp_05_1103></Comp_05_1103>';
<Comp_05_1104></Comp_05_1104>';
        </div>
      </div>;
};

export default Comp_04_0220;
