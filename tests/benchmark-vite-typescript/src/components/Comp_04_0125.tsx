// Comp_04_0125
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0625 from './Comp_05_0625';
import Comp_05_0626 from './Comp_05_0626';
import Comp_05_0627 from './Comp_05_0627';
import Comp_05_0628 from './Comp_05_0628';
import Comp_05_0629 from './Comp_05_0629';

const Comp_04_0125: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0125
      <div>
      <Comp_05_0625></Comp_05_0625>';
<Comp_05_0626></Comp_05_0626>';
<Comp_05_0627></Comp_05_0627>';
<Comp_05_0628></Comp_05_0628>';
<Comp_05_0629></Comp_05_0629>';
        </div>
      </div>;
};

export default Comp_04_0125;
