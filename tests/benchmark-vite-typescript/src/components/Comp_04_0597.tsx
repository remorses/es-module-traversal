// Comp_04_0597
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_2985 from './Comp_05_2985';
import Comp_05_2986 from './Comp_05_2986';
import Comp_05_2987 from './Comp_05_2987';
import Comp_05_2988 from './Comp_05_2988';
import Comp_05_2989 from './Comp_05_2989';

const Comp_04_0597: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0597
      <div>
      <Comp_05_2985></Comp_05_2985>';
<Comp_05_2986></Comp_05_2986>';
<Comp_05_2987></Comp_05_2987>';
<Comp_05_2988></Comp_05_2988>';
<Comp_05_2989></Comp_05_2989>';
        </div>
      </div>;
};

export default Comp_04_0597;
