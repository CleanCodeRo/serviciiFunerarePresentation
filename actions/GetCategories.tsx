import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories?timestamp=${Date.now()}`;

const GetCategories = async (): Promise<Category[]> => {

    const res = await fetch(URL)

  return res.json()
};

export default GetCategories;
