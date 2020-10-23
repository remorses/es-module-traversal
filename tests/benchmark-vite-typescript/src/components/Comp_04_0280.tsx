// Comp_04_0280
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1400 from './Comp_05_1400';
import Comp_05_1401 from './Comp_05_1401';
import Comp_05_1402 from './Comp_05_1402';
import Comp_05_1403 from './Comp_05_1403';
import Comp_05_1404 from './Comp_05_1404';

const Comp_04_0280: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0280
      <div>
      <Comp_05_1400></Comp_05_1400>';
<Comp_05_1401></Comp_05_1401>';
<Comp_05_1402></Comp_05_1402>';
<Comp_05_1403></Comp_05_1403>';
<Comp_05_1404></Comp_05_1404>';
        </div>
      </div>;
};

export default Comp_04_0280;
