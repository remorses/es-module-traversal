// Comp_04_0600
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3000 from './Comp_05_3000';
import Comp_05_3001 from './Comp_05_3001';
import Comp_05_3002 from './Comp_05_3002';
import Comp_05_3003 from './Comp_05_3003';
import Comp_05_3004 from './Comp_05_3004';

const Comp_04_0600: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0600
      <div>
      <Comp_05_3000></Comp_05_3000>';
<Comp_05_3001></Comp_05_3001>';
<Comp_05_3002></Comp_05_3002>';
<Comp_05_3003></Comp_05_3003>';
<Comp_05_3004></Comp_05_3004>';
        </div>
      </div>;
};

export default Comp_04_0600;
