import { NavLink } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState, useContext } from "react";
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const { login } = useContext(AuthContext);
  // console.log(captchaRef);
  useEffect(() => {
    loadCaptchaEnginge(3);
  }, []);

  const handleCaptcha = (e) => {
    e.preventDefault();
    const user_captcha = captchaRef.current.value;
    // console.log(e.target.value);
    // console.log("captcha click: ", value);
    if (validateCaptcha(user_captcha) === true) {
      // alert("Captcha Matched");
      setDisabled(false);
    } else {
      alert("Captcha Does Not Match");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })

  }

  return (
    <div className="py-10 bg-[url('/src/assets/others/authentication.png')] min-h-screen">
      <div className="flex flex-row-reverse gap-5 rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-xl bg-[url('/src/assets/others/authentication.png') max-w-4xl mx-auto">
        <div className="flex items-center">
          <figure>
            <img src="/src/assets/others/authentication2.png" alt="" />
          </figure>
        </div>
        <div className=" relative flex flex-col  p-10">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center">
            Login
          </h4>

          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleLogin}>
            <div className="mb-4 flex flex-col gap-6">
              <div className="relative h-11 w-full min-w-[200px]">
           
                <input type="text"  name="name" className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent px-3 py-3 bg-slate-50 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  name="password"
                  type="password"
                  className="bg-slate-50 peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
              </div>
            </div>
            <div>
              <LoadCanvasTemplate reloadText="Reload My Captcha" />
              <input
                ref={captchaRef}
                name="captcha"
                type="text"
                placeholder="Type Here"
                className="rounded-lg w-full px-2 py-3 text-sm"
              />
              <button
                onClick={handleCaptcha}
                type="button"
                className="w-full bg-black text-white rounded-b-xl"
              >
                validate
              </button>
            </div>
            
            <button
              className="mt-6 block w-full select-none rounded-lg bg-[#D1A054] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
              data-ripple-light="true"
              disabled={disabled}
            >
              Sign Up
            </button>
            <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              Already registered?{" "}
              <NavLink
                className="font-medium transition-colors hover:text-blue-700"
                to="/signup"
              >
                Go to <span className="text-[#D1A054]">SignUp</span>
              </NavLink>
            </p>
          </form>
          <p className="text-center text-[#444] ">Or sign in with</p>
          <div className="flex gap-2 justify-center mt-2">
            <CiFacebook />
            <FaGoogle />
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
