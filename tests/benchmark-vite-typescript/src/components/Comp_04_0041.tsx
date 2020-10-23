// Comp_04_0041
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0205 from './Comp_05_0205';
import Comp_05_0206 from './Comp_05_0206';
import Comp_05_0207 from './Comp_05_0207';
import Comp_05_0208 from './Comp_05_0208';
import Comp_05_0209 from './Comp_05_0209';

const Comp_04_0041: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0041
      <div>
      <Comp_05_0205></Comp_05_0205>';
<Comp_05_0206></Comp_05_0206>';
<Comp_05_0207></Comp_05_0207>';
<Comp_05_0208></Comp_05_0208>';
<Comp_05_0209></Comp_05_0209>';
        </div>
      </div>;
};

export default Comp_04_0041;
