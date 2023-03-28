import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => {
    return {
      address: "test",
    };
  },
  getters: {
    getAddress: (state) => state.address,
  },
});
