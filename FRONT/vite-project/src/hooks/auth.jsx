import { createContext, useContext, useReducer } from "react";
import authService from "../services/auth-service";

const user = authService.getCurrentUser();

const initialValue = !user
  ? { auth: false }
  : { auth: true, email: user.email };

const AuthContext = createContext(initialValue);

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { auth: true, email: action.payload.email };

    case "logout":
      return { auth: false };

    default:
      throw new Error("");
  }
}

const AuthProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialValue);

  return (
    <AuthContext.Provider value={[value, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
