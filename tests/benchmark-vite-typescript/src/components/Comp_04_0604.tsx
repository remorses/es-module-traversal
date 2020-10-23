// Comp_04_0604
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3020 from './Comp_05_3020';
import Comp_05_3021 from './Comp_05_3021';
import Comp_05_3022 from './Comp_05_3022';
import Comp_05_3023 from './Comp_05_3023';
import Comp_05_3024 from './Comp_05_3024';

const Comp_04_0604: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0604
      <div>
      <Comp_05_3020></Comp_05_3020>';
<Comp_05_3021></Comp_05_3021>';
<Comp_05_3022></Comp_05_3022>';
<Comp_05_3023></Comp_05_3023>';
<Comp_05_3024></Comp_05_3024>';
        </div>
      </div>;
};

export default Comp_04_0604;
