import { create } from 'zustand';
import { WindowType } from './type';
import { ReactElement } from 'react';

type WindowsMock = { [key in string]: WindowType };

export const initialZIndex = 10;
const windowsMock: WindowsMock = {
  100: {
    id: 100,
    name: 'one',
    content: <div>QQQ</div>,
    windowStates: { zIndex: 10 },
  },
  101: {
    id: 101,
    name: 'two',
    content: <div>RRR</div>,
    windowStates: { zIndex: 10 },
  },
};

type WindowStore = {
  windows: WindowsMock;
  zIndex: number;
  getWindow: (key: number) => WindowType;
  setWindow: (window: WindowsMock) => void;
  setZIndex: (zIndex: number) => void;
  openWindow: (component: ReactElement) => void;
};

export const useWindowStore = create<WindowStore>((set, b) => ({
  windows: windowsMock,
  zIndex: initialZIndex,
  getWindow: (key) => b().windows[key],
  setWindow: (window) =>
    set((state) => ({ windows: { ...state.windows, ...window } })),
  setZIndex: (zIndex) => set(() => ({ zIndex })),
  openWindow: (component) => {
    const id = Math.floor(Math.random() * 1000);
    const newWindow = {
      id,
      name: 'component',
      content: component,
    };
    return set((state) => ({ windows: { ...state.windows, [id]: newWindow } }));
  },
}));
