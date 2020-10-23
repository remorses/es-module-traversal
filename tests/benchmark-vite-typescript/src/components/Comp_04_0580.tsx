// Comp_04_0580
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_2900 from './Comp_05_2900';
import Comp_05_2901 from './Comp_05_2901';
import Comp_05_2902 from './Comp_05_2902';
import Comp_05_2903 from './Comp_05_2903';
import Comp_05_2904 from './Comp_05_2904';

const Comp_04_0580: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0580
      <div>
      <Comp_05_2900></Comp_05_2900>';
<Comp_05_2901></Comp_05_2901>';
<Comp_05_2902></Comp_05_2902>';
<Comp_05_2903></Comp_05_2903>';
<Comp_05_2904></Comp_05_2904>';
        </div>
      </div>;
};

export default Comp_04_0580;
