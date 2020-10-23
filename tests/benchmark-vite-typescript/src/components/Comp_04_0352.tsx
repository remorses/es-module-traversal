// Comp_04_0352
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1760 from './Comp_05_1760';
import Comp_05_1761 from './Comp_05_1761';
import Comp_05_1762 from './Comp_05_1762';
import Comp_05_1763 from './Comp_05_1763';
import Comp_05_1764 from './Comp_05_1764';

const Comp_04_0352: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0352
      <div>
      <Comp_05_1760></Comp_05_1760>';
<Comp_05_1761></Comp_05_1761>';
<Comp_05_1762></Comp_05_1762>';
<Comp_05_1763></Comp_05_1763>';
<Comp_05_1764></Comp_05_1764>';
        </div>
      </div>;
};

export default Comp_04_0352;
