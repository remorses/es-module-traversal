// Comp_04_0172
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0860 from './Comp_05_0860';
import Comp_05_0861 from './Comp_05_0861';
import Comp_05_0862 from './Comp_05_0862';
import Comp_05_0863 from './Comp_05_0863';
import Comp_05_0864 from './Comp_05_0864';

const Comp_04_0172: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0172
      <div>
      <Comp_05_0860></Comp_05_0860>';
<Comp_05_0861></Comp_05_0861>';
<Comp_05_0862></Comp_05_0862>';
<Comp_05_0863></Comp_05_0863>';
<Comp_05_0864></Comp_05_0864>';
        </div>
      </div>;
};

export default Comp_04_0172;
