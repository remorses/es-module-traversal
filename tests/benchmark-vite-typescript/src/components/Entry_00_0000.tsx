// Entry_00_0000
import React from 'react';
import { incModCount } from '../modCount';
import Comp_01_0000 from './Comp_01_0000';
import Comp_01_0001 from './Comp_01_0001';
import Comp_01_0002 from './Comp_01_0002';
import Comp_01_0003 from './Comp_01_0003';
import Comp_01_0004 from './Comp_01_0004';

const Entry_00_0000: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Entry_00_0000
      <div>
      <Comp_01_0000></Comp_01_0000>';
<Comp_01_0001></Comp_01_0001>';
<Comp_01_0002></Comp_01_0002>';
<Comp_01_0003></Comp_01_0003>';
<Comp_01_0004></Comp_01_0004>';
        </div>
      </div>;
};

export default Entry_00_0000;
