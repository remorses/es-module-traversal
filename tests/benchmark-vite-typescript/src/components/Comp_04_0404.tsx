// Comp_04_0404
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_2020 from './Comp_05_2020';
import Comp_05_2021 from './Comp_05_2021';
import Comp_05_2022 from './Comp_05_2022';
import Comp_05_2023 from './Comp_05_2023';
import Comp_05_2024 from './Comp_05_2024';

const Comp_04_0404: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0404
      <div>
      <Comp_05_2020></Comp_05_2020>';
<Comp_05_2021></Comp_05_2021>';
<Comp_05_2022></Comp_05_2022>';
<Comp_05_2023></Comp_05_2023>';
<Comp_05_2024></Comp_05_2024>';
        </div>
      </div>;
};

export default Comp_04_0404;
