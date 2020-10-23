// Comp_04_0140
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0700 from './Comp_05_0700';
import Comp_05_0701 from './Comp_05_0701';
import Comp_05_0702 from './Comp_05_0702';
import Comp_05_0703 from './Comp_05_0703';
import Comp_05_0704 from './Comp_05_0704';

const Comp_04_0140: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0140
      <div>
      <Comp_05_0700></Comp_05_0700>';
<Comp_05_0701></Comp_05_0701>';
<Comp_05_0702></Comp_05_0702>';
<Comp_05_0703></Comp_05_0703>';
<Comp_05_0704></Comp_05_0704>';
        </div>
      </div>;
};

export default Comp_04_0140;
