// import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        role: "user"
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div className="flex gap-2 justify-center mt-2">
      <button type="button" onClick={handleGoogleSignIn} className="flex gap-2 justify-center items-center border-4 p-2">
        <FaGoogle /> Sign In with Google
      </button>
      {/* <CiFacebook /> */}

      {/* <FaGithub /> */}
    </div>
  );
};

export default SocialLogin;
