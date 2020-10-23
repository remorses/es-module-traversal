// Comp_04_0266
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1330 from './Comp_05_1330';
import Comp_05_1331 from './Comp_05_1331';
import Comp_05_1332 from './Comp_05_1332';
import Comp_05_1333 from './Comp_05_1333';
import Comp_05_1334 from './Comp_05_1334';

const Comp_04_0266: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0266
      <div>
      <Comp_05_1330></Comp_05_1330>';
<Comp_05_1331></Comp_05_1331>';
<Comp_05_1332></Comp_05_1332>';
<Comp_05_1333></Comp_05_1333>';
<Comp_05_1334></Comp_05_1334>';
        </div>
      </div>;
};

export default Comp_04_0266;
