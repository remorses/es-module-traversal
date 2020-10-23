// Comp_04_0408
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_2040 from './Comp_05_2040';
import Comp_05_2041 from './Comp_05_2041';
import Comp_05_2042 from './Comp_05_2042';
import Comp_05_2043 from './Comp_05_2043';
import Comp_05_2044 from './Comp_05_2044';

const Comp_04_0408: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0408
      <div>
      <Comp_05_2040></Comp_05_2040>';
<Comp_05_2041></Comp_05_2041>';
<Comp_05_2042></Comp_05_2042>';
<Comp_05_2043></Comp_05_2043>';
<Comp_05_2044></Comp_05_2044>';
        </div>
      </div>;
};

export default Comp_04_0408;
