// Comp_04_0593
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_2965 from './Comp_05_2965';
import Comp_05_2966 from './Comp_05_2966';
import Comp_05_2967 from './Comp_05_2967';
import Comp_05_2968 from './Comp_05_2968';
import Comp_05_2969 from './Comp_05_2969';

const Comp_04_0593: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0593
      <div>
      <Comp_05_2965></Comp_05_2965>';
<Comp_05_2966></Comp_05_2966>';
<Comp_05_2967></Comp_05_2967>';
<Comp_05_2968></Comp_05_2968>';
<Comp_05_2969></Comp_05_2969>';
        </div>
      </div>;
};

export default Comp_04_0593;
