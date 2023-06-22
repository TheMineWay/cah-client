import { useRequest } from "../../../networking/use-request";

export function useServerInfo() {
  const { request } = useRequest();

  return async () =>
    await request<{
      minClientVersion: string;
      maxClientVersion: string;
      serverVersion: string;
    }>({
      url: "info",
    });
}
