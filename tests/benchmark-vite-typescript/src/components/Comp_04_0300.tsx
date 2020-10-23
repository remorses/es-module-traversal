// Comp_04_0300
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1500 from './Comp_05_1500';
import Comp_05_1501 from './Comp_05_1501';
import Comp_05_1502 from './Comp_05_1502';
import Comp_05_1503 from './Comp_05_1503';
import Comp_05_1504 from './Comp_05_1504';

const Comp_04_0300: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0300
      <div>
      <Comp_05_1500></Comp_05_1500>';
<Comp_05_1501></Comp_05_1501>';
<Comp_05_1502></Comp_05_1502>';
<Comp_05_1503></Comp_05_1503>';
<Comp_05_1504></Comp_05_1504>';
        </div>
      </div>;
};

export default Comp_04_0300;
