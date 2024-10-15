import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils";

function Navigationbar() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const syncLoginStatus = () => {
    const user = localStorage.getItem("loggedInUser");
    const loginstatus = localStorage.getItem("loginstatus") === "true";
    setLoggedInUser(user);
    setIsLoggedIn(loginstatus);
  };

  useEffect(() => {
    syncLoginStatus();
    window.addEventListener("storage", syncLoginStatus);
    return () => {
      window.removeEventListener("storage", syncLoginStatus);
    };
  }, []);

  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    localStorage.setItem("loginstatus", "false");
    setIsLoggedIn(false);
    handleSuccess("User logged out");
    window.dispatchEvent(new Event("storage"));
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <nav className="w-[100vw] h-16 bg-black">
      <div className="flex justify-center items-center mr-12 relative top-4 md:justify-end">
        <h1 className="text-white flex text-2xl ml-9 font-bold">xenonstack</h1>
        <div className="hidden md:flex flex-1 justify-end items-end space-x-12 mb-1 text-xl font-medium">
          <Link className="text-white cursor-pointer" to="/">
            Home
          </Link>

          {isLoggedIn ? (
            <>
              <h1 className=" text-white">{loggedInUser}</h1>
              <Link className="text-white cursor-pointer" to="/property">
                Properties
              </Link>
              <Link
                className="text-white cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link className="text-white cursor-pointer" to="/signup">
                Signup
              </Link>
              <Link className="text-white cursor-pointer" to="/login">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigationbar;
