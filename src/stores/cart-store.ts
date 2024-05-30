import { Product } from "@/types";
import { defineStore } from "pinia";

export type RootState = {
  items: Array<{ count: number; item: Product }>;
};

export const useCartStore = defineStore("cart-store", {
  state: () =>
    ({
      items: [],
    } as RootState),

  getters: {
    isInCart(state) {
      return (productId: string) =>
        state.items.some((item) => item.item._id === productId) ?? true;
    },
    getTotalPrice(state) {
      return state.items
        .reduce(
          (accumulator, currentValue) =>
            accumulator + currentValue.count * currentValue.item.price,
          0
        )
        .toFixed(2);
    },
  },

  actions: {
    addItem(item: Product) {
      this.items.push({ count: 1, item });
    },
    removeItem(productId: string) {
      this.items = this.items.filter((item) => item.item._id !== productId);
    },
    changeItemCount(productId: string, action: "increase" | "decrease") {
      const currentItemIndex = this.items.findIndex(
        (item) => item.item._id === productId
      );

      const currentCount = this.items[currentItemIndex].count;

      this.items[currentItemIndex].count =
        action === "decrease" ? currentCount - 1 : currentCount + 1;
    },
  },
});
