// Comp_04_0164
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0820 from './Comp_05_0820';
import Comp_05_0821 from './Comp_05_0821';
import Comp_05_0822 from './Comp_05_0822';
import Comp_05_0823 from './Comp_05_0823';
import Comp_05_0824 from './Comp_05_0824';

const Comp_04_0164: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0164
      <div>
      <Comp_05_0820></Comp_05_0820>';
<Comp_05_0821></Comp_05_0821>';
<Comp_05_0822></Comp_05_0822>';
<Comp_05_0823></Comp_05_0823>';
<Comp_05_0824></Comp_05_0824>';
        </div>
      </div>;
};

export default Comp_04_0164;
