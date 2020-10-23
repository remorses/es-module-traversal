// Comp_04_0601
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3005 from './Comp_05_3005';
import Comp_05_3006 from './Comp_05_3006';
import Comp_05_3007 from './Comp_05_3007';
import Comp_05_3008 from './Comp_05_3008';
import Comp_05_3009 from './Comp_05_3009';

const Comp_04_0601: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0601
      <div>
      <Comp_05_3005></Comp_05_3005>';
<Comp_05_3006></Comp_05_3006>';
<Comp_05_3007></Comp_05_3007>';
<Comp_05_3008></Comp_05_3008>';
<Comp_05_3009></Comp_05_3009>';
        </div>
      </div>;
};

export default Comp_04_0601;
