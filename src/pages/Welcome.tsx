import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Typography } from 'antd';

const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <Card>
        <Typography.Text
          strong
          style={{
            // marginBottom: 12,
            fontSize: 20,
            textAlign: 'center',
          }}
        >
          欢迎使用
          <a href="https://github.com/yunhaoyu" rel="noopener noreferrer" target="__blank">
            用户管理系统 (*^▽^*)
          </a>
        </Typography.Text>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
