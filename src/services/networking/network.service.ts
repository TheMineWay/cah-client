import axios, { AxiosRequestConfig } from "axios";

export type RequestOptions = {
  url: string;

  body?: Object;
  headers?: Record<string, string>;
  query?: Record<string, Object>;
};

type AppRequestOptions = {
  accessToken?: string;
};

export class NetworkService {
  async request(
    { url, query, headers, body: data }: RequestOptions,
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
    };

    return await axios.request(config);
  }
}
