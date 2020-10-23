// Comp_04_0376
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1880 from './Comp_05_1880';
import Comp_05_1881 from './Comp_05_1881';
import Comp_05_1882 from './Comp_05_1882';
import Comp_05_1883 from './Comp_05_1883';
import Comp_05_1884 from './Comp_05_1884';

const Comp_04_0376: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0376
      <div>
      <Comp_05_1880></Comp_05_1880>';
<Comp_05_1881></Comp_05_1881>';
<Comp_05_1882></Comp_05_1882>';
<Comp_05_1883></Comp_05_1883>';
<Comp_05_1884></Comp_05_1884>';
        </div>
      </div>;
};

export default Comp_04_0376;
