// Comp_04_0200
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1000 from './Comp_05_1000';
import Comp_05_1001 from './Comp_05_1001';
import Comp_05_1002 from './Comp_05_1002';
import Comp_05_1003 from './Comp_05_1003';
import Comp_05_1004 from './Comp_05_1004';

const Comp_04_0200: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0200
      <div>
      <Comp_05_1000></Comp_05_1000>';
<Comp_05_1001></Comp_05_1001>';
<Comp_05_1002></Comp_05_1002>';
<Comp_05_1003></Comp_05_1003>';
<Comp_05_1004></Comp_05_1004>';
        </div>
      </div>;
};

export default Comp_04_0200;
