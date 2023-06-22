import { HttpMethods } from "../../../services/networking/network.service";
import { useRequest } from "../../networking/use-request";

export function useLogin() {
  const { request } = useRequest();

  return async (nick: string, password: string) =>
    await request<{
      accessToken: string;
    }>({
      url: "auth/login",
      body: {
        nick,
        password,
      },
      method: HttpMethods.POST,
    });
}
