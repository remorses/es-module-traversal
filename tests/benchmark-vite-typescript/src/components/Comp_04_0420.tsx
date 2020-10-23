// Comp_04_0420
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_2100 from './Comp_05_2100';
import Comp_05_2101 from './Comp_05_2101';
import Comp_05_2102 from './Comp_05_2102';
import Comp_05_2103 from './Comp_05_2103';
import Comp_05_2104 from './Comp_05_2104';

const Comp_04_0420: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0420
      <div>
      <Comp_05_2100></Comp_05_2100>';
<Comp_05_2101></Comp_05_2101>';
<Comp_05_2102></Comp_05_2102>';
<Comp_05_2103></Comp_05_2103>';
<Comp_05_2104></Comp_05_2104>';
        </div>
      </div>;
};

export default Comp_04_0420;
