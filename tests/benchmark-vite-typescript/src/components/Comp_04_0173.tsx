// Comp_04_0173
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0865 from './Comp_05_0865';
import Comp_05_0866 from './Comp_05_0866';
import Comp_05_0867 from './Comp_05_0867';
import Comp_05_0868 from './Comp_05_0868';
import Comp_05_0869 from './Comp_05_0869';

const Comp_04_0173: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0173
      <div>
      <Comp_05_0865></Comp_05_0865>';
<Comp_05_0866></Comp_05_0866>';
<Comp_05_0867></Comp_05_0867>';
<Comp_05_0868></Comp_05_0868>';
<Comp_05_0869></Comp_05_0869>';
        </div>
      </div>;
};

export default Comp_04_0173;
