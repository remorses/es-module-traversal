// Comp_03_0060
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0300 from './Comp_04_0300';
import Comp_04_0301 from './Comp_04_0301';
import Comp_04_0302 from './Comp_04_0302';
import Comp_04_0303 from './Comp_04_0303';
import Comp_04_0304 from './Comp_04_0304';

const Comp_03_0060: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0060
      <div>
      <Comp_04_0300></Comp_04_0300>';
<Comp_04_0301></Comp_04_0301>';
<Comp_04_0302></Comp_04_0302>';
<Comp_04_0303></Comp_04_0303>';
<Comp_04_0304></Comp_04_0304>';
        </div>
      </div>;
};

export default Comp_03_0060;
