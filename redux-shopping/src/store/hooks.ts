import { useDispatch, useSelector, useStore } from 'react-redux';
import { RootStateType, AppDispatchType, AppStoreType } from '@/store/index';

export const useAppStore = useStore.withTypes<AppStoreType>();
export const useAppSelector = useSelector.withTypes<RootStateType>();
export const useAppDispatch = useDispatch.withTypes<AppDispatchType>();
