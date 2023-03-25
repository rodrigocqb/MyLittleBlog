import IPost from "../../interfaces/IPost";
import { get } from "../getApi";

export async function getPosts(id: number): Promise<IPost[]> {
  const response = await get("/posts");
  return response.data as IPost[];
}
