import { Button } from "react-daisyui";
import { useAuthentication } from "./providers/authentication/authentication-provider";
import Authentication from "./components/platform/auth/authentication";

export default function App() {
  const { authCredentials } = useAuthentication();

  if (!authCredentials) return <Authentication />;

  return (
    <>
      <Button color="primary">Helo world</Button>
    </>
  );
}
