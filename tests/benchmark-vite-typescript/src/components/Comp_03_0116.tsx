// Comp_03_0116
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0580 from './Comp_04_0580';
import Comp_04_0581 from './Comp_04_0581';
import Comp_04_0582 from './Comp_04_0582';
import Comp_04_0583 from './Comp_04_0583';
import Comp_04_0584 from './Comp_04_0584';

const Comp_03_0116: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0116
      <div>
      <Comp_04_0580></Comp_04_0580>';
<Comp_04_0581></Comp_04_0581>';
<Comp_04_0582></Comp_04_0582>';
<Comp_04_0583></Comp_04_0583>';
<Comp_04_0584></Comp_04_0584>';
        </div>
      </div>;
};

export default Comp_03_0116;
