import { Service } from "@/types"


const URL = `${process.env.NEXT_PUBLIC_API_URL}/services`;

const GetService = async(id: string): Promise<Service> => {
    const res = await fetch(`${URL}/${id}`);

    console.log(res);

    return res.json();
}

export default GetService;