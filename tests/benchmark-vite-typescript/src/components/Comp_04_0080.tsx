// Comp_04_0080
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0400 from './Comp_05_0400';
import Comp_05_0401 from './Comp_05_0401';
import Comp_05_0402 from './Comp_05_0402';
import Comp_05_0403 from './Comp_05_0403';
import Comp_05_0404 from './Comp_05_0404';

const Comp_04_0080: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0080
      <div>
      <Comp_05_0400></Comp_05_0400>';
<Comp_05_0401></Comp_05_0401>';
<Comp_05_0402></Comp_05_0402>';
<Comp_05_0403></Comp_05_0403>';
<Comp_05_0404></Comp_05_0404>';
        </div>
      </div>;
};

export default Comp_04_0080;
