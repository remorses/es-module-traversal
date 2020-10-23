// Comp_03_0080
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0400 from './Comp_04_0400';
import Comp_04_0401 from './Comp_04_0401';
import Comp_04_0402 from './Comp_04_0402';
import Comp_04_0403 from './Comp_04_0403';
import Comp_04_0404 from './Comp_04_0404';

const Comp_03_0080: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0080
      <div>
      <Comp_04_0400></Comp_04_0400>';
<Comp_04_0401></Comp_04_0401>';
<Comp_04_0402></Comp_04_0402>';
<Comp_04_0403></Comp_04_0403>';
<Comp_04_0404></Comp_04_0404>';
        </div>
      </div>;
};

export default Comp_03_0080;
