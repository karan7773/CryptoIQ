import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';

import { useGetExchangesQuery,} from '../services/CryptoAPI';
import Loader from './Loader';
import Description from './Description';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery(50);
  const exchangesList = data?.data?.coins;

  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        {exchangesList?.map((exchange) => (
          <Col span={24} key={exchange.uuid}>
            <Collapse >
              <Panel
                key="0"
                showArrow={false}
                header={(
                  <Row>
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
                <Description coinId={exchange.uuid}/>
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};


export default Exchanges;
