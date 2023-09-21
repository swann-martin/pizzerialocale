import { NextApiRequest, NextApiResponse } from "next";
import getAllFoods from "../../../lib/getAllFood";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const allFoods = await getAllFoods();
    return res.status(200).json(allFoods);
  } catch (error) {
    console.error("Error: fetch ", error);
    return res.status(500).json(error);
  }
}
