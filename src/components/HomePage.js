import React from 'react';
import DisplayHomeItems from './DisplayHomeItems';

const HomePage = () => (
  <div>
    <div>
      <div>
        Logo
      </div>
      <div>
        <div>icon 1</div>
        <div>icon 2</div>
      </div>
    </div>
    <div>
      <h1>Crypto Vault</h1>
      <p>40 coins</p>
    </div>
    <DisplayHomeItems />
  </div>
);

export default HomePage;
