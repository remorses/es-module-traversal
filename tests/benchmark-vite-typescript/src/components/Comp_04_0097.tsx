// Comp_04_0097
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0485 from './Comp_05_0485';
import Comp_05_0486 from './Comp_05_0486';
import Comp_05_0487 from './Comp_05_0487';
import Comp_05_0488 from './Comp_05_0488';
import Comp_05_0489 from './Comp_05_0489';

const Comp_04_0097: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0097
      <div>
      <Comp_05_0485></Comp_05_0485>';
<Comp_05_0486></Comp_05_0486>';
<Comp_05_0487></Comp_05_0487>';
<Comp_05_0488></Comp_05_0488>';
<Comp_05_0489></Comp_05_0489>';
        </div>
      </div>;
};

export default Comp_04_0097;
