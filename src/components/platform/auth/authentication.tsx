import { Card } from "react-daisyui";
import Login from "./login";

export default function Authentication() {
  return (
    <Card className="bg-neutral-focus">
      <Card.Body>
        <Login />
      </Card.Body>
    </Card>
  );
}
