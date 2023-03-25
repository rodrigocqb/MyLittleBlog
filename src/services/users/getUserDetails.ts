import IUser from "../../interfaces/IUser";
import { get } from "../getApi";

export async function getUserDetails(id: number): Promise<IUser> {
  const response = await get(`/users/${id}`);
  return response.data as IUser;
}
