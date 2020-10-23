// Comp_04_0038
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0190 from './Comp_05_0190';
import Comp_05_0191 from './Comp_05_0191';
import Comp_05_0192 from './Comp_05_0192';
import Comp_05_0193 from './Comp_05_0193';
import Comp_05_0194 from './Comp_05_0194';

const Comp_04_0038: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0038
      <div>
      <Comp_05_0190></Comp_05_0190>';
<Comp_05_0191></Comp_05_0191>';
<Comp_05_0192></Comp_05_0192>';
<Comp_05_0193></Comp_05_0193>';
<Comp_05_0194></Comp_05_0194>';
        </div>
      </div>;
};

export default Comp_04_0038;
