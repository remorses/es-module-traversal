// Comp_05_2875
import React from 'react';
import { incModCount } from '../modCount';


const Comp_05_2875: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_05_2875
      <div>
      
        </div>
      </div>;
};

export default Comp_05_2875;
