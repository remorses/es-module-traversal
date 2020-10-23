// Comp_04_0370
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_1850 from './Comp_05_1850';
import Comp_05_1851 from './Comp_05_1851';
import Comp_05_1852 from './Comp_05_1852';
import Comp_05_1853 from './Comp_05_1853';
import Comp_05_1854 from './Comp_05_1854';

const Comp_04_0370: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0370
      <div>
      <Comp_05_1850></Comp_05_1850>';
<Comp_05_1851></Comp_05_1851>';
<Comp_05_1852></Comp_05_1852>';
<Comp_05_1853></Comp_05_1853>';
<Comp_05_1854></Comp_05_1854>';
        </div>
      </div>;
};

export default Comp_04_0370;
