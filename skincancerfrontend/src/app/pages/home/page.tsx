'use client';

import { useLogto, type IdTokenClaims } from '@logto/react';
import { LogtoProvider, LogtoConfig } from '@logto/react';

import { useEffect, useState } from 'react';
import HomeHelper from './homeHelper';

const Home = () => {
  const config: LogtoConfig = {
    endpoint: 'https://b0f7rh.logto.app/',
    appId: 'xjmczt7zote0hpuljd4yx',
  };
  return(
    <LogtoProvider config={config}>
      <HomeHelper/>
    </LogtoProvider>
  )
};

export default Home;
