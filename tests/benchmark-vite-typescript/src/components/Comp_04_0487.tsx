// Comp_04_0487
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_2435 from './Comp_05_2435';
import Comp_05_2436 from './Comp_05_2436';
import Comp_05_2437 from './Comp_05_2437';
import Comp_05_2438 from './Comp_05_2438';
import Comp_05_2439 from './Comp_05_2439';

const Comp_04_0487: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0487
      <div>
      <Comp_05_2435></Comp_05_2435>';
<Comp_05_2436></Comp_05_2436>';
<Comp_05_2437></Comp_05_2437>';
<Comp_05_2438></Comp_05_2438>';
<Comp_05_2439></Comp_05_2439>';
        </div>
      </div>;
};

export default Comp_04_0487;
