import { useAuthentication } from "../../providers/authentication/authentication-provider";
import {
  NetworkService,
  RequestOptions,
} from "../../services/networking/network.service";

export function useRequest() {
  const { authCredentials } = useAuthentication();

  // Replace with host provider
  const host = "http://localhost:4000";

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
