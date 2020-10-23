// Comp_04_0393
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1965 from './Comp_05_1965';
import Comp_05_1966 from './Comp_05_1966';
import Comp_05_1967 from './Comp_05_1967';
import Comp_05_1968 from './Comp_05_1968';
import Comp_05_1969 from './Comp_05_1969';

const Comp_04_0393: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0393
      <div>
      <Comp_05_1965></Comp_05_1965>';
<Comp_05_1966></Comp_05_1966>';
<Comp_05_1967></Comp_05_1967>';
<Comp_05_1968></Comp_05_1968>';
<Comp_05_1969></Comp_05_1969>';
        </div>
      </div>;
};

export default Comp_04_0393;
