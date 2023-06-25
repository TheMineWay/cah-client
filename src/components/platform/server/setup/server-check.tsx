import { Card } from "react-daisyui";
import { useServer } from "../../../../providers/server/server-provider";
import { useEffect, useState } from "react";
import { useServerInfo } from "../../../../hooks/api/server/info/use-server-info";
import pj from "../../../../../package.json";
import { isVersionBetween } from "../../../../utils/platform/version/is-version-between.util";
import { versionParse } from "../../../../utils/platform/version/version-parse.util";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Props = {
  server: string;
};

export default function ServerCheck({ server }: Props) {
  const { setServer } = useServer();
  const clientVersion = pj.version;

  const { data: serverInfo } = useQuery({
    queryFn: async () =>
      await axios.get<{
        minClientVersion: string;
        maxClientVersion: string;
        serverVersion: string;
      }>(`${server}/info`),
  });

  const [isClientVersionValid, setClientVersionValidity] = useState<
    boolean | null
  >(null);

  useEffect(() => {
    checkVersion();
  }, [serverInfo]);

  const checkVersion = async () => {
    if (!serverInfo) return;

    setClientVersionValidity(
      isVersionBetween(
        versionParse(clientVersion),
        versionParse(serverInfo.data.minClientVersion),
        versionParse(serverInfo.data.maxClientVersion)
      )
    );
  };

  const VersionCheck = () =>
    isClientVersionValid === null ? null : isClientVersionValid ? (
      <>
        <AiFillCheckCircle />
      </>
    ) : (
      <>
        <AiFillCloseCircle />
      </>
    );

  return (
    <Card className="bg-neutral-focus">
      <Card.Body>
        <VersionCheck />
      </Card.Body>
    </Card>
  );
}
