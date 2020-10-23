// Comp_04_0602
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3010 from './Comp_05_3010';
import Comp_05_3011 from './Comp_05_3011';
import Comp_05_3012 from './Comp_05_3012';
import Comp_05_3013 from './Comp_05_3013';
import Comp_05_3014 from './Comp_05_3014';

const Comp_04_0602: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0602
      <div>
      <Comp_05_3010></Comp_05_3010>';
<Comp_05_3011></Comp_05_3011>';
<Comp_05_3012></Comp_05_3012>';
<Comp_05_3013></Comp_05_3013>';
<Comp_05_3014></Comp_05_3014>';
        </div>
      </div>;
};

export default Comp_04_0602;
