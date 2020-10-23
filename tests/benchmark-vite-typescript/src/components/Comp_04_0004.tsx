// Comp_04_0004
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0020 from './Comp_05_0020';
import Comp_05_0021 from './Comp_05_0021';
import Comp_05_0022 from './Comp_05_0022';
import Comp_05_0023 from './Comp_05_0023';
import Comp_05_0024 from './Comp_05_0024';

const Comp_04_0004: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0004
      <div>
      <Comp_05_0020></Comp_05_0020>';
<Comp_05_0021></Comp_05_0021>';
<Comp_05_0022></Comp_05_0022>';
<Comp_05_0023></Comp_05_0023>';
<Comp_05_0024></Comp_05_0024>';
        </div>
      </div>;
};

export default Comp_04_0004;
