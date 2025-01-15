import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { MdCheckCircle } from 'react-icons/md';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import './Login.css';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginLoading, setIsLoginLoading] = useState(false); // Separate state for Login button
  const [isGoogleLoading, setIsGoogleLoading] = useState(false); // Separate state for Google button
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [userName, setUserName] = useState('');
  const [greeting, setGreeting] = useState('');

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  // Function to get personalized greeting based on time of day
  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) {
      return 'Good morning';
    } else if (hours < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true); // Start loading animation for Google sign-in button
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user.displayName) {
        setUserName(user.displayName);
        setGreeting(`${getGreeting()}, ${user.displayName}`);
      } else {
        setGreeting(getGreeting());
      }

      setIsLoggedIn(true);
    } catch (error) {
      console.error('Google Sign-In error: ', error);
    } finally {
      setIsGoogleLoading(false); // Stop loading animation for Google sign-in button
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoginLoading(true); // Start loading animation for Login button
    try {
      // Add your login logic here (e.g., signInWithEmailAndPassword)
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Login error: ', error);
    } finally {
      setIsLoginLoading(false); // Stop loading animation for Login button
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[600px] bg-gray-900">
      {!isLoggedIn ? (
        <div className="title-animation w-full max-w-md p-8 space-y-4 bg-gray-800 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-white text-center">Login</h2>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="relative">
              <input
                required
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 text-white bg-gray-700 border-b-2 border-transparent focus:outline-none focus:border-purple-700 rounded-md"
                placeholder="Email"
              />
            </div>

            <div className="relative">
              <input
                required
                type={showPassword ? 'text' : 'password'} // Show password based on state
                id="password"
                name="password"
                className="w-full px-4 py-3 text-white bg-gray-700 border-b-2 border-transparent focus:outline-none focus:border-purple-700 rounded-md"
                placeholder="Password"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3 text-white cursor-pointer"
              >
                {showPassword ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-lg font-semibold text-white bg-purple-700 rounded-lg hover:bg-purple-500 transition-all duration-300"
              disabled={isLoginLoading}
            >
              {isLoginLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="flex items-center justify-center space-x-2">
            <div className="w-full h-px bg-gray-500"></div>
            <span className="text-gray-400">or</span>
            <div className="w-full h-px bg-gray-500"></div>
          </div>

          <button
            className="flex items-center justify-center w-full py-3 text-lg font-semibold text-gray-800 bg-white rounded-lg hover:bg-gray-200 transition-all duration-300"
            onClick={handleGoogleSignIn}
            disabled={isGoogleLoading}
          >
            {isGoogleLoading ? 'Signing in...' : (
              <>
                <FcGoogle className="w-6 h-6 mr-2" /> Sign in with Google
              </>
            )}
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full max-w-md p-8 bg-gray-800 rounded-xl shadow-md">
          <MdCheckCircle className="text-green-500 w-16 h-16 animate-pulse" />
          <h2 className="mt-4 text-2xl font-bold text-white text-center">
            {greeting}, you are logged in!
          </h2>
        </div>
      )}
    </div>
  );
};

export default Login;
