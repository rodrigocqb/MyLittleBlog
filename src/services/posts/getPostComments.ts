import { get } from "../getApi";
import IComment from "../../interfaces/IComment";

export async function getPostComments(id: number): Promise<IComment[]> {
  const response = await get(`/posts/${id}/comments`);
  return response.data as IComment[];
}
