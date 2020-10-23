// Comp_04_0298
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1490 from './Comp_05_1490';
import Comp_05_1491 from './Comp_05_1491';
import Comp_05_1492 from './Comp_05_1492';
import Comp_05_1493 from './Comp_05_1493';
import Comp_05_1494 from './Comp_05_1494';

const Comp_04_0298: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0298
      <div>
      <Comp_05_1490></Comp_05_1490>';
<Comp_05_1491></Comp_05_1491>';
<Comp_05_1492></Comp_05_1492>';
<Comp_05_1493></Comp_05_1493>';
<Comp_05_1494></Comp_05_1494>';
        </div>
      </div>;
};

export default Comp_04_0298;
