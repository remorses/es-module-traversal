// Comp_04_0380
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1900 from './Comp_05_1900';
import Comp_05_1901 from './Comp_05_1901';
import Comp_05_1902 from './Comp_05_1902';
import Comp_05_1903 from './Comp_05_1903';
import Comp_05_1904 from './Comp_05_1904';

const Comp_04_0380: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0380
      <div>
      <Comp_05_1900></Comp_05_1900>';
<Comp_05_1901></Comp_05_1901>';
<Comp_05_1902></Comp_05_1902>';
<Comp_05_1903></Comp_05_1903>';
<Comp_05_1904></Comp_05_1904>';
        </div>
      </div>;
};

export default Comp_04_0380;
