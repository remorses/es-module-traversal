// Comp_05_2730
import React from 'react';
import { incModCount } from '../modCount';


const Comp_05_2730: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_05_2730
      <div>
      
        </div>
      </div>;
};

export default Comp_05_2730;
