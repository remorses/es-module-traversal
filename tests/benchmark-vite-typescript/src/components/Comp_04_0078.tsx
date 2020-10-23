// Comp_04_0078
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0390 from './Comp_05_0390';
import Comp_05_0391 from './Comp_05_0391';
import Comp_05_0392 from './Comp_05_0392';
import Comp_05_0393 from './Comp_05_0393';
import Comp_05_0394 from './Comp_05_0394';

const Comp_04_0078: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0078
      <div>
      <Comp_05_0390></Comp_05_0390>';
<Comp_05_0391></Comp_05_0391>';
<Comp_05_0392></Comp_05_0392>';
<Comp_05_0393></Comp_05_0393>';
<Comp_05_0394></Comp_05_0394>';
        </div>
      </div>;
};

export default Comp_04_0078;
