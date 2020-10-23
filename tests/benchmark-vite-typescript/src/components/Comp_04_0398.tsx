// Comp_04_0398
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1990 from './Comp_05_1990';
import Comp_05_1991 from './Comp_05_1991';
import Comp_05_1992 from './Comp_05_1992';
import Comp_05_1993 from './Comp_05_1993';
import Comp_05_1994 from './Comp_05_1994';

const Comp_04_0398: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0398
      <div>
      <Comp_05_1990></Comp_05_1990>';
<Comp_05_1991></Comp_05_1991>';
<Comp_05_1992></Comp_05_1992>';
<Comp_05_1993></Comp_05_1993>';
<Comp_05_1994></Comp_05_1994>';
        </div>
      </div>;
};

export default Comp_04_0398;
