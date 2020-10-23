// Comp_04_0238
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1190 from './Comp_05_1190';
import Comp_05_1191 from './Comp_05_1191';
import Comp_05_1192 from './Comp_05_1192';
import Comp_05_1193 from './Comp_05_1193';
import Comp_05_1194 from './Comp_05_1194';

const Comp_04_0238: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0238
      <div>
      <Comp_05_1190></Comp_05_1190>';
<Comp_05_1191></Comp_05_1191>';
<Comp_05_1192></Comp_05_1192>';
<Comp_05_1193></Comp_05_1193>';
<Comp_05_1194></Comp_05_1194>';
        </div>
      </div>;
};

export default Comp_04_0238;
