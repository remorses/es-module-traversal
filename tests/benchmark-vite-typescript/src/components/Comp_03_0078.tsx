// Comp_03_0078
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0390 from './Comp_04_0390';
import Comp_04_0391 from './Comp_04_0391';
import Comp_04_0392 from './Comp_04_0392';
import Comp_04_0393 from './Comp_04_0393';
import Comp_04_0394 from './Comp_04_0394';

const Comp_03_0078: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0078
      <div>
      <Comp_04_0390></Comp_04_0390>';
<Comp_04_0391></Comp_04_0391>';
<Comp_04_0392></Comp_04_0392>';
<Comp_04_0393></Comp_04_0393>';
<Comp_04_0394></Comp_04_0394>';
        </div>
      </div>;
};

export default Comp_03_0078;
