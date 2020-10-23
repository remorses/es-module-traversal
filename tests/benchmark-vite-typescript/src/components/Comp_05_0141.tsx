// Comp_05_0141
import React from 'react';
import { incModCount } from '../modCount';


const Comp_05_0141: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_05_0141
      <div>
      
        </div>
      </div>;
};

export default Comp_05_0141;
