import { useAuthentication } from "../../providers/authentication/authentication-provider";
import { useServer } from "../../providers/server/server-provider";
import {
  NetworkService,
  RequestOptions,
} from "../../services/networking/network.service";

export function useRequest() {
  const { authCredentials } = useAuthentication();

  const { server } = useServer();
  const host = server?.host;

  return {
    request: async <T extends Object>({
      prefixWithHost = true,
      ...options
    }: RequestOptions & { prefixWithHost?: boolean }) =>
      new NetworkService().request<T>(
        {
          ...options,
          url: prefixWithHost ? `${host}/${options.url}` : options.url,
        },
        {
          accessToken: authCredentials?.accessToken,
        }
      ),
  };
}
