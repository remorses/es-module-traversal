// Comp_03_0001
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0005 from './Comp_04_0005';
import Comp_04_0006 from './Comp_04_0006';
import Comp_04_0007 from './Comp_04_0007';
import Comp_04_0008 from './Comp_04_0008';
import Comp_04_0009 from './Comp_04_0009';

const Comp_03_0001: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0001
      <div>
      <Comp_04_0005></Comp_04_0005>';
<Comp_04_0006></Comp_04_0006>';
<Comp_04_0007></Comp_04_0007>';
<Comp_04_0008></Comp_04_0008>';
<Comp_04_0009></Comp_04_0009>';
        </div>
      </div>;
};

export default Comp_03_0001;
