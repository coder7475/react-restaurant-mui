import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Badge from "@mui/material/Badge";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = (e) => {
    e.preventDefault();
    // console.log("Logout");
    logOut();
  };

  return (
    <header className="bg-[#15151580] text-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-between">
        <a className="flex title-font items-center  mb-4 md:mb-0">
          <div className="flex flex-col">
            <h1 className="font-black text-[32px]">BISTRO BOSS</h1>
            <p className="text-[24px] font-bold text-center">RESTAURANT</p>
          </div>
        </a>
        <nav className="flex flex-wrap items-center text-lg">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
            }
          >
            <div className="mr-5 hover:text-[#EEFF25]">Home</div>
          </NavLink>
          <p className="mr-5 hover:text-[#EEFF25]">CONTACT US</p>
          <p className="mr-5 hover:text-[#EEFF25]">DASHBOARD</p>
          <NavLink
            to="/menu"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
            }
          >
            <div className="mr-5 hover:text-[#EEFF25]">OUR MENU</div>
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
            }
          >
            <p className="mr-5 hover:text-[#EEFF25]">OUR SHOP</p>
          </NavLink>
          <NavLink to="/cart">
            <button className="mr-5 hover:text-[#EEFF25]">
              <Badge
                badgeContent={4}
                color="secondary"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <FaShoppingCart />
              </Badge>
            </button>
          </NavLink>

          {user ? (
            <>
              <button
                className="inline-flex items-center py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0 font-extrabold hover:text-[#EEFF25]"
                onClick={handleSignOut}
              >
                SIGN OUT
              </button>
              <NavLink to="/">
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="55"
                    height="50"
                    viewBox="0 0 55 50"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M43.8511 39.7854C46.0692 37.8885 47.8362 35.5977 49.043 33.0546C50.2497 30.5115 50.8706 27.7701 50.867 25C50.867 13.7812 40.8753 4.6875 28.5488 4.6875C16.2222 4.6875 6.23048 13.7812 6.23048 25C6.22696 27.7701 6.84777 30.5115 8.05452 33.0546C9.26127 35.5977 11.0283 37.8885 13.2464 39.7854C17.3826 43.3414 22.859 45.3195 28.5488 45.3125C34.2386 45.3195 39.7149 43.3414 43.8511 39.7854ZM15.1463 37.1083C16.7534 35.2784 18.7928 33.8015 21.1131 32.7873C23.4333 31.7731 25.9748 31.2477 28.5488 31.25C31.1227 31.2477 33.6642 31.7731 35.9844 32.7873C38.3047 33.8015 40.3441 35.2784 41.9512 37.1083C40.1978 38.7202 38.1103 39.9992 35.8096 40.8711C33.5089 41.743 31.0409 42.1904 28.5488 42.1875C26.0566 42.1904 23.5886 41.743 21.2879 40.8711C18.9873 39.9992 16.8997 38.7202 15.1463 37.1083ZM37.1327 18.75C37.1327 20.822 36.2283 22.8091 34.6185 24.2743C33.0087 25.7394 30.8254 26.5625 28.5488 26.5625C26.2722 26.5625 24.0888 25.7394 22.479 24.2743C20.8692 22.8091 19.9648 20.822 19.9648 18.75C19.9648 16.678 20.8692 14.6909 22.479 13.2257C24.0888 11.7606 26.2722 10.9375 28.5488 10.9375C30.8254 10.9375 33.0087 11.7606 34.6185 13.2257C36.2283 14.6909 37.1327 16.678 37.1327 18.75Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/signup"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
                }
              >
                <span className="mr-5 hover:text-[#EEFF25]">Sign Up</span>
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
                }
              >
                <p className="mr-5 hover:text-[#EEFF25]">Login</p>
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
