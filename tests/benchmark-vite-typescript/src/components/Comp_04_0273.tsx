// Comp_04_0273
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1365 from './Comp_05_1365';
import Comp_05_1366 from './Comp_05_1366';
import Comp_05_1367 from './Comp_05_1367';
import Comp_05_1368 from './Comp_05_1368';
import Comp_05_1369 from './Comp_05_1369';

const Comp_04_0273: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0273
      <div>
      <Comp_05_1365></Comp_05_1365>';
<Comp_05_1366></Comp_05_1366>';
<Comp_05_1367></Comp_05_1367>';
<Comp_05_1368></Comp_05_1368>';
<Comp_05_1369></Comp_05_1369>';
        </div>
      </div>;
};

export default Comp_04_0273;
