import React from 'react';
import type { CardProps } from 'antd';
import { Card } from 'antd';

export default (props: CardProps) => {
  // const {className = ''}  =props;
  return <Card {...props} />;
};