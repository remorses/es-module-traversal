// Comp_02_0004
import React from 'react';
import { incModCount } from '../modCount';
import Comp_03_0020 from './Comp_03_0020';
import Comp_03_0021 from './Comp_03_0021';
import Comp_03_0022 from './Comp_03_0022';
import Comp_03_0023 from './Comp_03_0023';
import Comp_03_0024 from './Comp_03_0024';

const Comp_02_0004: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_02_0004
      <div>
      <Comp_03_0020></Comp_03_0020>';
<Comp_03_0021></Comp_03_0021>';
<Comp_03_0022></Comp_03_0022>';
<Comp_03_0023></Comp_03_0023>';
<Comp_03_0024></Comp_03_0024>';
        </div>
      </div>;
};

export default Comp_02_0004;
