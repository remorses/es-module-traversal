// Comp_04_0395
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1975 from './Comp_05_1975';
import Comp_05_1976 from './Comp_05_1976';
import Comp_05_1977 from './Comp_05_1977';
import Comp_05_1978 from './Comp_05_1978';
import Comp_05_1979 from './Comp_05_1979';

const Comp_04_0395: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0395
      <div>
      <Comp_05_1975></Comp_05_1975>';
<Comp_05_1976></Comp_05_1976>';
<Comp_05_1977></Comp_05_1977>';
<Comp_05_1978></Comp_05_1978>';
<Comp_05_1979></Comp_05_1979>';
        </div>
      </div>;
};

export default Comp_04_0395;
