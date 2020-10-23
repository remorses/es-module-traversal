// Comp_04_0560
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_2800 from './Comp_05_2800';
import Comp_05_2801 from './Comp_05_2801';
import Comp_05_2802 from './Comp_05_2802';
import Comp_05_2803 from './Comp_05_2803';
import Comp_05_2804 from './Comp_05_2804';

const Comp_04_0560: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0560
      <div>
      <Comp_05_2800></Comp_05_2800>';
<Comp_05_2801></Comp_05_2801>';
<Comp_05_2802></Comp_05_2802>';
<Comp_05_2803></Comp_05_2803>';
<Comp_05_2804></Comp_05_2804>';
        </div>
      </div>;
};

export default Comp_04_0560;
