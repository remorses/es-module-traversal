// Comp_04_0574
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_2870 from './Comp_05_2870';
import Comp_05_2871 from './Comp_05_2871';
import Comp_05_2872 from './Comp_05_2872';
import Comp_05_2873 from './Comp_05_2873';
import Comp_05_2874 from './Comp_05_2874';

const Comp_04_0574: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0574
      <div>
      <Comp_05_2870></Comp_05_2870>';
<Comp_05_2871></Comp_05_2871>';
<Comp_05_2872></Comp_05_2872>';
<Comp_05_2873></Comp_05_2873>';
<Comp_05_2874></Comp_05_2874>';
        </div>
      </div>;
};

export default Comp_04_0574;
