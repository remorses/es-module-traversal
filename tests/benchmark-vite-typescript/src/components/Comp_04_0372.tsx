// Comp_04_0372
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1860 from './Comp_05_1860';
import Comp_05_1861 from './Comp_05_1861';
import Comp_05_1862 from './Comp_05_1862';
import Comp_05_1863 from './Comp_05_1863';
import Comp_05_1864 from './Comp_05_1864';

const Comp_04_0372: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0372
      <div>
      <Comp_05_1860></Comp_05_1860>';
<Comp_05_1861></Comp_05_1861>';
<Comp_05_1862></Comp_05_1862>';
<Comp_05_1863></Comp_05_1863>';
<Comp_05_1864></Comp_05_1864>';
        </div>
      </div>;
};

export default Comp_04_0372;
