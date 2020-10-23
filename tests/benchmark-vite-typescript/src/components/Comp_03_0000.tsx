// Comp_03_0000
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0000 from './Comp_04_0000';
import Comp_04_0001 from './Comp_04_0001';
import Comp_04_0002 from './Comp_04_0002';
import Comp_04_0003 from './Comp_04_0003';
import Comp_04_0004 from './Comp_04_0004';

const Comp_03_0000: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0000
      <div>
      <Comp_04_0000></Comp_04_0000>';
<Comp_04_0001></Comp_04_0001>';
<Comp_04_0002></Comp_04_0002>';
<Comp_04_0003></Comp_04_0003>';
<Comp_04_0004></Comp_04_0004>';
        </div>
      </div>;
};

export default Comp_03_0000;
