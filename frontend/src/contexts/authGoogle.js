import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../services/firebaseConfig";

const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({});

export const AuthGoogleProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  useEffect(() => {
    const loadStoreAuth = () => {
      const token = sessionStorage.getItem("@Auth:token");
      const sessionUser = sessionStorage.getItem("@Auth:user");
      if (token && sessionUser) {
        setUser(sessionUser);
      }
    };
    loadStoreAuth();
  }, []);

  const confirmLogin = (token, userData) => {
    const body = {
      name: userData.displayName,
      email: userData.email,
      accountId: userData.uid,
    };

    fetch("http://localhost:3001/confirm-google-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        sessionStorage.setItem("@Auth:token", token);
        sessionStorage.setItem("@Auth:user", JSON.stringify(userData));
        setUser(body);
      });
  };

  const signWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const userResponseData = result.user;

        confirmLogin(token, userResponseData);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.log(
          `Error Code: ${errorCode} | Error Message: ${errorMessage} | Email: ${email} | Credential: ${credential}`
        );
      });
  };

  const signOut = () => {
    sessionStorage.clear();
    setUser(null);

    return <Navigate to="/" />;
  };

  return (
    <AuthGoogleContext.Provider
      value={{ signWithGoogle, signed: !!user, user, signOut }}
    >
      {children}
    </AuthGoogleContext.Provider>
  );
};
