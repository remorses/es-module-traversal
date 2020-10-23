// Comp_04_0120
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0600 from './Comp_05_0600';
import Comp_05_0601 from './Comp_05_0601';
import Comp_05_0602 from './Comp_05_0602';
import Comp_05_0603 from './Comp_05_0603';
import Comp_05_0604 from './Comp_05_0604';

const Comp_04_0120: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0120
      <div>
      <Comp_05_0600></Comp_05_0600>';
<Comp_05_0601></Comp_05_0601>';
<Comp_05_0602></Comp_05_0602>';
<Comp_05_0603></Comp_05_0603>';
<Comp_05_0604></Comp_05_0604>';
        </div>
      </div>;
};

export default Comp_04_0120;
