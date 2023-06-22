import { createContext, useContext, useState } from "react";
import { ProviderException } from "../../errors/providers/provider.exception";

const ServerContext = createContext<{
  server?: ServerContextType;
  setServer: (server: ServerContextType) => void;
} | null>(null);

type Props = {
  children: JSX.Element;
};

export default function ServerProvider({ children }: Props) {
  const [server, setServer] = useState<ServerContextType>();

  return (
    <ServerContext.Provider
      value={{
        server,
        setServer,
      }}
    >
      {children}
    </ServerContext.Provider>
  );
}

export const useServer = () => {
  const context = useContext(ServerContext);

  if (!context) throw new ProviderException();

  return context;
};

interface ServerContextType {
  host: string;
}
