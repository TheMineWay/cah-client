import { MissingAccessTokenException } from "../../../errors/authentication/missing-access-token.exception";
import { useAuthentication } from "../../../providers/authentication/authentication-provider";

export function useAccessToken() {
  const { authCredentials } = useAuthentication();

  if (!authCredentials) throw new MissingAccessTokenException();

  return { accessToken: authCredentials.accessToken };
}
