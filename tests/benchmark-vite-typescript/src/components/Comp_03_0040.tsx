// Comp_03_0040
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0200 from './Comp_04_0200';
import Comp_04_0201 from './Comp_04_0201';
import Comp_04_0202 from './Comp_04_0202';
import Comp_04_0203 from './Comp_04_0203';
import Comp_04_0204 from './Comp_04_0204';

const Comp_03_0040: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0040
      <div>
      <Comp_04_0200></Comp_04_0200>';
<Comp_04_0201></Comp_04_0201>';
<Comp_04_0202></Comp_04_0202>';
<Comp_04_0203></Comp_04_0203>';
<Comp_04_0204></Comp_04_0204>';
        </div>
      </div>;
};

export default Comp_03_0040;
