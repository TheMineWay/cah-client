import { HttpMethods } from "../../../services/networking/network.service";
import { useRequest } from "../../networking/use-request";

export function useLogin() {
  const { request } = useRequest();

  return async (nickname: string, password: string) =>
    await request<{
      accessToken: string;
    }>({
      url: "auth/login",
      body: {
        nickname,
        password,
      },
      method: HttpMethods.POST,
    });
}
