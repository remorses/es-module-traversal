// Comp_04_0276
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1380 from './Comp_05_1380';
import Comp_05_1381 from './Comp_05_1381';
import Comp_05_1382 from './Comp_05_1382';
import Comp_05_1383 from './Comp_05_1383';
import Comp_05_1384 from './Comp_05_1384';

const Comp_04_0276: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0276
      <div>
      <Comp_05_1380></Comp_05_1380>';
<Comp_05_1381></Comp_05_1381>';
<Comp_05_1382></Comp_05_1382>';
<Comp_05_1383></Comp_05_1383>';
<Comp_05_1384></Comp_05_1384>';
        </div>
      </div>;
};

export default Comp_04_0276;
