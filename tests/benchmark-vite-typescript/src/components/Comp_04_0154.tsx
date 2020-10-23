// Comp_04_0154
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0770 from './Comp_05_0770';
import Comp_05_0771 from './Comp_05_0771';
import Comp_05_0772 from './Comp_05_0772';
import Comp_05_0773 from './Comp_05_0773';
import Comp_05_0774 from './Comp_05_0774';

const Comp_04_0154: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0154
      <div>
      <Comp_05_0770></Comp_05_0770>';
<Comp_05_0771></Comp_05_0771>';
<Comp_05_0772></Comp_05_0772>';
<Comp_05_0773></Comp_05_0773>';
<Comp_05_0774></Comp_05_0774>';
        </div>
      </div>;
};

export default Comp_04_0154;
