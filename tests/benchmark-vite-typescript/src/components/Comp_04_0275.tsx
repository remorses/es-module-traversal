// Comp_04_0275
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1375 from './Comp_05_1375';
import Comp_05_1376 from './Comp_05_1376';
import Comp_05_1377 from './Comp_05_1377';
import Comp_05_1378 from './Comp_05_1378';
import Comp_05_1379 from './Comp_05_1379';

const Comp_04_0275: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0275
      <div>
      <Comp_05_1375></Comp_05_1375>';
<Comp_05_1376></Comp_05_1376>';
<Comp_05_1377></Comp_05_1377>';
<Comp_05_1378></Comp_05_1378>';
<Comp_05_1379></Comp_05_1379>';
        </div>
      </div>;
};

export default Comp_04_0275;
