import AuthenticationProvider from "./authentication/authentication-provider";
import ThemeProvider from "./theme/theme-provider";

type Props = {
  children: JSX.Element;
};

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider>
      <AuthenticationProvider>{children}</AuthenticationProvider>
    </ThemeProvider>
  );
}
