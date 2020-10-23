// Comp_04_0165
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0825 from './Comp_05_0825';
import Comp_05_0826 from './Comp_05_0826';
import Comp_05_0827 from './Comp_05_0827';
import Comp_05_0828 from './Comp_05_0828';
import Comp_05_0829 from './Comp_05_0829';

const Comp_04_0165: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0165
      <div>
      <Comp_05_0825></Comp_05_0825>';
<Comp_05_0826></Comp_05_0826>';
<Comp_05_0827></Comp_05_0827>';
<Comp_05_0828></Comp_05_0828>';
<Comp_05_0829></Comp_05_0829>';
        </div>
      </div>;
};

export default Comp_04_0165;
