import { Card } from "react-daisyui";
import { useServer } from "../../../../providers/server/server-provider";
import { useEffect } from "react";
import { useServerInfo } from "../../../../hooks/api/server/info/use-server-info";
import pj from "../../../../../package.json";

export default function ServerCheck() {
  const { setServer } = useServer();

  const { data: serverInfo } = useServerInfo();

  useEffect(() => {
    checkVersion();
  }, [serverInfo]);

  const checkVersion = async () => {
    // Change to stateful request
  };

  return (
    <Card className="bg-neutral-focus">
      <Card.Body></Card.Body>
    </Card>
  );
}
