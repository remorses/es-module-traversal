// Comp_04_0026
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_0130 from './Comp_05_0130';
import Comp_05_0131 from './Comp_05_0131';
import Comp_05_0132 from './Comp_05_0132';
import Comp_05_0133 from './Comp_05_0133';
import Comp_05_0134 from './Comp_05_0134';

const Comp_04_0026: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0026
      <div>
      <Comp_05_0130></Comp_05_0130>';
<Comp_05_0131></Comp_05_0131>';
<Comp_05_0132></Comp_05_0132>';
<Comp_05_0133></Comp_05_0133>';
<Comp_05_0134></Comp_05_0134>';
        </div>
      </div>;
};

export default Comp_04_0026;
