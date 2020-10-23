// Comp_04_0378
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1890 from './Comp_05_1890';
import Comp_05_1891 from './Comp_05_1891';
import Comp_05_1892 from './Comp_05_1892';
import Comp_05_1893 from './Comp_05_1893';
import Comp_05_1894 from './Comp_05_1894';

const Comp_04_0378: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0378
      <div>
      <Comp_05_1890></Comp_05_1890>';
<Comp_05_1891></Comp_05_1891>';
<Comp_05_1892></Comp_05_1892>';
<Comp_05_1893></Comp_05_1893>';
<Comp_05_1894></Comp_05_1894>';
        </div>
      </div>;
};

export default Comp_04_0378;
