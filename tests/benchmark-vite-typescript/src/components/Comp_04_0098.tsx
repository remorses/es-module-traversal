// Comp_04_0098
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0490 from './Comp_05_0490';
import Comp_05_0491 from './Comp_05_0491';
import Comp_05_0492 from './Comp_05_0492';
import Comp_05_0493 from './Comp_05_0493';
import Comp_05_0494 from './Comp_05_0494';

const Comp_04_0098: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0098
      <div>
      <Comp_05_0490></Comp_05_0490>';
<Comp_05_0491></Comp_05_0491>';
<Comp_05_0492></Comp_05_0492>';
<Comp_05_0493></Comp_05_0493>';
<Comp_05_0494></Comp_05_0494>';
        </div>
      </div>;
};

export default Comp_04_0098;
