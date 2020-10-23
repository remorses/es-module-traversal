// Comp_04_0403
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_2015 from './Comp_05_2015';
import Comp_05_2016 from './Comp_05_2016';
import Comp_05_2017 from './Comp_05_2017';
import Comp_05_2018 from './Comp_05_2018';
import Comp_05_2019 from './Comp_05_2019';

const Comp_04_0403: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0403
      <div>
      <Comp_05_2015></Comp_05_2015>';
<Comp_05_2016></Comp_05_2016>';
<Comp_05_2017></Comp_05_2017>';
<Comp_05_2018></Comp_05_2018>';
<Comp_05_2019></Comp_05_2019>';
        </div>
      </div>;
};

export default Comp_04_0403;
