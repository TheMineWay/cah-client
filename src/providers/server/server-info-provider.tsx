import { createContext, useContext, useState } from "react";
import { ProviderException } from "../../errors/providers/provider.exception";
import Loading from "../../components/daisy-ui/indicators/loading";
import { isVersionBetween } from "../../utils/platform/version/is-version-between.util";
import { version as clientVersion } from "../../../package.json";
import { versionParse } from "../../utils/platform/version/version-parse.util";
import NotCompatibleServer from "../../components/platform/server/setup/not-compatible-server";

const ServerInfoContext = createContext<{
  serverInfo?: ContextType;
  setServerInfo: (serverInfo: ContextType) => void;
} | null>(null);

type Props = {
  children: JSX.Element;
};

export default function ServerInfoProvider({ children }: Props) {
  const [serverInfo, setServerInfo] = useState<ContextType>();

  return (
    <ServerInfoContext.Provider
      value={{
        serverInfo,
        setServerInfo,
      }}
    >
      <EnsureProvider>{children}</EnsureProvider>
    </ServerInfoContext.Provider>
  );
}

const EnsureProvider = ({ children }: Props) => {
  const { rawServerInfo } = useServerInfo();

  if (!rawServerInfo) return <Loading />;

  const isCompatibleClient = isVersionBetween(
    versionParse(clientVersion),
    versionParse(rawServerInfo.minClientVersion),
    versionParse(rawServerInfo.maxClientVersion)
  );

  if (isCompatibleClient) return children;

  return <NotCompatibleServer />;
};

export const useServerInfo = () => {
  const context = useContext(ServerInfoContext);

  if (!context) throw new ProviderException();
  return {
    serverInfo: context.serverInfo!,
    setServerInfo: context.serverInfo,
    rawServerInfo: context.serverInfo,
  };
};

interface ContextType {
  minClientVersion: string;
  maxClientVersion: string;
  serverVersion: string;
}
