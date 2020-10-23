// Comp_04_0012
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0060 from './Comp_05_0060';
import Comp_05_0061 from './Comp_05_0061';
import Comp_05_0062 from './Comp_05_0062';
import Comp_05_0063 from './Comp_05_0063';
import Comp_05_0064 from './Comp_05_0064';

const Comp_04_0012: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0012
      <div>
      <Comp_05_0060></Comp_05_0060>';
<Comp_05_0061></Comp_05_0061>';
<Comp_05_0062></Comp_05_0062>';
<Comp_05_0063></Comp_05_0063>';
<Comp_05_0064></Comp_05_0064>';
        </div>
      </div>;
};

export default Comp_04_0012;
