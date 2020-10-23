// Comp_04_0278
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1390 from './Comp_05_1390';
import Comp_05_1391 from './Comp_05_1391';
import Comp_05_1392 from './Comp_05_1392';
import Comp_05_1393 from './Comp_05_1393';
import Comp_05_1394 from './Comp_05_1394';

const Comp_04_0278: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0278
      <div>
      <Comp_05_1390></Comp_05_1390>';
<Comp_05_1391></Comp_05_1391>';
<Comp_05_1392></Comp_05_1392>';
<Comp_05_1393></Comp_05_1393>';
<Comp_05_1394></Comp_05_1394>';
        </div>
      </div>;
};

export default Comp_04_0278;
