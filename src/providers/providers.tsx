import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthenticationProvider from "./authentication/authentication-provider";
import ServerProvider from "./server/server-provider";
import ThemeProvider from "./theme/theme-provider";
import ServerInfoProvider from "./server/server-info-provider";

type Props = {
  children: JSX.Element;
};

export default function Providers({ children }: Props) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ServerProvider>
          <ServerInfoProvider>
            <AuthenticationProvider>{children}</AuthenticationProvider>
          </ServerInfoProvider>
        </ServerProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
