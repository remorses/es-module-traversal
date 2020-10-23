// Comp_02_0001
import React from 'react';
import { incModCount } from '../modCount';
import Comp_03_0005 from './Comp_03_0005';
import Comp_03_0006 from './Comp_03_0006';
import Comp_03_0007 from './Comp_03_0007';
import Comp_03_0008 from './Comp_03_0008';
import Comp_03_0009 from './Comp_03_0009';

const Comp_02_0001: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_02_0001
      <div>
      <Comp_03_0005></Comp_03_0005>';
<Comp_03_0006></Comp_03_0006>';
<Comp_03_0007></Comp_03_0007>';
<Comp_03_0008></Comp_03_0008>';
<Comp_03_0009></Comp_03_0009>';
        </div>
      </div>;
};

export default Comp_02_0001;
