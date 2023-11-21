import { useEffect, useState, createContext } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from "prop-types";
import {
  signOut,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(user);
  const mainAxios = useAxios();

  // implement google sign in
  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoading(true);

    return signInWithPopup(auth, provider)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "You have successfully logged in!",
          icon: "success",
        });
      })
      .catch(() =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        })
      );
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const Register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Watch USER
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("user in the auth state changed", currentUser);
      // const userEmail = currentUser?.email || user?.email;
      // const payload = { email: userEmail };

      setUser(currentUser);
      // console.log(currentUser);
      setLoading(false);
      // if (currentUser !== null) {
      //   mainAxios.post("/access-token", payload).then(() => {
      //     // console.log("Token response: ", res.data);
      //   });
      // } else {
      //   mainAxios.get("/clear-token").then(() => {
      //     // console.log(res.data)
      //   });
      // }
    });
    return () => {
      return unsubscribe();
    };
  }, [user, mainAxios]);

  const authInfo = {
    user,
    loading,
    googleSignIn,
    logOut,
    Register,
    login,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;
