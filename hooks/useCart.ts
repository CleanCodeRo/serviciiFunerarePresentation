import { create } from "zustand";
import { Product, Service } from "@/types";
import { persist, createJSONStorage } from "zustand/middleware";
import toast from "react-hot-toast";

interface CartStore {
    items: Product[];
    services: Service[];
    add: (item: Product | Service) => void;
    remove: (id: string, type: 'product' | 'service') => void;
    removeAll: () => void;
}

const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        services: [], // Added the missing 'services' property
        add: (data: Product | Service) => {
            const currentItems = get().items;
            const existingItem = currentItems.find((item) => item.id === data.id);
            const currentServices = get().services;
            const existingService = currentServices.find((service) => service.id === data.id);

            if (existingItem || existingService) {
                return toast("Item already in cart");
            }

            if ('category' in data) {
                set({ items: [...get().items, data as Product] });
                toast.success("Product added to cart");
            } else {
                set({ services: [...get().services, data as Service] });
                toast.success("Service added to cart");
            }
        },
        remove: (id: string, type: 'product' | 'service') => {
            if (type === 'product') {
                set({ items: [...get().items.filter((item) => item.id !== id)] });
                toast.success("Product removed from cart");
            } else {
                set({ services: [...get().services.filter((service) => service.id !== id)] });
                toast.success("Service removed from cart");
            }
        },
        removeAll: () => set({ items: [], services: [] }),
    }), {
        name: 'cart-storage',
        storage: createJSONStorage(() => localStorage),
    })
);

export default useCart;
