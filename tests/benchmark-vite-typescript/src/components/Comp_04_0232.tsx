// Comp_04_0232
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1160 from './Comp_05_1160';
import Comp_05_1161 from './Comp_05_1161';
import Comp_05_1162 from './Comp_05_1162';
import Comp_05_1163 from './Comp_05_1163';
import Comp_05_1164 from './Comp_05_1164';

const Comp_04_0232: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0232
      <div>
      <Comp_05_1160></Comp_05_1160>';
<Comp_05_1161></Comp_05_1161>';
<Comp_05_1162></Comp_05_1162>';
<Comp_05_1163></Comp_05_1163>';
<Comp_05_1164></Comp_05_1164>';
        </div>
      </div>;
};

export default Comp_04_0232;
