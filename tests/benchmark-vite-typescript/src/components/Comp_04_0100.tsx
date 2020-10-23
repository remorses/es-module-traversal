// Comp_04_0100
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0500 from './Comp_05_0500';
import Comp_05_0501 from './Comp_05_0501';
import Comp_05_0502 from './Comp_05_0502';
import Comp_05_0503 from './Comp_05_0503';
import Comp_05_0504 from './Comp_05_0504';

const Comp_04_0100: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0100
      <div>
      <Comp_05_0500></Comp_05_0500>';
<Comp_05_0501></Comp_05_0501>';
<Comp_05_0502></Comp_05_0502>';
<Comp_05_0503></Comp_05_0503>';
<Comp_05_0504></Comp_05_0504>';
        </div>
      </div>;
};

export default Comp_04_0100;
