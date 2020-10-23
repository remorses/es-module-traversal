// Comp_02_0013
import React from 'react';
import { incModCount } from '../modCount';
import Comp_03_0065 from './Comp_03_0065';
import Comp_03_0066 from './Comp_03_0066';
import Comp_03_0067 from './Comp_03_0067';
import Comp_03_0068 from './Comp_03_0068';
import Comp_03_0069 from './Comp_03_0069';

const Comp_02_0013: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_02_0013
      <div>
      <Comp_03_0065></Comp_03_0065>';
<Comp_03_0066></Comp_03_0066>';
<Comp_03_0067></Comp_03_0067>';
<Comp_03_0068></Comp_03_0068>';
<Comp_03_0069></Comp_03_0069>';
        </div>
      </div>;
};

export default Comp_02_0013;
