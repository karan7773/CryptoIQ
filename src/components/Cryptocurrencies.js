import React,{useEffect, useState} from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card,Row,Col,Input } from 'antd'
import { useGetCryptosQuery } from '../services/CryptoAPI'
import Loader from './Loader'

const Cryptocurrencies = ({simplified}) => {
  const count=simplified?10:100;
  const {data:cryptoList,isFetching}=useGetCryptosQuery(count)
  const [searchTerm,setSearchTerm]=useState('')
  const [cryptos,setCryptos]=useState(cryptoList?.data?.coins);

  useEffect(()=>{
    const filterData=cryptoList?.data?.coins.filter((coin)=>{
      return coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setCryptos(filterData);

  },[cryptoList,searchTerm])

  if(isFetching) return <Loader/>;

  console.log(cryptos);
  return (
    <>
    {!simplified && (
      <div className='search-crypto'> 
        <Input placeholder='Search crypto currency' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
      </div>
    )}
      <Row gutter={[32,32]} className='crypto-card-container'>
        {cryptos?.map((currency)=>(
          <Col xs={24} sm={12}  className='crypto-card' key={currency.uuid}>
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card 
                title={`${currency.rank}. ${currency.name}`} 
                extra={<img className='crypto-image' src={currency.iconUrl} 
                alt='icon'/>}
                hoverable
              >
                <p>Price : {millify(currency.price)}</p>
                <p>Market Cap : {millify(currency.marketCap)}</p>
                <p>Daily Change : {millify(currency.Change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row> 
    </>
  )
}

export default Cryptocurrencies
