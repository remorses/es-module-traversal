// Comp_04_0320
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1600 from './Comp_05_1600';
import Comp_05_1601 from './Comp_05_1601';
import Comp_05_1602 from './Comp_05_1602';
import Comp_05_1603 from './Comp_05_1603';
import Comp_05_1604 from './Comp_05_1604';

const Comp_04_0320: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0320
      <div>
      <Comp_05_1600></Comp_05_1600>';
<Comp_05_1601></Comp_05_1601>';
<Comp_05_1602></Comp_05_1602>';
<Comp_05_1603></Comp_05_1603>';
<Comp_05_1604></Comp_05_1604>';
        </div>
      </div>;
};

export default Comp_04_0320;
