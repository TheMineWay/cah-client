import { Card } from "react-daisyui";
import { useServer } from "../../../../providers/server/server-provider";
import { useEffect } from "react";
import { useServerInfo } from "../../../../hooks/api/server/info/use-server-info";
import pj from "../../../../../package.json";

export default function ServerCheck() {
  const { setServer } = useServer();

  const getServerInfo = useServerInfo();

  useEffect(() => {
    checkVersion();
  }, []);

  const checkVersion = async () => {
    // Change to stateful request
    const serverInfo = await getServerInfo();
  };

  return (
    <Card className="bg-neutral-focus">
      <Card.Body></Card.Body>
    </Card>
  );
}
