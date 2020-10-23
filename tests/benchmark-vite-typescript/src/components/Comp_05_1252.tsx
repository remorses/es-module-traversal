// Comp_05_1252
import React from 'react';
import { incModCount } from '../modCount';


const Comp_05_1252: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_05_1252
      <div>
      
        </div>
      </div>;
};

export default Comp_05_1252;
