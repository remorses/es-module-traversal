// Comp_03_0025
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0125 from './Comp_04_0125';
import Comp_04_0126 from './Comp_04_0126';
import Comp_04_0127 from './Comp_04_0127';
import Comp_04_0128 from './Comp_04_0128';
import Comp_04_0129 from './Comp_04_0129';

const Comp_03_0025: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0025
      <div>
      <Comp_04_0125></Comp_04_0125>';
<Comp_04_0126></Comp_04_0126>';
<Comp_04_0127></Comp_04_0127>';
<Comp_04_0128></Comp_04_0128>';
<Comp_04_0129></Comp_04_0129>';
        </div>
      </div>;
};

export default Comp_03_0025;
