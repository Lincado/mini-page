import { Link } from "react-router-dom";
import {
  FaCircle,
  FaClipboard,
  FaInfo,
  FaSignInAlt,
  FaUserAlt,
  FaNewspaper,
} from "react-icons/fa";
import { UseIsLoggedIn } from "../../store/logged-in";
export const Header = () => {
  const [isLoggedIn, logout] = UseIsLoggedIn((state) => [
    state.isAuthenticated,
    state.logout,
  ]);
  console.log(isLoggedIn);
  return (
    <>
      <div className="bg-white flex w-full h-14 gap-6 items-center justify-center  absolute">
        <Link to="/about">
          <FaInfo size={30} className="text-green-500" />
        </Link>
        <Link to="/feed">
          <FaNewspaper size={30} className="text-green-500" />
        </Link>
        {isLoggedIn ? (
          <Link onClick={logout} to="/login">
            <FaSignInAlt size={30} className="text-green-500" />
          </Link>
        ) : (
          <Link to="/login">
            <FaUserAlt size={28} className="text-green-500" />
          </Link>
        )}
        {isLoggedIn ? (
          ""
        ) : (
          <Link to="/register">
            <FaClipboard size={28} className="text-green-500" />
          </Link>
        )}

        {isLoggedIn && <FaCircle size={24} className="text-green-500" />}
      </div>
    </>
  );
};
