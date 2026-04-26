//createContext is used to create a global data
import { createContext, useState, useContext } from "react";

export const AuthContext = createContext(null); //creating a context

function AuthProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem("currentUserEmail")
      ? { email: localStorage.getItem("currentUserEmail") }
      : null,
  );

  //FUNCTION FOR SIGN UP
  function signUp(email, password) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // CHECK IF USER HAS ALREDY SIGNED UP
    if (users.find((u) => u.email === email)) {
      return { success: false, error: "Email already exists" };
    }

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUserEmail", email);

    setUser({ email }); //setting the user value

    return { success: true };
  }

  function login(email, password) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      return { success: false, error: "Invalid email or password" };
    }

    localStorage.setItem("currentUserEmail", email);
    setUser({ email });
    return { success: true };
  }

  function logout() {
    localStorage.removeItem("currentUserEmail");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signUp, user, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

//this is useull coz we dont import AuthContext and use this fucntion instead
export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
