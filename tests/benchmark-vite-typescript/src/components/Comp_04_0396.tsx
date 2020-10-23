// Comp_04_0396
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1980 from './Comp_05_1980';
import Comp_05_1981 from './Comp_05_1981';
import Comp_05_1982 from './Comp_05_1982';
import Comp_05_1983 from './Comp_05_1983';
import Comp_05_1984 from './Comp_05_1984';

const Comp_04_0396: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0396
      <div>
      <Comp_05_1980></Comp_05_1980>';
<Comp_05_1981></Comp_05_1981>';
<Comp_05_1982></Comp_05_1982>';
<Comp_05_1983></Comp_05_1983>';
<Comp_05_1984></Comp_05_1984>';
        </div>
      </div>;
};

export default Comp_04_0396;
