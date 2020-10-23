// Comp_04_0036
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0180 from './Comp_05_0180';
import Comp_05_0181 from './Comp_05_0181';
import Comp_05_0182 from './Comp_05_0182';
import Comp_05_0183 from './Comp_05_0183';
import Comp_05_0184 from './Comp_05_0184';

const Comp_04_0036: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0036
      <div>
      <Comp_05_0180></Comp_05_0180>';
<Comp_05_0181></Comp_05_0181>';
<Comp_05_0182></Comp_05_0182>';
<Comp_05_0183></Comp_05_0183>';
<Comp_05_0184></Comp_05_0184>';
        </div>
      </div>;
};

export default Comp_04_0036;
