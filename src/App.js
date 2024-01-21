import React from 'react';
import './App.css';
import {Route,Link,Routes} from 'react-router-dom';
import { Layout,Typography,Space } from 'antd';

import {Navbar,HomePage,Exchanges,CryptoDetails,Cryptocurrencies} from './components';

function App() {
  return (
    <div className="app">
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
            </Routes>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title level={5} style={{color:"white", textAlign:"center"}}>
            CryptoIQ<br/>
          </Typography.Title>
            <Space>
              <Link to='/'>Home</Link>
              <Link to='/exchanges'>Exchanges</Link>
            </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
