import axios, { AxiosRequestConfig } from "axios";

type Options = {
  url: string;

  body?: Object;
  headers?: Record<string, string>;
  query?: Record<string, Object>;
};

type AppRequestOptions = {
  authToken?: string;
};

export class NetworkService {
  async request(
    { url, query, headers, body: data }: Options,
    { authToken }: AppRequestOptions = {}
  ) {
    const config: AxiosRequestConfig = {
      url,
      headers: {
        "Access-Token": authToken,
        ...headers,
      },
      params: query,
      data,
    };

    return await axios.request(config);
  }
}
