// Comp_04_0598
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_2990 from './Comp_05_2990';
import Comp_05_2991 from './Comp_05_2991';
import Comp_05_2992 from './Comp_05_2992';
import Comp_05_2993 from './Comp_05_2993';
import Comp_05_2994 from './Comp_05_2994';

const Comp_04_0598: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0598
      <div>
      <Comp_05_2990></Comp_05_2990>';
<Comp_05_2991></Comp_05_2991>';
<Comp_05_2992></Comp_05_2992>';
<Comp_05_2993></Comp_05_2993>';
<Comp_05_2994></Comp_05_2994>';
        </div>
      </div>;
};

export default Comp_04_0598;
