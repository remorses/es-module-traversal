// Comp_04_0126
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0630 from './Comp_05_0630';
import Comp_05_0631 from './Comp_05_0631';
import Comp_05_0632 from './Comp_05_0632';
import Comp_05_0633 from './Comp_05_0633';
import Comp_05_0634 from './Comp_05_0634';

const Comp_04_0126: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0126
      <div>
      <Comp_05_0630></Comp_05_0630>';
<Comp_05_0631></Comp_05_0631>';
<Comp_05_0632></Comp_05_0632>';
<Comp_05_0633></Comp_05_0633>';
<Comp_05_0634></Comp_05_0634>';
        </div>
      </div>;
};

export default Comp_04_0126;
