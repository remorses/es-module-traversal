// Comp_03_0002
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0010 from './Comp_04_0010';
import Comp_04_0011 from './Comp_04_0011';
import Comp_04_0012 from './Comp_04_0012';
import Comp_04_0013 from './Comp_04_0013';
import Comp_04_0014 from './Comp_04_0014';

const Comp_03_0002: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0002
      <div>
      <Comp_04_0010></Comp_04_0010>';
<Comp_04_0011></Comp_04_0011>';
<Comp_04_0012></Comp_04_0012>';
<Comp_04_0013></Comp_04_0013>';
<Comp_04_0014></Comp_04_0014>';
        </div>
      </div>;
};

export default Comp_03_0002;
