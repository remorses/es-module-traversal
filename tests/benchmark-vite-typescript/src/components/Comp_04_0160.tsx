// Comp_04_0160
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0800 from './Comp_05_0800';
import Comp_05_0801 from './Comp_05_0801';
import Comp_05_0802 from './Comp_05_0802';
import Comp_05_0803 from './Comp_05_0803';
import Comp_05_0804 from './Comp_05_0804';

const Comp_04_0160: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0160
      <div>
      <Comp_05_0800></Comp_05_0800>';
<Comp_05_0801></Comp_05_0801>';
<Comp_05_0802></Comp_05_0802>';
<Comp_05_0803></Comp_05_0803>';
<Comp_05_0804></Comp_05_0804>';
        </div>
      </div>;
};

export default Comp_04_0160;
