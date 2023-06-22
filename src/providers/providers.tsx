import AuthenticationProvider from "./authentication/authentication-provider";
import ServerProvider from "./server/server-provider";
import ThemeProvider from "./theme/theme-provider";

type Props = {
  children: JSX.Element;
};

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider>
      <ServerProvider>
        <AuthenticationProvider>{children}</AuthenticationProvider>
      </ServerProvider>
    </ThemeProvider>
  );
}
