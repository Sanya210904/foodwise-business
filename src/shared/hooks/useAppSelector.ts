import { useSelector } from 'react-redux';
import { RootState } from '../../app/providers/store/model/config/store';

export const useAppSelector = useSelector.withTypes<RootState>();
