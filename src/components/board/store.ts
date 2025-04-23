import { create } from "zustand";
import { combine } from "zustand/middleware";

export type SquareValue = "X" | "O" | null;
export type History = SquareValue[][];

// NOTE: ステート
interface GameState {
  history: History;
  currentMove: number;
}

// NOTE: アクション
interface GameActions {
  setHistory: (nextHistory: History | ((prev: History) => History)) => void;
  setCurrentMove: (
    nextCurrentMove: number | ((prev: number) => number)
  ) => void;
}

export const useGameStore = create(
  combine<GameState, GameActions>(
    // NOTE: 初期値
    {
      history: [Array(9).fill(null)],
      currentMove: 0,
    },
    // NOTE: アクション
    (set) => ({
      setHistory: (nextHistory) => {
        set((state) => ({
          history:
            typeof nextHistory === "function"
              ? nextHistory(state.history)
              : nextHistory,
        }));
      },
      setCurrentMove: (nextCurrentMove) => {
        set((state) => ({
          currentMove:
            typeof nextCurrentMove === "function"
              ? nextCurrentMove(state.currentMove)
              : nextCurrentMove,
        }));
      },
    })
  )
);
