// Comp_04_0438
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_2190 from './Comp_05_2190';
import Comp_05_2191 from './Comp_05_2191';
import Comp_05_2192 from './Comp_05_2192';
import Comp_05_2193 from './Comp_05_2193';
import Comp_05_2194 from './Comp_05_2194';

const Comp_04_0438: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0438
      <div>
      <Comp_05_2190></Comp_05_2190>';
<Comp_05_2191></Comp_05_2191>';
<Comp_05_2192></Comp_05_2192>';
<Comp_05_2193></Comp_05_2193>';
<Comp_05_2194></Comp_05_2194>';
        </div>
      </div>;
};

export default Comp_04_0438;
