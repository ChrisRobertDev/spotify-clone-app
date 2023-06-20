import { create } from "zustand";

interface PlayerStore {
  ids: string[];
  activeId?: string;
  volume: number;
  setVolume: (volume: number) => void;
  setId: (id: string) => void;
  setIds: (ids: string[]) => void;
  reset: () => void;
}

const usePlayer = create<PlayerStore>((set) => ({
  ids: [],
  activeId: undefined,
  volume: 0.7,
  setVolume: (volume: number) => set({ volume }),
  setId: (id: string) => set({ activeId: id }),
  setIds: (ids: string[]) => set({ ids: ids }),
  reset: () => ({ ids: [], activeId: undefined }),
}));

export default usePlayer;
