// Comp_04_0025
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0125 from './Comp_05_0125';
import Comp_05_0126 from './Comp_05_0126';
import Comp_05_0127 from './Comp_05_0127';
import Comp_05_0128 from './Comp_05_0128';
import Comp_05_0129 from './Comp_05_0129';

const Comp_04_0025: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0025
      <div>
      <Comp_05_0125></Comp_05_0125>';
<Comp_05_0126></Comp_05_0126>';
<Comp_05_0127></Comp_05_0127>';
<Comp_05_0128></Comp_05_0128>';
<Comp_05_0129></Comp_05_0129>';
        </div>
      </div>;
};

export default Comp_04_0025;
