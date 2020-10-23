// Comp_04_0592
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_2960 from './Comp_05_2960';
import Comp_05_2961 from './Comp_05_2961';
import Comp_05_2962 from './Comp_05_2962';
import Comp_05_2963 from './Comp_05_2963';
import Comp_05_2964 from './Comp_05_2964';

const Comp_04_0592: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0592
      <div>
      <Comp_05_2960></Comp_05_2960>';
<Comp_05_2961></Comp_05_2961>';
<Comp_05_2962></Comp_05_2962>';
<Comp_05_2963></Comp_05_2963>';
<Comp_05_2964></Comp_05_2964>';
        </div>
      </div>;
};

export default Comp_04_0592;
