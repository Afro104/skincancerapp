'use client';

import { LogtoProvider, LogtoConfig } from '@logto/react';
import Home from './pages/home/page';
import LogInComponent from './services/loginService';

const config: LogtoConfig = {
  endpoint: 'https://b0f7rh.logto.app/',
  appId: 'xjmczt7zote0hpuljd4yx',
};

export default function App() {
  return (
    <LogtoProvider config={config}>
      <LogInComponent />
    </LogtoProvider>
  );
}
