import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

import authService from "../appwrite/auth";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="inline-block px-6 py-2 duration-200 hover:bg-red-700 rounded-full text-slate-200"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
