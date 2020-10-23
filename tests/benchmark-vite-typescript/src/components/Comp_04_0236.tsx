// Comp_04_0236
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1180 from './Comp_05_1180';
import Comp_05_1181 from './Comp_05_1181';
import Comp_05_1182 from './Comp_05_1182';
import Comp_05_1183 from './Comp_05_1183';
import Comp_05_1184 from './Comp_05_1184';

const Comp_04_0236: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0236
      <div>
      <Comp_05_1180></Comp_05_1180>';
<Comp_05_1181></Comp_05_1181>';
<Comp_05_1182></Comp_05_1182>';
<Comp_05_1183></Comp_05_1183>';
<Comp_05_1184></Comp_05_1184>';
        </div>
      </div>;
};

export default Comp_04_0236;
