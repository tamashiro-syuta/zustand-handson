import { create } from "zustand";

interface BearState {
  bears: number;
  objectState: {
    s: string;
    n: number;
  };

  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
  updateObjectString: (nextString: string | ((prev: string) => string)) => void;
  updateObjectNumber: (nextNumber: number | ((prev: number) => number)) => void;

  // セレクター
  getObjectStateString: () => string;
  getObjectStateNumber: () => number;
}

export const useBearStore = create<BearState>((set, get) => ({
  bears: 0,
  objectState: {
    s: "",
    n: 0,
  },

  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears: number) => set({ bears: newBears }),
  updateObjectString: (nextString) => {
    console.log("updateObjectString", nextString);
    set((state) => ({
      objectState: {
        ...state.objectState,
        s:
          typeof nextString === "function"
            ? nextString(state.objectState.s)
            : nextString,
      },
    }));
  },
  updateObjectNumber: (nextNumber) => {
    console.log("updateObjectNumber", nextNumber);
    set((state) => ({
      objectState: {
        ...state.objectState,
        n:
          typeof nextNumber === "function"
            ? nextNumber(state.objectState.n)
            : nextNumber,
      },
    }));
  },

  // セレクター実装
  getObjectStateString: () => get().objectState.s,
  getObjectStateNumber: () => get().objectState.n,
}));
