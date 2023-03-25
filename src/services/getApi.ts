import axios, { AxiosResponse } from "axios";

export type RequestPromise = Promise<AxiosResponse<any, any>>;

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export async function get(url: string) {
  const promise = instance.get(url);
  return promise as RequestPromise;
}
