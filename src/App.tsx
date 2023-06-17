import { Button } from "react-daisyui";
import Providers from "./providers/providers";

export default function App() {
  return (
    <Providers>
      <>
        <Button color="primary">Helo world</Button>
      </>
    </Providers>
  );
}
