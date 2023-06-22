import { createContext, useContext, useEffect, useState } from "react";
import { ProviderException } from "../../errors/providers/provider.exception";
import { useDeviceStorage } from "../../hooks/storage/device-storage/use-device-storage";

const AuthenticationContext = createContext<{
  authCredentials?: AuthCredentials;
  setAuthCredentials: (authCredentials: AuthCredentials) => void;
} | null>(null);

type Props = {
  children: JSX.Element;
};

export default function AuthenticationProvider({ children }: Props) {
  const [authCredentials, setAuthCredentials] = useState<AuthCredentials>();

  const { get } = useDeviceStorage();

  useEffect(() => {
    const accessToken = get<string>("accessToken");
    if (accessToken) setAuthCredentials({ accessToken });
  }, []);

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

  const { set } = useDeviceStorage();

  const setAccessToken = (accessToken: string) => {
    context.setAuthCredentials({ accessToken });
    set("accessToken", accessToken);
  };

  return {
    authCredentials: context.authCredentials,
    setAuthCredentials: context.setAuthCredentials,
    setAccessToken,
  };
};
