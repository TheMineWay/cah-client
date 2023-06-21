import { createContext, useContext, useState } from "react";
import { ProviderException } from "../../errors/providers/provider.exception";

const AuthenticationContext = createContext<{
  authCredentials?: AuthCredentials;
  setAuthCredentials: (authCredentials: AuthCredentials) => void;
} | null>(null);

type Props = {
  children: JSX.Element;
};

export default function AuthenticationProvider({ children }: Props) {
  const [authCredentials, setAuthCredentials] = useState<AuthCredentials>();

  return (
    <AuthenticationContext.Provider
      value={{
        authCredentials,
        setAuthCredentials,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

interface AuthCredentials {
  accessToken: string;
}

export const useAuthentication = () => {
  const context = useContext(AuthenticationContext);

  if (!context) throw new ProviderException();

  return {
    authCredentials: context.authCredentials,
    setAuthCredentials: context.setAuthCredentials,
  };
};
