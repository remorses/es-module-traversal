// Comp_05_1388
import React from 'react';
import { incModCount } from '../modCount';


const Comp_05_1388: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_05_1388
      <div>
      
        </div>
      </div>;
};

export default Comp_05_1388;
