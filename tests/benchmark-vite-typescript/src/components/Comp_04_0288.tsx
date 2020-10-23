// Comp_04_0288
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1440 from './Comp_05_1440';
import Comp_05_1441 from './Comp_05_1441';
import Comp_05_1442 from './Comp_05_1442';
import Comp_05_1443 from './Comp_05_1443';
import Comp_05_1444 from './Comp_05_1444';

const Comp_04_0288: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0288
      <div>
      <Comp_05_1440></Comp_05_1440>';
<Comp_05_1441></Comp_05_1441>';
<Comp_05_1442></Comp_05_1442>';
<Comp_05_1443></Comp_05_1443>';
<Comp_05_1444></Comp_05_1444>';
        </div>
      </div>;
};

export default Comp_04_0288;
