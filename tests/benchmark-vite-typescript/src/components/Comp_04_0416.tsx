// Comp_04_0416
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_2080 from './Comp_05_2080';
import Comp_05_2081 from './Comp_05_2081';
import Comp_05_2082 from './Comp_05_2082';
import Comp_05_2083 from './Comp_05_2083';
import Comp_05_2084 from './Comp_05_2084';

const Comp_04_0416: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0416
      <div>
      <Comp_05_2080></Comp_05_2080>';
<Comp_05_2081></Comp_05_2081>';
<Comp_05_2082></Comp_05_2082>';
<Comp_05_2083></Comp_05_2083>';
<Comp_05_2084></Comp_05_2084>';
        </div>
      </div>;
};

export default Comp_04_0416;
