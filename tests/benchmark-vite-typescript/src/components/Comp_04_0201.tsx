// Comp_04_0201
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1005 from './Comp_05_1005';
import Comp_05_1006 from './Comp_05_1006';
import Comp_05_1007 from './Comp_05_1007';
import Comp_05_1008 from './Comp_05_1008';
import Comp_05_1009 from './Comp_05_1009';

const Comp_04_0201: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0201
      <div>
      <Comp_05_1005></Comp_05_1005>';
<Comp_05_1006></Comp_05_1006>';
<Comp_05_1007></Comp_05_1007>';
<Comp_05_1008></Comp_05_1008>';
<Comp_05_1009></Comp_05_1009>';
        </div>
      </div>;
};

export default Comp_04_0201;
