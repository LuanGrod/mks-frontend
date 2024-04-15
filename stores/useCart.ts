import { Product } from "@/lib/types";
import { create } from "zustand";

export type CartItem = {
  product: Product,
  quantity: number,
}

export type CartState = {
  isVisible: boolean,
  items: CartItem[]
}

export type CartActions = {
  toggleCart: () => void
  addItem: (item: CartItem) => void
  removeItem: (item: CartItem) => void
  addOne: (item: CartItem) => void
  removeOne: (item: CartItem) => void
}

export type CartStore = CartState & CartActions

const useCart = create<CartStore>((set) => ({
  isVisible: false,
  toggleCart: () => set((state: CartState) => ({ isVisible: !state.isVisible })),
  items: [],
  isActive: () => console.log('Cart is active'),
  addItem: (item: CartItem) => set((state: CartState) => {
    const existingItem = state.items.find((i) => i.product.id === item.product.id);
    if (existingItem) {
      return state;
    }
    return { items: [...state.items, item] };
  }),
  removeItem: (item: CartItem) => set((state: { items: CartItem[] }) => ({
    items: state.items.filter((i) => i !== item),
  })),
  addOne: (item: CartItem) => set((state: CartState) => {
    const updatedItems = state.items.map((i) => {
      if (i === item) {
        return { ...i, quantity: i.quantity + 1 };
      }
      return i;
    });
    return { items: updatedItems };
  }),
  removeOne: (item: CartItem) => set((state: CartState) => {
    const updatedItems = state.items.map((i) => {
      if (i === item) {
        const updatedQuantity = i.quantity - 1;
        if (updatedQuantity <= 0) {
          return null;
        }
        return { ...i, quantity: updatedQuantity };
      }
      return i;
    }).filter(Boolean) as CartItem[];
    return { items: updatedItems };
  }),
}));

export default useCart;
