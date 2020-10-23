// Comp_04_0400
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_2000 from './Comp_05_2000';
import Comp_05_2001 from './Comp_05_2001';
import Comp_05_2002 from './Comp_05_2002';
import Comp_05_2003 from './Comp_05_2003';
import Comp_05_2004 from './Comp_05_2004';

const Comp_04_0400: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0400
      <div>
      <Comp_05_2000></Comp_05_2000>';
<Comp_05_2001></Comp_05_2001>';
<Comp_05_2002></Comp_05_2002>';
<Comp_05_2003></Comp_05_2003>';
<Comp_05_2004></Comp_05_2004>';
        </div>
      </div>;
};

export default Comp_04_0400;
