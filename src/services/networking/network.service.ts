import axios, { AxiosRequestConfig } from "axios";

export type RequestOptions = {
  url: string;

  body?: Object;
  headers?: Record<string, string>;
  query?: Record<string, Object>;
  method?: HttpMethods;
};

export enum HttpMethods {
  GET = "get",
  POST = "post",
  DELETE = "delete",
  PUT = "put",
  HEAD = "head",
  OPTIONS = "options",
}

type AppRequestOptions = {
  accessToken?: string;
};

export class NetworkService {
  async request<T extends Object>(
    {
      url,
      query,
      headers,
      body: data,
      method = HttpMethods.GET,
    }: RequestOptions,
    { accessToken }: AppRequestOptions = {}
  ) {
    const config: AxiosRequestConfig = {
      url,
      headers: {
        "Access-Token": accessToken,
        ...headers,
      },
      params: query,
      data,
      method,
    };

    return await axios.request<T>(config);
  }
}
