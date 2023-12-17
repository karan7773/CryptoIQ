import React from 'react';
import {Route,Link,Routes} from 'react-router-dom';
import { Layout,Typography,Space } from 'antd';

import {Navbar,HomePage,Exchanges,CryptoDetails,Cryptocurrencies,News} from './components';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/exchanges' element={<Exchanges/>} />
              <Route path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
              <Route path='/crypto/:coinId' element={<CryptoDetails/>}/>
              <Route path='/news' element={<News/>}/>
            </Routes>
          </div>
        </Layout>
      </div>
      <div className='footer'>

      </div>
    </div>
  );
}

export default App;
