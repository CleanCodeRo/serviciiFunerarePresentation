"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { PlusIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export const BillboardClient = () => {

    const router = useRouter();
    const params = useParams();


    return (
        <>
            <div className="flex items-center justify-between">
                <Heading 
                    title="Billboards (Coming Soon)"
                    description="Manage your billboards here."
                />
                <Button
                    onClick={() => router.push(`/${params.storeId}/billboards/new`)}
                >
                    <PlusIcon className="mr-2 h-4 w-4" />
                    Add Billboard
                </Button>
            </div>
            <Separator />
        </>
    )
};
