// Comp_04_0402
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_2010 from './Comp_05_2010';
import Comp_05_2011 from './Comp_05_2011';
import Comp_05_2012 from './Comp_05_2012';
import Comp_05_2013 from './Comp_05_2013';
import Comp_05_2014 from './Comp_05_2014';

const Comp_04_0402: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0402
      <div>
      <Comp_05_2010></Comp_05_2010>';
<Comp_05_2011></Comp_05_2011>';
<Comp_05_2012></Comp_05_2012>';
<Comp_05_2013></Comp_05_2013>';
<Comp_05_2014></Comp_05_2014>';
        </div>
      </div>;
};

export default Comp_04_0402;
