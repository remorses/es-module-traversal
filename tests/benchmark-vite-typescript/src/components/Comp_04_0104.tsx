// Comp_04_0104
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0520 from './Comp_05_0520';
import Comp_05_0521 from './Comp_05_0521';
import Comp_05_0522 from './Comp_05_0522';
import Comp_05_0523 from './Comp_05_0523';
import Comp_05_0524 from './Comp_05_0524';

const Comp_04_0104: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0104
      <div>
      <Comp_05_0520></Comp_05_0520>';
<Comp_05_0521></Comp_05_0521>';
<Comp_05_0522></Comp_05_0522>';
<Comp_05_0523></Comp_05_0523>';
<Comp_05_0524></Comp_05_0524>';
        </div>
      </div>;
};

export default Comp_04_0104;
