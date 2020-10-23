// Comp_04_0588
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_2940 from './Comp_05_2940';
import Comp_05_2941 from './Comp_05_2941';
import Comp_05_2942 from './Comp_05_2942';
import Comp_05_2943 from './Comp_05_2943';
import Comp_05_2944 from './Comp_05_2944';

const Comp_04_0588: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0588
      <div>
      <Comp_05_2940></Comp_05_2940>';
<Comp_05_2941></Comp_05_2941>';
<Comp_05_2942></Comp_05_2942>';
<Comp_05_2943></Comp_05_2943>';
<Comp_05_2944></Comp_05_2944>';
        </div>
      </div>;
};

export default Comp_04_0588;
