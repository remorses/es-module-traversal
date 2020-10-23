// Comp_05_0413
import React from 'react';
import { incModCount } from '../modCount';


const Comp_05_0413: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_05_0413
      <div>
      
        </div>
      </div>;
};

export default Comp_05_0413;
