import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { privateRoutes, publicRoutes } from '../../model/constants/routeList';
import { colors } from '@src/app/styles/colors';
import { useAppSelector } from '@src/shared/hooks/useAppSelector';
import BottomTabs from '../BottomTabs/BottomTabs';

const RootStack = createNativeStackNavigator();

const RouteStack = () => {
  const isAuth = useAppSelector(state => state.auth.isAuth);

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: colors.navbarColor,
        statusBarColor: colors.statusBarColor,
        statusBarStyle: 'dark',
      }}>
      <RootStack.Group>
        {isAuth ? (
          <>
            <RootStack.Screen name="Tabs" component={BottomTabs} />
            {privateRoutes.map(route => (
              <RootStack.Screen
                key={route.name}
                name={route.name}
                component={route.component}
              />
            ))}
          </>
        ) : (
          publicRoutes.map(route => (
            <RootStack.Screen
              key={route.name}
              name={route.name}
              component={route.component}
            />
          ))
        )}
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RouteStack;
