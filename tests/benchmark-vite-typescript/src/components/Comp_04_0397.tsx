// Comp_04_0397
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1985 from './Comp_05_1985';
import Comp_05_1986 from './Comp_05_1986';
import Comp_05_1987 from './Comp_05_1987';
import Comp_05_1988 from './Comp_05_1988';
import Comp_05_1989 from './Comp_05_1989';

const Comp_04_0397: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0397
      <div>
      <Comp_05_1985></Comp_05_1985>';
<Comp_05_1986></Comp_05_1986>';
<Comp_05_1987></Comp_05_1987>';
<Comp_05_1988></Comp_05_1988>';
<Comp_05_1989></Comp_05_1989>';
        </div>
      </div>;
};

export default Comp_04_0397;
