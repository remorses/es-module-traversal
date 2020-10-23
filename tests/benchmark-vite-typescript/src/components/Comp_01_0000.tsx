// Comp_01_0000
import React from 'react';
import { incModCount } from '../modCount';
import Comp_02_0000 from './Comp_02_0000';
import Comp_02_0001 from './Comp_02_0001';
import Comp_02_0002 from './Comp_02_0002';
import Comp_02_0003 from './Comp_02_0003';
import Comp_02_0004 from './Comp_02_0004';

const Comp_01_0000: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_01_0000
      <div>
      <Comp_02_0000></Comp_02_0000>';
<Comp_02_0001></Comp_02_0001>';
<Comp_02_0002></Comp_02_0002>';
<Comp_02_0003></Comp_02_0003>';
<Comp_02_0004></Comp_02_0004>';
        </div>
      </div>;
};

export default Comp_01_0000;
