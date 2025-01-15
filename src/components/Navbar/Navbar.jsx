import { useState, useEffect } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { NavbarMenu } from "../../mockData/data.js";
import { MdMenu } from "react-icons/md";
import { auth } from '../../firebase'; // Assuming Firebase is set up and exported
import { signOut } from 'firebase/auth'; // Import Firebase sign out function
import ResponsiveMenu from "./ResponsiveMenu.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null); // State to track the current user
  const [loading, setLoading] = useState(false); // State to track loading status
  const navigate = useNavigate();

  // Firebase Auth listener to check if user is logged in
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser); // User is logged in
      } else {
        setUser(null); // User is logged out
      }
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  // Function to handle logout
  const handleLogout = async () => {
    setLoading(true);
  
    try {
      await signOut(auth);
  
      // Generate a random wait time between 0.5 and 1.5 seconds
      const waitTime = 500 + Math.random() * 1000;
  
      setTimeout(() => {
        setLoading(false);
        navigate('/');
      }, waitTime);
    } catch (error) {
      console.error("Logout failed", error);
      setLoading(false);
    }
  };
  

  return (
    <>
      {/* Loading Indicator */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-lg z-50">
          <div className="loader"></div>
        </div>
      )}

      <div className={`container flex justify-between items-center py-6 bg-green-50 relative ${loading ? 'blur-sm' : ''}`}>
        {/* Logo section */}
        <div className="text-2xl flex items-center gap-2 font-bold">
          <img src="./logo.png" id="logo" alt="Logo" />
          <p className="font-black ml-2">Tutor-Abhi</p>
        </div>

        {/* Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6 relative">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 transition-all duration-300 font-semibold relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-purple-800 before:transition-all before:duration-300 before:transform before:translate-x-0 ${
                      isActive
                        ? "text-purple-800 before:w-full before:left-0 before:translate-x-0"
                        : "hover:text-purple-800 hover:before:w-full hover:before:translate-x-0"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Conditional Button section */}
        <div className="hidden lg:block space-x-6">
          {user ? (
            // If user is logged in, show Logout button
            <button
              onClick={handleLogout}
              className="text-white bg-red-600 font-semibold rounded-full px-6 py-2 hover:!scale-105 hover:!shadow-xl duration-300"
            >
              Logout
            </button>
          ) : (
            // If user is not logged in, show Login and Register buttons
            <>
              <NavLink to="/login">
                <button className="font-semibold transition-all duration-200 hover:text-purple-700 hover:scale-105">
                  Log in
                </button>
              </NavLink>
              <NavLink to="/register">
                <button className="text-white bg-purple-800 font-semibold rounded-full px-6 py-2 hover:!scale-105 hover:!shadow-xl duration-300">
                  Register
                </button>
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <MdMenu className="text-4xl" />
        </div>
      </div>

      {/* Mobile Sidebar section */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
