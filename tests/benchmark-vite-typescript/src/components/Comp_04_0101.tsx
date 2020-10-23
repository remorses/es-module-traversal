// Comp_04_0101
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0505 from './Comp_05_0505';
import Comp_05_0506 from './Comp_05_0506';
import Comp_05_0507 from './Comp_05_0507';
import Comp_05_0508 from './Comp_05_0508';
import Comp_05_0509 from './Comp_05_0509';

const Comp_04_0101: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0101
      <div>
      <Comp_05_0505></Comp_05_0505>';
<Comp_05_0506></Comp_05_0506>';
<Comp_05_0507></Comp_05_0507>';
<Comp_05_0508></Comp_05_0508>';
<Comp_05_0509></Comp_05_0509>';
        </div>
      </div>;
};

export default Comp_04_0101;
