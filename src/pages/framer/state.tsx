import { create } from 'zustand';
import { WindowType } from './type';
import { LazyExoticComponent, ReactElement } from 'react';

type LazyELement = LazyExoticComponent<{
  (): JSX.Element;
  defaultProps: {
    width: number;
    height: number;
    componentName: string;
  };
}>;

type WindowsMock = { [key in string]: WindowType };

export const initialZIndex = 10;
const windowsMock: WindowsMock = {
  100: {
    id: 100,
    name: 'one',
    content: <div>QQQ</div>,
    windowStates: { zIndex: 10, top: 200, left: 200 },
  },
  101: {
    id: 101,
    name: 'two',
    content: <div>RRR</div>,
    windowStates: { zIndex: 10, top: 300, left: 300 },
  },
};

type WindowStore = {
  windows: WindowsMock;
  zIndex: number;
  getWindow: (key: number) => WindowType;
  setWindow: (window: WindowsMock) => void;
  setZIndex: (zIndex: number) => void;
  openWindow: (component: ReactElement) => void;
  closeWindow: (id: number) => void;
};

export const useWindowStore = create<WindowStore>((set, b) => ({
  windows: windowsMock,
  zIndex: initialZIndex,
  getWindow: (key) => b().windows[key],
  setWindow: (window) =>
    set((state) => ({ windows: { ...state.windows, ...window } })),
  setZIndex: (zIndex) => set(() => ({ zIndex })),
  openWindow: async (component: ReactElement) => {
    const id = Math.floor(Math.random() * 1000);
    const newWindow = {
      id,
      name: component.props.componentName,
      content: component,
    };
    return set((state) => ({ windows: { ...state.windows, [id]: newWindow } }));
  },
  closeWindow: (id) =>
    set((state) => {
      const updatedWindows = { ...state.windows };
      delete updatedWindows[id];
      return { windows: updatedWindows };
    }),
}));
