// Comp_04_0197
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0985 from './Comp_05_0985';
import Comp_05_0986 from './Comp_05_0986';
import Comp_05_0987 from './Comp_05_0987';
import Comp_05_0988 from './Comp_05_0988';
import Comp_05_0989 from './Comp_05_0989';

const Comp_04_0197: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0197
      <div>
      <Comp_05_0985></Comp_05_0985>';
<Comp_05_0986></Comp_05_0986>';
<Comp_05_0987></Comp_05_0987>';
<Comp_05_0988></Comp_05_0988>';
<Comp_05_0989></Comp_05_0989>';
        </div>
      </div>;
};

export default Comp_04_0197;
