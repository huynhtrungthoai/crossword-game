import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider, ThemeConfig } from 'antd';
import RootRouter from './routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#ff7200',
    fontFamily: 'SVN-Gilroy',
  },
};

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: any) => {
      console.log(`Something went wrong: ${error?.message}`);
    },
  }),
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConfigProvider theme={theme}>
            <RootRouter />
          </ConfigProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
