import { ComponentType } from 'react';
import { TypeRootStackParamsList } from './TypeRootStackParamsList';

export type Route = {
  name: keyof TypeRootStackParamsList;
  component: ComponentType;
};
