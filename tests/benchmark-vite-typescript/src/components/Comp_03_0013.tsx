// Comp_03_0013
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0065 from './Comp_04_0065';
import Comp_04_0066 from './Comp_04_0066';
import Comp_04_0067 from './Comp_04_0067';
import Comp_04_0068 from './Comp_04_0068';
import Comp_04_0069 from './Comp_04_0069';

const Comp_03_0013: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0013
      <div>
      <Comp_04_0065></Comp_04_0065>';
<Comp_04_0066></Comp_04_0066>';
<Comp_04_0067></Comp_04_0067>';
<Comp_04_0068></Comp_04_0068>';
<Comp_04_0069></Comp_04_0069>';
        </div>
      </div>;
};

export default Comp_03_0013;
