import { useEffect, useState, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { resetUserState } from "../../redux/slices/user";
import UserService from "../../service/UserService";


const useLogout = () => {
  const dispatch = useAppDispatch();
  const fetchedUser = useAppSelector((state) => state.userReducer);

  const [logged, setLogged] = useState(false);

  const handleLogout = useCallback(() => {
    UserService.userLogout();
    dispatch(resetUserState());
  }, [logged]);

  useEffect(() => {
    if (fetchedUser.logged !== undefined) {
      setLogged(fetchedUser.logged);
    }
  }, [fetchedUser.logged]);

  return {handleLogout, logged}
};

export default useLogout;
