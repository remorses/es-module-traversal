// Comp_04_0406
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_2030 from './Comp_05_2030';
import Comp_05_2031 from './Comp_05_2031';
import Comp_05_2032 from './Comp_05_2032';
import Comp_05_2033 from './Comp_05_2033';
import Comp_05_2034 from './Comp_05_2034';

const Comp_04_0406: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0406
      <div>
      <Comp_05_2030></Comp_05_2030>';
<Comp_05_2031></Comp_05_2031>';
<Comp_05_2032></Comp_05_2032>';
<Comp_05_2033></Comp_05_2033>';
<Comp_05_2034></Comp_05_2034>';
        </div>
      </div>;
};

export default Comp_04_0406;
