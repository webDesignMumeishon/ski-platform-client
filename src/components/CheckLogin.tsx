import { useAppSelector } from "../redux/hooks";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface ComponentProps {
  children: ReactNode;
}

function CheckLogin({ children }: ComponentProps) {
  const fetchedUser = useAppSelector((state) => state.userReducer);
  if (fetchedUser.isLoading) {
    return <div>loading</div>;
  } else {
    if (fetchedUser.logged) {
      return <div>{children}</div>;
    } else {
      return <Navigate to="/login" />;
    }
  }
}

export default CheckLogin;
