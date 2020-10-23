// Comp_04_0573
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_2865 from './Comp_05_2865';
import Comp_05_2866 from './Comp_05_2866';
import Comp_05_2867 from './Comp_05_2867';
import Comp_05_2868 from './Comp_05_2868';
import Comp_05_2869 from './Comp_05_2869';

const Comp_04_0573: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0573
      <div>
      <Comp_05_2865></Comp_05_2865>';
<Comp_05_2866></Comp_05_2866>';
<Comp_05_2867></Comp_05_2867>';
<Comp_05_2868></Comp_05_2868>';
<Comp_05_2869></Comp_05_2869>';
        </div>
      </div>;
};

export default Comp_04_0573;
