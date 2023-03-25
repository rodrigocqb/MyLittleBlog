import IUser from "../../interfaces/IUser";
import { get } from "../getApi";

export async function getUsers(): Promise<IUser[]> {
  const response = await get("/users");
  return response.data as IUser[];
}