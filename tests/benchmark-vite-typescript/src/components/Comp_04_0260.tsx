// Comp_04_0260
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1300 from './Comp_05_1300';
import Comp_05_1301 from './Comp_05_1301';
import Comp_05_1302 from './Comp_05_1302';
import Comp_05_1303 from './Comp_05_1303';
import Comp_05_1304 from './Comp_05_1304';

const Comp_04_0260: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0260
      <div>
      <Comp_05_1300></Comp_05_1300>';
<Comp_05_1301></Comp_05_1301>';
<Comp_05_1302></Comp_05_1302>';
<Comp_05_1303></Comp_05_1303>';
<Comp_05_1304></Comp_05_1304>';
        </div>
      </div>;
};

export default Comp_04_0260;
