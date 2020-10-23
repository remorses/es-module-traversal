// Comp_04_0412
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_2060 from './Comp_05_2060';
import Comp_05_2061 from './Comp_05_2061';
import Comp_05_2062 from './Comp_05_2062';
import Comp_05_2063 from './Comp_05_2063';
import Comp_05_2064 from './Comp_05_2064';

const Comp_04_0412: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0412
      <div>
      <Comp_05_2060></Comp_05_2060>';
<Comp_05_2061></Comp_05_2061>';
<Comp_05_2062></Comp_05_2062>';
<Comp_05_2063></Comp_05_2063>';
<Comp_05_2064></Comp_05_2064>';
        </div>
      </div>;
};

export default Comp_04_0412;
