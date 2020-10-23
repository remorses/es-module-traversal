// Comp_03_0076
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0380 from './Comp_04_0380';
import Comp_04_0381 from './Comp_04_0381';
import Comp_04_0382 from './Comp_04_0382';
import Comp_04_0383 from './Comp_04_0383';
import Comp_04_0384 from './Comp_04_0384';

const Comp_03_0076: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0076
      <div>
      <Comp_04_0380></Comp_04_0380>';
<Comp_04_0381></Comp_04_0381>';
<Comp_04_0382></Comp_04_0382>';
<Comp_04_0383></Comp_04_0383>';
<Comp_04_0384></Comp_04_0384>';
        </div>
      </div>;
};

export default Comp_03_0076;
