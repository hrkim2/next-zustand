import create from "zustand";

//이름은 꼭 useStore안해도됨
const useStore = create((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
  removeCount: () => set(() => ({ count: 0 })),
}));

export default useStore;
