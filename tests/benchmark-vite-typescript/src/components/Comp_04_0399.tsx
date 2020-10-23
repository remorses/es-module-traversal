// Comp_04_0399
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1995 from './Comp_05_1995';
import Comp_05_1996 from './Comp_05_1996';
import Comp_05_1997 from './Comp_05_1997';
import Comp_05_1998 from './Comp_05_1998';
import Comp_05_1999 from './Comp_05_1999';

const Comp_04_0399: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0399
      <div>
      <Comp_05_1995></Comp_05_1995>';
<Comp_05_1996></Comp_05_1996>';
<Comp_05_1997></Comp_05_1997>';
<Comp_05_1998></Comp_05_1998>';
<Comp_05_1999></Comp_05_1999>';
        </div>
      </div>;
};

export default Comp_04_0399;
