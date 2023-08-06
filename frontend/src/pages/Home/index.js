import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";

export const Home = () => {
  const { user, signOut } = useContext(AuthGoogleContext);

  console.log(user);
  return (
    <div>
      <h1>Bem vindo {user.name}</h1>
      <button
        onClick={() => {
          signOut();
        }}
      >
        Sair
      </button>
    </div>
  );
};
