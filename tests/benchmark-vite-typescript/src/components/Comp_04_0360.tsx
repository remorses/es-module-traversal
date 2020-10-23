// Comp_04_0360
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1800 from './Comp_05_1800';
import Comp_05_1801 from './Comp_05_1801';
import Comp_05_1802 from './Comp_05_1802';
import Comp_05_1803 from './Comp_05_1803';
import Comp_05_1804 from './Comp_05_1804';

const Comp_04_0360: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0360
      <div>
      <Comp_05_1800></Comp_05_1800>';
<Comp_05_1801></Comp_05_1801>';
<Comp_05_1802></Comp_05_1802>';
<Comp_05_1803></Comp_05_1803>';
<Comp_05_1804></Comp_05_1804>';
        </div>
      </div>;
};

export default Comp_04_0360;
