import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery,useGetCryptoDetailsQuery } from '../services/CryptoAPI';
import Loader from './Loader';
import { useEffect, useState } from 'react';


const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery(50);
  const exchangesList = data?.data?.coins;
  // console.log(exchangesList);
  // const [active,setactive]=useState(false);
  if (isFetching) return <Loader />;
  // const GetDis=(coinId)=>{
  //   const {data:coindetail} = useGetCryptoDetailsQuery(coinId);
  //   console.log(coindetail?.data?.coin.description);
    // const coinDescription=coindetail[coinId]
    // console.log(coinDescription);
    // return coinDescription.description;
  // }
  // useEffect(()=>{GetDis()},[active])

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        {exchangesList?.map((exchange) => {
          // const detail=GetDis(exchange.uuid)
          return (
            // onclick={setactive((prev)=>prev=!prev)
          <Col span={24} >
            <Collapse>
              <Panel
                key={exchange.uuid}
                showArrow={false}
                header={(
                  <Row key={exchange.uuid}>
                    <Col span={6}>
                      <Text><strong>{exchange.rank}.</strong></Text>
                      <Avatar className="exchange-image" src={exchange.iconUrl} />
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col span={6}>${millify(exchange["24hVolume"])}</Col>
                    <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={6}>{millify(exchange.btcPrice)}%</Col>
                  </Row>
                  )}
              >
                {}
              </Panel>
            </Collapse>
          </Col>
        )})}
      </Row>
    </>
  );
};

export default Exchanges;