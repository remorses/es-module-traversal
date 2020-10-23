// Comp_03_0097
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0485 from './Comp_04_0485';
import Comp_04_0486 from './Comp_04_0486';
import Comp_04_0487 from './Comp_04_0487';
import Comp_04_0488 from './Comp_04_0488';
import Comp_04_0489 from './Comp_04_0489';

const Comp_03_0097: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0097
      <div>
      <Comp_04_0485></Comp_04_0485>';
<Comp_04_0486></Comp_04_0486>';
<Comp_04_0487></Comp_04_0487>';
<Comp_04_0488></Comp_04_0488>';
<Comp_04_0489></Comp_04_0489>';
        </div>
      </div>;
};

export default Comp_03_0097;
