import React, { useEffect } from 'react';
import RouteStack from '@src/app/providers/router/ui/RouteStack/RouteStack';
import { useAppSelector } from '@src/shared/hooks/useAppSelector';
import { useAppDispatch } from '@src/shared/hooks/useAppDispatch';
import { fetchAuthStatus } from '@src/features/auth/api/services/fetchAuthStatus';
import { ActivityIndicator, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { styles } from './styles';

const App = () => {
  const dispatch = useAppDispatch();
  const isAppLoading = useAppSelector(state => state.auth.isAppLoading);

  useEffect(() => {
    dispatch(fetchAuthStatus());
  }, []);

  if (isAppLoading) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator />;
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RouteStack />
    </GestureHandlerRootView>
  );
};

export default App;
