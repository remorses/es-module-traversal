// Comp_04_0037
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0185 from './Comp_05_0185';
import Comp_05_0186 from './Comp_05_0186';
import Comp_05_0187 from './Comp_05_0187';
import Comp_05_0188 from './Comp_05_0188';
import Comp_05_0189 from './Comp_05_0189';

const Comp_04_0037: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0037
      <div>
      <Comp_05_0185></Comp_05_0185>';
<Comp_05_0186></Comp_05_0186>';
<Comp_05_0187></Comp_05_0187>';
<Comp_05_0188></Comp_05_0188>';
<Comp_05_0189></Comp_05_0189>';
        </div>
      </div>;
};

export default Comp_04_0037;
