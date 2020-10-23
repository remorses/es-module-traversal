// Comp_03_0004
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0020 from './Comp_04_0020';
import Comp_04_0021 from './Comp_04_0021';
import Comp_04_0022 from './Comp_04_0022';
import Comp_04_0023 from './Comp_04_0023';
import Comp_04_0024 from './Comp_04_0024';

const Comp_03_0004: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0004
      <div>
      <Comp_04_0020></Comp_04_0020>';
<Comp_04_0021></Comp_04_0021>';
<Comp_04_0022></Comp_04_0022>';
<Comp_04_0023></Comp_04_0023>';
<Comp_04_0024></Comp_04_0024>';
        </div>
      </div>;
};

export default Comp_03_0004;
