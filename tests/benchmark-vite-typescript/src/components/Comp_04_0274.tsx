// Comp_04_0274
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1370 from './Comp_05_1370';
import Comp_05_1371 from './Comp_05_1371';
import Comp_05_1372 from './Comp_05_1372';
import Comp_05_1373 from './Comp_05_1373';
import Comp_05_1374 from './Comp_05_1374';

const Comp_04_0274: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0274
      <div>
      <Comp_05_1370></Comp_05_1370>';
<Comp_05_1371></Comp_05_1371>';
<Comp_05_1372></Comp_05_1372>';
<Comp_05_1373></Comp_05_1373>';
<Comp_05_1374></Comp_05_1374>';
        </div>
      </div>;
};

export default Comp_04_0274;
