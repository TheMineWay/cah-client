import { useQuery } from "@tanstack/react-query";
import { useRequest } from "../../../networking/use-request";

export function useServerInfo() {
  const { request } = useRequest();

  return useQuery({
    queryFn: async () =>
      await request<{
        minClientVersion: string;
        maxClientVersion: string;
        serverVersion: string;
      }>({
        url: `info`,
      }),
  });
}
