// Comp_04_0375
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1875 from './Comp_05_1875';
import Comp_05_1876 from './Comp_05_1876';
import Comp_05_1877 from './Comp_05_1877';
import Comp_05_1878 from './Comp_05_1878';
import Comp_05_1879 from './Comp_05_1879';

const Comp_04_0375: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0375
      <div>
      <Comp_05_1875></Comp_05_1875>';
<Comp_05_1876></Comp_05_1876>';
<Comp_05_1877></Comp_05_1877>';
<Comp_05_1878></Comp_05_1878>';
<Comp_05_1879></Comp_05_1879>';
        </div>
      </div>;
};

export default Comp_04_0375;
