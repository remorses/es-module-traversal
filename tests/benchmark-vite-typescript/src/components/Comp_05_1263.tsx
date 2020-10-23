// Comp_05_1263
import React from 'react';
import { incModCount } from '../modCount';


const Comp_05_1263: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_05_1263
      <div>
      
        </div>
      </div>;
};

export default Comp_05_1263;
