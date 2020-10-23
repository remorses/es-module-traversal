// Comp_04_0480
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_2400 from './Comp_05_2400';
import Comp_05_2401 from './Comp_05_2401';
import Comp_05_2402 from './Comp_05_2402';
import Comp_05_2403 from './Comp_05_2403';
import Comp_05_2404 from './Comp_05_2404';

const Comp_04_0480: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0480
      <div>
      <Comp_05_2400></Comp_05_2400>';
<Comp_05_2401></Comp_05_2401>';
<Comp_05_2402></Comp_05_2402>';
<Comp_05_2403></Comp_05_2403>';
<Comp_05_2404></Comp_05_2404>';
        </div>
      </div>;
};

export default Comp_04_0480;
