import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const { signWithGoogle, signed } = useContext(AuthGoogleContext);

  if (!signed) {
    return (
      <div>
        <h1>Olá</h1>
        <button
          onClick={() => {
            signWithGoogle();
          }}
        >
          Logar com Google
        </button>
      </div>
    );
  } else {
    return <Navigate to="/home" />;
  }
};
