import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../model/config/store';

type StoreProviderProps = {
  children: ReactNode;
};

const StoreProvider: FC<StoreProviderProps> = props => {
  const { children } = props;

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
