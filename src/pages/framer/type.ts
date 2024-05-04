import { ReactElement, RefObject } from 'react';

export type WindowType = {
  parentRef?: RefObject<Element>;
  content: ReactElement;
  id: string;
  name: string;
  windowStates?: WindowStates;
  componentStates?: ComponentStates;
};

type WindowStates = {
  width?: number;
  height?: number;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  top?: number;
  left?: number;
  zIndex?: number;
  isSaved?: boolean;
};

type ComponentStates = Record<string, unknown>;
