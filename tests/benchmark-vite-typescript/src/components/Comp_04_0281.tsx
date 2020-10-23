// Comp_04_0281
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1405 from './Comp_05_1405';
import Comp_05_1406 from './Comp_05_1406';
import Comp_05_1407 from './Comp_05_1407';
import Comp_05_1408 from './Comp_05_1408';
import Comp_05_1409 from './Comp_05_1409';

const Comp_04_0281: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0281
      <div>
      <Comp_05_1405></Comp_05_1405>';
<Comp_05_1406></Comp_05_1406>';
<Comp_05_1407></Comp_05_1407>';
<Comp_05_1408></Comp_05_1408>';
<Comp_05_1409></Comp_05_1409>';
        </div>
      </div>;
};

export default Comp_04_0281;
