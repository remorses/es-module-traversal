// Comp_05_1441
import React from 'react';
import { incModCount } from '../modCount';


const Comp_05_1441: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_05_1441
      <div>
      
        </div>
      </div>;
};

export default Comp_05_1441;
