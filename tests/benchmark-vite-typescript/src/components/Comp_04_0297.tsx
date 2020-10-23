// Comp_04_0297
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1485 from './Comp_05_1485';
import Comp_05_1486 from './Comp_05_1486';
import Comp_05_1487 from './Comp_05_1487';
import Comp_05_1488 from './Comp_05_1488';
import Comp_05_1489 from './Comp_05_1489';

const Comp_04_0297: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0297
      <div>
      <Comp_05_1485></Comp_05_1485>';
<Comp_05_1486></Comp_05_1486>';
<Comp_05_1487></Comp_05_1487>';
<Comp_05_1488></Comp_05_1488>';
<Comp_05_1489></Comp_05_1489>';
        </div>
      </div>;
};

export default Comp_04_0297;
