// Comp_03_0120
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0600 from './Comp_04_0600';
import Comp_04_0601 from './Comp_04_0601';
import Comp_04_0602 from './Comp_04_0602';
import Comp_04_0603 from './Comp_04_0603';
import Comp_04_0604 from './Comp_04_0604';

const Comp_03_0120: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0120
      <div>
      <Comp_04_0600></Comp_04_0600>';
<Comp_04_0601></Comp_04_0601>';
<Comp_04_0602></Comp_04_0602>';
<Comp_04_0603></Comp_04_0603>';
<Comp_04_0604></Comp_04_0604>';
        </div>
      </div>;
};

export default Comp_03_0120;
