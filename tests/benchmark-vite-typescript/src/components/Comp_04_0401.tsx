// Comp_04_0401
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_2005 from './Comp_05_2005';
import Comp_05_2006 from './Comp_05_2006';
import Comp_05_2007 from './Comp_05_2007';
import Comp_05_2008 from './Comp_05_2008';
import Comp_05_2009 from './Comp_05_2009';

const Comp_04_0401: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0401
      <div>
      <Comp_05_2005></Comp_05_2005>';
<Comp_05_2006></Comp_05_2006>';
<Comp_05_2007></Comp_05_2007>';
<Comp_05_2008></Comp_05_2008>';
<Comp_05_2009></Comp_05_2009>';
        </div>
      </div>;
};

export default Comp_04_0401;
