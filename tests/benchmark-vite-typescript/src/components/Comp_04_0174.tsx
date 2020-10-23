// Comp_04_0174
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0870 from './Comp_05_0870';
import Comp_05_0871 from './Comp_05_0871';
import Comp_05_0872 from './Comp_05_0872';
import Comp_05_0873 from './Comp_05_0873';
import Comp_05_0874 from './Comp_05_0874';

const Comp_04_0174: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0174
      <div>
      <Comp_05_0870></Comp_05_0870>';
<Comp_05_0871></Comp_05_0871>';
<Comp_05_0872></Comp_05_0872>';
<Comp_05_0873></Comp_05_0873>';
<Comp_05_0874></Comp_05_0874>';
        </div>
      </div>;
};

export default Comp_04_0174;
