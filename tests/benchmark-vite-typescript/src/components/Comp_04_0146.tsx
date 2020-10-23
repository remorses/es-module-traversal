// Comp_04_0146
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0730 from './Comp_05_0730';
import Comp_05_0731 from './Comp_05_0731';
import Comp_05_0732 from './Comp_05_0732';
import Comp_05_0733 from './Comp_05_0733';
import Comp_05_0734 from './Comp_05_0734';

const Comp_04_0146: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0146
      <div>
      <Comp_05_0730></Comp_05_0730>';
<Comp_05_0731></Comp_05_0731>';
<Comp_05_0732></Comp_05_0732>';
<Comp_05_0733></Comp_05_0733>';
<Comp_05_0734></Comp_05_0734>';
        </div>
      </div>;
};

export default Comp_04_0146;
