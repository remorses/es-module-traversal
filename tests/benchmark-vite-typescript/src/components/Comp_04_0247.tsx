// Comp_04_0247
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1235 from './Comp_05_1235';
import Comp_05_1236 from './Comp_05_1236';
import Comp_05_1237 from './Comp_05_1237';
import Comp_05_1238 from './Comp_05_1238';
import Comp_05_1239 from './Comp_05_1239';

const Comp_04_0247: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0247
      <div>
      <Comp_05_1235></Comp_05_1235>';
<Comp_05_1236></Comp_05_1236>';
<Comp_05_1237></Comp_05_1237>';
<Comp_05_1238></Comp_05_1238>';
<Comp_05_1239></Comp_05_1239>';
        </div>
      </div>;
};

export default Comp_04_0247;
