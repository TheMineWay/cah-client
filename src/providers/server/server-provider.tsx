import { createContext, useContext, useState } from "react";
import { ProviderException } from "../../errors/providers/provider.exception";
import ServerSetupPage from "../../pages/platform/server-setup-page";

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
      <EnsureProvider>{children}</EnsureProvider>
    </ServerContext.Provider>
  );
}

const EnsureProvider = ({ children }: Props) => {
  const { server } = useServer();

  if (server) return children;
  return <ServerSetupPage />;
};

export const useServer = () => {
  const context = useContext(ServerContext);

  if (!context) throw new ProviderException();

  return context;
};

interface ServerContextType {
  host: string;
}
