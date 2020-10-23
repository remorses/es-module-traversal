// Comp_04_0388
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1940 from './Comp_05_1940';
import Comp_05_1941 from './Comp_05_1941';
import Comp_05_1942 from './Comp_05_1942';
import Comp_05_1943 from './Comp_05_1943';
import Comp_05_1944 from './Comp_05_1944';

const Comp_04_0388: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0388
      <div>
      <Comp_05_1940></Comp_05_1940>';
<Comp_05_1941></Comp_05_1941>';
<Comp_05_1942></Comp_05_1942>';
<Comp_05_1943></Comp_05_1943>';
<Comp_05_1944></Comp_05_1944>';
        </div>
      </div>;
};

export default Comp_04_0388;
