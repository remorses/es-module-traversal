// Comp_04_0413
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_2065 from './Comp_05_2065';
import Comp_05_2066 from './Comp_05_2066';
import Comp_05_2067 from './Comp_05_2067';
import Comp_05_2068 from './Comp_05_2068';
import Comp_05_2069 from './Comp_05_2069';

const Comp_04_0413: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0413
      <div>
      <Comp_05_2065></Comp_05_2065>';
<Comp_05_2066></Comp_05_2066>';
<Comp_05_2067></Comp_05_2067>';
<Comp_05_2068></Comp_05_2068>';
<Comp_05_2069></Comp_05_2069>';
        </div>
      </div>;
};

export default Comp_04_0413;
