// Comp_03_0088
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0440 from './Comp_04_0440';
import Comp_04_0441 from './Comp_04_0441';
import Comp_04_0442 from './Comp_04_0442';
import Comp_04_0443 from './Comp_04_0443';
import Comp_04_0444 from './Comp_04_0444';

const Comp_03_0088: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0088
      <div>
      <Comp_04_0440></Comp_04_0440>';
<Comp_04_0441></Comp_04_0441>';
<Comp_04_0442></Comp_04_0442>';
<Comp_04_0443></Comp_04_0443>';
<Comp_04_0444></Comp_04_0444>';
        </div>
      </div>;
};

export default Comp_03_0088;
