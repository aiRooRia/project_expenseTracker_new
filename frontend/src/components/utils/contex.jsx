import { createContext, useState } from "react";

export const Context = createContext([]);
export const ContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [signUpUserInfo, setSignUpUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    currencyType: "MNT",
    amount: 0,
  });
  const startLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  return (
    <Context.Provider
      value={{ isLoading, startLoading, signUpUserInfo, setSignUpUserInfo }}
    >
      {children}
    </Context.Provider>
  );
};
