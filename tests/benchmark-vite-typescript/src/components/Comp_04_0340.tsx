// Comp_04_0340
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1700 from './Comp_05_1700';
import Comp_05_1701 from './Comp_05_1701';
import Comp_05_1702 from './Comp_05_1702';
import Comp_05_1703 from './Comp_05_1703';
import Comp_05_1704 from './Comp_05_1704';

const Comp_04_0340: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0340
      <div>
      <Comp_05_1700></Comp_05_1700>';
<Comp_05_1701></Comp_05_1701>';
<Comp_05_1702></Comp_05_1702>';
<Comp_05_1703></Comp_05_1703>';
<Comp_05_1704></Comp_05_1704>';
        </div>
      </div>;
};

export default Comp_04_0340;
