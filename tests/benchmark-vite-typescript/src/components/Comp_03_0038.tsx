// Comp_03_0038
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0190 from './Comp_04_0190';
import Comp_04_0191 from './Comp_04_0191';
import Comp_04_0192 from './Comp_04_0192';
import Comp_04_0193 from './Comp_04_0193';
import Comp_04_0194 from './Comp_04_0194';

const Comp_03_0038: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0038
      <div>
      <Comp_04_0190></Comp_04_0190>';
<Comp_04_0191></Comp_04_0191>';
<Comp_04_0192></Comp_04_0192>';
<Comp_04_0193></Comp_04_0193>';
<Comp_04_0194></Comp_04_0194>';
        </div>
      </div>;
};

export default Comp_03_0038;
