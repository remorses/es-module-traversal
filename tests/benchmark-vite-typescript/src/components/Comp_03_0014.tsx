// Comp_03_0014
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0070 from './Comp_04_0070';
import Comp_04_0071 from './Comp_04_0071';
import Comp_04_0072 from './Comp_04_0072';
import Comp_04_0073 from './Comp_04_0073';
import Comp_04_0074 from './Comp_04_0074';

const Comp_03_0014: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0014
      <div>
      <Comp_04_0070></Comp_04_0070>';
<Comp_04_0071></Comp_04_0071>';
<Comp_04_0072></Comp_04_0072>';
<Comp_04_0073></Comp_04_0073>';
<Comp_04_0074></Comp_04_0074>';
        </div>
      </div>;
};

export default Comp_03_0014;
