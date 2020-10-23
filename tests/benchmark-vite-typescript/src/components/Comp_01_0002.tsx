// Comp_01_0002
import React from 'react';
import { incModCount } from '../modCount';
import Comp_02_0010 from './Comp_02_0010';
import Comp_02_0011 from './Comp_02_0011';
import Comp_02_0012 from './Comp_02_0012';
import Comp_02_0013 from './Comp_02_0013';
import Comp_02_0014 from './Comp_02_0014';

const Comp_01_0002: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_01_0002
      <div>
      <Comp_02_0010></Comp_02_0010>';
<Comp_02_0011></Comp_02_0011>';
<Comp_02_0012></Comp_02_0012>';
<Comp_02_0013></Comp_02_0013>';
<Comp_02_0014></Comp_02_0014>';
        </div>
      </div>;
};

export default Comp_01_0002;
