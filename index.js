import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { StoreProvider } from './src/app/providers/store';
import { NavigationContainer } from '@react-navigation/native';

const EntryPoint = () => {
  return (
    <StoreProvider>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </StoreProvider>
  );
};

AppRegistry.registerComponent(appName, () => EntryPoint);
