// Comp_04_0138
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0690 from './Comp_05_0690';
import Comp_05_0691 from './Comp_05_0691';
import Comp_05_0692 from './Comp_05_0692';
import Comp_05_0693 from './Comp_05_0693';
import Comp_05_0694 from './Comp_05_0694';

const Comp_04_0138: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0138
      <div>
      <Comp_05_0690></Comp_05_0690>';
<Comp_05_0691></Comp_05_0691>';
<Comp_05_0692></Comp_05_0692>';
<Comp_05_0693></Comp_05_0693>';
<Comp_05_0694></Comp_05_0694>';
        </div>
      </div>;
};

export default Comp_04_0138;
