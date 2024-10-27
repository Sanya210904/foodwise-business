import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { StoreProvider } from './src/app/providers/store';

const EntryPoint = () => {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  );
};

AppRegistry.registerComponent(appName, () => EntryPoint);
