import { Button } from "react-daisyui";
import { useAuthentication } from "./providers/authentication/authentication-provider";
import AuthenticationPage from "./pages/platform/authentication-page";
import { useServer } from "./providers/server/server-provider";
import ServerSetupPage from "./pages/platform/server-setup-page";

export default function App() {
  return (
    <div className="w-screen h-screen bg-neutral-content">
      <AppContent />
    </div>
  );
}

const AppContent = () => {
  const { server } = useServer();
  const { authCredentials } = useAuthentication();

  if (!server) return <ServerSetupPage />;
  if (!authCredentials) return <AuthenticationPage />;

  return (
    <>
      <Button color="primary">Helo world</Button>
    </>
  );
};
