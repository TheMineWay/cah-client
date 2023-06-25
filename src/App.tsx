import { Button } from "react-daisyui";
import { useAuthentication } from "./providers/authentication/authentication-provider";
import AuthenticationPage from "./pages/platform/authentication-page";

export default function App() {
  return <AppContent />;
}

const AppContent = () => {
  const { authCredentials } = useAuthentication();

  if (!authCredentials) return <AuthenticationPage />;

  return (
    <>
      <Button color="primary">Helo world</Button>
    </>
  );
};
