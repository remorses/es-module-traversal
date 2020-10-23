// Comp_04_0002
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0010 from './Comp_05_0010';
import Comp_05_0011 from './Comp_05_0011';
import Comp_05_0012 from './Comp_05_0012';
import Comp_05_0013 from './Comp_05_0013';
import Comp_05_0014 from './Comp_05_0014';

const Comp_04_0002: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0002
      <div>
      <Comp_05_0010></Comp_05_0010>';
<Comp_05_0011></Comp_05_0011>';
<Comp_05_0012></Comp_05_0012>';
<Comp_05_0013></Comp_05_0013>';
<Comp_05_0014></Comp_05_0014>';
        </div>
      </div>;
};

export default Comp_04_0002;
