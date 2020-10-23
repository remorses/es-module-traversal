// Comp_04_0373
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1865 from './Comp_05_1865';
import Comp_05_1866 from './Comp_05_1866';
import Comp_05_1867 from './Comp_05_1867';
import Comp_05_1868 from './Comp_05_1868';
import Comp_05_1869 from './Comp_05_1869';

const Comp_04_0373: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0373
      <div>
      <Comp_05_1865></Comp_05_1865>';
<Comp_05_1866></Comp_05_1866>';
<Comp_05_1867></Comp_05_1867>';
<Comp_05_1868></Comp_05_1868>';
<Comp_05_1869></Comp_05_1869>';
        </div>
      </div>;
};

export default Comp_04_0373;
