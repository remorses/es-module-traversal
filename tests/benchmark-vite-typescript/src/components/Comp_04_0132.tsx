// Comp_04_0132
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0660 from './Comp_05_0660';
import Comp_05_0661 from './Comp_05_0661';
import Comp_05_0662 from './Comp_05_0662';
import Comp_05_0663 from './Comp_05_0663';
import Comp_05_0664 from './Comp_05_0664';

const Comp_04_0132: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0132
      <div>
      <Comp_05_0660></Comp_05_0660>';
<Comp_05_0661></Comp_05_0661>';
<Comp_05_0662></Comp_05_0662>';
<Comp_05_0663></Comp_05_0663>';
<Comp_05_0664></Comp_05_0664>';
        </div>
      </div>;
};

export default Comp_04_0132;
