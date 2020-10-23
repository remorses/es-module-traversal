// Comp_05_1938
import React from 'react';
import { incModCount } from '../modCount';


const Comp_05_1938: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_05_1938
      <div>
      
        </div>
      </div>;
};

export default Comp_05_1938;
