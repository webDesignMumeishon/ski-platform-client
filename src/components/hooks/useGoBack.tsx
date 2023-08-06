import { useLocation } from "react-router-dom";

const useGoBack = () => {
  const {
    state: { from: previousUrl },
  } = useLocation();

  return { previousUrl };
};

export default useGoBack;
