import { useAppSelector } from "../redux/hooks";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import useGetLocation from "./hooks/useGetLocation";

interface ComponentProps {
  children: ReactNode;
}

function CheckLogin({ children }: ComponentProps) {
  const fetchedUser = useAppSelector((state) => state.userReducer);
  const currentUrl = useGetLocation();

  if (fetchedUser.isLoading) {
    return <div>loading</div>;
  } else {
    if (fetchedUser.logged) {
      return <div>{children}</div>;
    } else {
      return <Navigate to="/login" state={currentUrl.state}/>;
    }
  }
}

export default CheckLogin;
