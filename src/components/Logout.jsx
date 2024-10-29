import React, { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const LogOut = () => {
  const { logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Logout Successfull");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        alert("Logout Not Success");
      });
  };
  return (
    <div className="h-screen bg-teal-200 flex items-center justify-center">
      <button
        className="bg-red-700 px-8 py-2 text-white rounded-2xl"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default LogOut;
