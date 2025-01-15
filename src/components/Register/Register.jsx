import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { MdCheckCircle } from 'react-icons/md';
import { ImSpinner2 } from 'react-icons/im';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import './Register.css';
import { auth, provider, signInWithPopup } from '../../firebase'; // Import createUserWithEmailAndPassword

const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false); // Separate state for Register button
  const [isGoogleLoading, setIsGoogleLoading] = useState(false); // Separate state for Google button
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const validatePassword = (password) => {
    if (password.length < 8) {
      alert('Password must be at least 8 characters long!');
      return false;
    }
    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;

    if (!validatePassword(password)) return;

    setIsRegisterLoading(true); // Start loading animation for Register button

    try {
      // Add registration logic here (e.g., createUserWithEmailAndPassword)
      // await createUserWithEmailAndPassword(auth, email, password);
      setIsRegistered(true);
    } catch (error) {
      console.error("Registration failed", error);
      alert("Registration failed: " + error.message);
    } finally {
      setIsRegisterLoading(false); // Stop loading animation for Register button
    }
  };

  // Google Sign-In function
  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true); // Start loading animation for Google button

    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user); // You can use the user information here
      setIsRegistered(true); // Assuming you consider Google sign-in as registration
    } catch (error) {
      console.error("Google sign-in failed", error);
      alert("Google sign-in failed: " + error.message);
    } finally {
      setIsGoogleLoading(false); // Stop loading animation for Google button
    }
  };

  // Toggle the visibility of the password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-[600px] bg-gray-900">
      {!isRegistered ? (
        <div className="title-animation w-full max-w-md p-8 space-y-4 bg-gray-800 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-white text-center">Register</h2>

          <form className="space-y-6" onSubmit={handleRegister}>
            <div className="relative">
              <input
                required
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 text-white bg-gray-700 border-b-2 border-transparent focus:outline-none focus:border-purple-700 rounded-md"
                placeholder="Name"
              />
            </div>

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
                type={showPassword ? 'text' : 'password'} // Conditionally change the input type
                id="password"
                name="password"
                className="w-full px-4 py-3 text-white bg-gray-700 border-b-2 border-transparent focus:outline-none focus:border-purple-700 rounded-md"
                placeholder="Password"
              />
              {/* Toggle button for show/hide password */}
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-whit"
              >
                {showPassword ? (
                  <AiFillEyeInvisible className="w-6 h-6" />
                ) : (
                  <AiFillEye className="w-6 h-6" />
                )}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-lg font-semibold text-white bg-purple-700 rounded-lg hover:bg-purple-500 transition-all duration-300"
              disabled={isRegisterLoading}
            >
              {isRegisterLoading ? (
                <ImSpinner2 className="w-5 h-5 mx-auto animate-spin" />
              ) : (
                'Register'
              )}
            </button>
          </form>

          <div className="flex items-center justify-center space-x-2">
            <div className="w-full h-px bg-gray-500"></div>
            <span className="text-gray-400">or</span>
            <div className="w-full h-px bg-gray-500"></div>
          </div>

          {/* Sign in with Google Button */}
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center w-full py-3 text-lg font-semibold text-gray-800 bg-white rounded-lg hover:bg-gray-200 transition-all duration-300"
            disabled={isGoogleLoading} // Disable only Google button during loading
          >
            {isGoogleLoading ? (
              <ImSpinner2 className="w-5 h-5 mx-auto animate-spin" />
            ) : (
              <>
                <FcGoogle className="w-6 h-6 mr-2" /> Sign up with Google
              </>
            )}
          </button>
        </div>
      ) : (
        <div className="title-animation flex flex-col items-center justify-center w-full max-w-md p-8 bg-gray-800 rounded-xl shadow-md">
          <MdCheckCircle className="text-green-500 w-16 h-16 animate-pulse" />
          <h2 className="mt-4 text-2xl font-bold text-white text-center">You have been Registered!</h2>
        </div>
      )}
    </div>
  );
};

export default Register;
