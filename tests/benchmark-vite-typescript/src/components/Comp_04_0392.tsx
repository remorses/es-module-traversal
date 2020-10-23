// Comp_04_0392
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1960 from './Comp_05_1960';
import Comp_05_1961 from './Comp_05_1961';
import Comp_05_1962 from './Comp_05_1962';
import Comp_05_1963 from './Comp_05_1963';
import Comp_05_1964 from './Comp_05_1964';

const Comp_04_0392: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0392
      <div>
      <Comp_05_1960></Comp_05_1960>';
<Comp_05_1961></Comp_05_1961>';
<Comp_05_1962></Comp_05_1962>';
<Comp_05_1963></Comp_05_1963>';
<Comp_05_1964></Comp_05_1964>';
        </div>
      </div>;
};

export default Comp_04_0392;
