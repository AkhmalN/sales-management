import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../features/store";

export const useAppDispatch = () => useDispatch<AppDispatch>;

export const useAppSelector = <TSelected>(
  selector: (state: RootState) => TSelected
): TSelected => useSelector(selector);
