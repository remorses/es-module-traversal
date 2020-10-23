// Comp_04_0088
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0440 from './Comp_05_0440';
import Comp_05_0441 from './Comp_05_0441';
import Comp_05_0442 from './Comp_05_0442';
import Comp_05_0443 from './Comp_05_0443';
import Comp_05_0444 from './Comp_05_0444';

const Comp_04_0088: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0088
      <div>
      <Comp_05_0440></Comp_05_0440>';
<Comp_05_0441></Comp_05_0441>';
<Comp_05_0442></Comp_05_0442>';
<Comp_05_0443></Comp_05_0443>';
<Comp_05_0444></Comp_05_0444>';
        </div>
      </div>;
};

export default Comp_04_0088;
