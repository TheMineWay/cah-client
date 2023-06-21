import { useAuthentication } from "../../providers/authentication/authentication-provider";
import {
  NetworkService,
  RequestOptions,
} from "../../services/networking/network.service";

export function useRequest() {
  const { authCredentials } = useAuthentication();

  return async (options: RequestOptions) =>
    new NetworkService().request(options, {
      accessToken: authCredentials?.accessToken,
    });
}
