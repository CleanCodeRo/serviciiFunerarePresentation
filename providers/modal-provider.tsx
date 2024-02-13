'use client'

import { StoreModal } from "@/components/modals/store-modal";
import { useEffect, useState } from "react";


export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])


    if(!isMounted) {
        return null;
    }


    // this is so it is globally available
    return (
        <>
            <StoreModal />
        </>
    )

}
