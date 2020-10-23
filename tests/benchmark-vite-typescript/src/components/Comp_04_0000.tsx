// Comp_04_0000
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0000 from './Comp_05_0000';
import Comp_05_0001 from './Comp_05_0001';
import Comp_05_0002 from './Comp_05_0002';
import Comp_05_0003 from './Comp_05_0003';
import Comp_05_0004 from './Comp_05_0004';

const Comp_04_0000: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0000
      <div>
      <Comp_05_0000></Comp_05_0000>';
<Comp_05_0001></Comp_05_0001>';
<Comp_05_0002></Comp_05_0002>';
<Comp_05_0003></Comp_05_0003>';
<Comp_05_0004></Comp_05_0004>';
        </div>
      </div>;
};

export default Comp_04_0000;
