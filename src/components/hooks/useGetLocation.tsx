import { useLocation } from "react-router-dom";

const useGetLocation = () => {
  const state = useLocation();
  return { state: { from: state.pathname } };
};

export default useGetLocation;
