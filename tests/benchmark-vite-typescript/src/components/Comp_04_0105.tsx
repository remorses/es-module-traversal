// Comp_04_0105
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0525 from './Comp_05_0525';
import Comp_05_0526 from './Comp_05_0526';
import Comp_05_0527 from './Comp_05_0527';
import Comp_05_0528 from './Comp_05_0528';
import Comp_05_0529 from './Comp_05_0529';

const Comp_04_0105: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0105
      <div>
      <Comp_05_0525></Comp_05_0525>';
<Comp_05_0526></Comp_05_0526>';
<Comp_05_0527></Comp_05_0527>';
<Comp_05_0528></Comp_05_0528>';
<Comp_05_0529></Comp_05_0529>';
        </div>
      </div>;
};

export default Comp_04_0105;
